import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as revenueAction from '../../action/revenue';
import * as configTable from '../../constants/table';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import Question from '../../component/notice/question';


export class index extends Component {

    state = {
        viewerImg: {
            visible: false,
            src: [],
            activeIndex: 0
        },
        question:{
            isShow: false,
            msg: '',
            id: ''
        },
        activePage: configTable.ACTIVE_PAGE,
        itemsCountPerPage: configTable.ITEMS_COUNT_PERPAGE,
        totalItemsCount: configTable.TOTAL_ITEM_COUNT,
        pageRangeDisplayed: configTable.PAGE_RANGE_DISPLAYED
    }

    loadData(page = 0) {
        const { revenueActionCreators } = this.props;
        let req = {
            page: page
        };
        revenueActionCreators.fetchListRevenue({ ...req });
    }

    handlePageChange = pageNumber => {
        this.loadData(pageNumber);
    }

    componentDidMount() {
        this.loadData();
    }

    previewImage = (arr, index) => {
        let src = arr.map(item => {
            return {
                src: item
            };
        });
        this.setState({
            viewerImg: {
                visible: true,
                src: src,
                activeIndex: index
            }
        });
    }
    renderImage(string) {
        let arr = string.split('|');
        return arr.map((item, index) => {
            return (
                <img onClick={() => this.previewImage(arr, index)} src={item} alt="ảnh" className="img-thumbnail" style={{ width: 50, height: 50, cursor: 'pointer' }} key={index} />
            );
        });
    }


    //delete item
    onDeleteItem = id => {
        this.setState({
            question:{
                isShow: true,
                msg: "Bạn có chắc chắn muốn xóa không ?",
                id
            },
        });
    }

    //close cpn question
    closeQuestion = ()=>{
        this.setState({
            question:{
                isShow: false,
                msg: '',
                id:''
            },
        });
    }

    onCancel = () => {
        this.closeQuestion();
    }

    onConfirm = ()=>{
        
        this.closeQuestion();
        const { revenueActionCreators } = this.props;
        let payload = {
            id: this.state.question.id
        }
        revenueActionCreators.deleteRevenue(payload);
    }

    renderItemTable = () => {
        let { revenues } = this.props.revenues;
        return revenues.map((item, index) => {
            return (
                <tr role="row" className="odd" key={index}>
                    <td className="sorting_1">{index + 1}</td>
                    <td><div style={{ width: '143px' }}>{item.date}</div></td>
                    <td><div style={{ width: '170px' }}>{item.revenue}</div></td>
                    <td><div style={{ width: '280px' }}>{this.renderImage(item.photo)}</div></td>
                    <td><div style={{ width: '143px' }}>{item.note}</div></td>
                    <td>
                        <div>
                            <button className="btn btn-info">
                                <i className="far fa-edit"></i>
                            </button>{'\u00A0'}
                            <button className="btn btn-warning" onClick={()=>this.onDeleteItem(item.id)}>
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        });

    }
    render() {
        let { total, current_page } = this.props.revenues;
        return (

            <div className="container-fluid">
                {/* Page Heading */}
                {/* <h1 className="h3 mb-2 text-gray-800">User</h1> */}

                <div className="card shadow mb-4">
                    <div className="card-header py-3" style={{display: 'flex',justifyContent: 'space-between'}}>
                        <h6 className="m-0 font-weight-bold text-primary">Danh sách Doanh Số</h6>
                        <button className="btn btn-success">Thêm Ngay</button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting_asc">#</th>
                                                    <th className="sorting">Ngày</th>
                                                    <th className="sorting">Doanh Thu</th>
                                                    <th className="sorting">Ảnh</th>
                                                    <th className="sorting">Ghi chú</th>
                                                    <th className="sorting">Hành Động</th>

                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th >#</th>
                                                    <th >Ngày</th>
                                                    <th >Doanh Thu</th>
                                                    <th >Ảnh</th>
                                                    <th >Ghi Chú</th>
                                                    <th >Hành Động</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {this.renderItemTable()}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination
                    activePage={current_page}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={total}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                />
                <Viewer
                    visible={this.state.viewerImg.visible}
                    onClose={() => { this.setState({ viewerImg: false }); }}
                    images={this.state.viewerImg.src}
                    activeIndex={this.state.viewerImg.activeIndex}
                />
                <Question 
                    isShow={this.state.question.isShow} 
                    message={this.state.question.msg}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                />
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        revenues: state.revenue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        revenueActionCreators: bindActionCreators(revenueAction, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(index);
