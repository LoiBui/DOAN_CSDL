import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../action/user';
import * as configTable from '../../constants/table'

export class index extends Component {

    state = {
        activePage:configTable.ACTIVE_PAGE,
        itemsCountPerPage:configTable.ITEMS_COUNT_PERPAGE,
        totalItemsCount:configTable.TOTAL_ITEM_COUNT,
        pageRangeDisplayed:configTable.PAGE_RANGE_DISPLAYED
    }

    loadData(page = 0){
        const {userActionCreators} = this.props;

        let req = {
            page: page
        };
        userActionCreators.fetchListUser({...req});
    }

    handlePageChange = pageNumber=>{
        this.loadData(pageNumber);
    }

    componentDidMount(){
        this.loadData();
    }

    renderItemTable = () => {
        let {users} = this.props.users;
        
        return users.map((item, index)=>{
            return (
                <tr role="row" className="odd" key={index}>
                    <td className="sorting_1">{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.department_name}</td>
                    <td>{item.email}</td>
                    <td>{item.target_week} / {item.current_revenue_week}</td>
                    <td>{item.target_month} / {item.current_revenue_month}</td>
                    <td>{item.target_year} / {item.current_revenue_year}</td>
                </tr>
            );
        });
        
    }
    render() {
        let {total, current_page} = this.props.users;
        return (
            
            <div className="container-fluid">
                {/* Page Heading */}
                {/* <h1 className="h3 mb-2 text-gray-800">User</h1> */}

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Danh sách nhân viên</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="dataTable_length">
                                        {/* <label>Show 
                                            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select> 
                                        </label> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="dataTable_filter" className="dataTables_filter float-right">
                                            <label>Search:
                                                <input type="search" className="form-control form-control-sm" aria-controls="dataTable" />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column descending" aria-sort="ascending" style={{ width: 93 }}>#</th>
                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: 143 }}>Tên</th>
                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: 66 }}>Bộ Phận</th>
                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: 31 }}>Email</th>
                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: 68 }}>
                                            Tuần
                                            {/* <sub>Hiện tại / Chỉ tiêu</sub>  */}
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: 68 }}>
                                            Tháng
                                            {/* <sub>Hiện tại / Chỉ tiêu</sub>  */}
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: 68 }}>
                                            Năm
                                            {/* <sub>Hiện tại / Chỉ tiêu</sub>  */}
                                        </th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th rowSpan={1} colSpan={1}>#</th>
                                        <th rowSpan={1} colSpan={1}>Tên</th>
                                        <th rowSpan={1} colSpan={1}>Bộ Phận</th>
                                        <th rowSpan={1} colSpan={1}>Email</th>
                                        <th rowSpan={1} colSpan={1}>
                                            Tuần
                                            {/* <sub>Hiện tại / Chỉ tiêu</sub>  */}
                                        </th>
                                        <th rowSpan={1} colSpan={1}>
                                            Tháng
                                            {/* <sub>Hiện tại / Chỉ tiêu</sub>  */}
                                        </th>
                                        <th rowSpan={1} colSpan={1}>
                                            Năm
                                            {/* <sub>Hiện tại / Chỉ tiêu</sub>  */}
                                        </th>
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
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        userActionCreators: bindActionCreators(userAction, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(index);
