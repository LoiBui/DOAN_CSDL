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


    handlePageChange = pageNumber=>{
        console.log(pageNumber)
    }

    componentDidMount(){
        const {userActionCreators} = this.props;

        let req = {
            page: this.state.activePage
        };
        userActionCreators.fetchListUser({...req});
    }
    render() {
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
                                        <label>Show 
                                            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm">
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                            </select> 
                                        </label>
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
                                    <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column descending" aria-sort="ascending" style={{ width: 93 }}>Name</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: 143 }}>Position</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: 66 }}>Office</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: 31 }}>Age</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: 68 }}>Start date</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Salary: activate to sort column ascending" style={{ width: 67 }}>Salary</th></tr>
                                </thead>
                                <tfoot>
                                    <tr><th rowSpan={1} colSpan={1}>Name</th><th rowSpan={1} colSpan={1}>Position</th><th rowSpan={1} colSpan={1}>Office</th><th rowSpan={1} colSpan={1}>Age</th><th rowSpan={1} colSpan={1}>Start date</th><th rowSpan={1} colSpan={1}>Salary</th></tr>
                                </tfoot>
                                <tbody>
                                    <tr role="row" className="odd">
                                        <td className="sorting_1">Airi Satou</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>33</td>
                                        <td>2008/11/28</td>
                                        <td>$162,700</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
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
