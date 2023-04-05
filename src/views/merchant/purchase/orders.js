import {useState} from "react";
import DelOrderDialog from "./delOrderDialog";

export default function Orders() {

    const [delDialog, setDelDialog] = useState(false)

    return (
        <>
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="page-title">Order</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Order List</h5>
                                    </div>
                                    <div className="col-auto custom-list d-flex">
                                        <div className="form-custom me-2">
                                            <div id="tableSearch" className="dataTables_wrapper">
                                                <div id="data-table_filter" className="dataTables_filter"><label> <input
                                                    type="search" className="form-control form-control-sm"
                                                    placeholder="Search..." aria-controls="data-table"/></label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="datatable table table-borderless hover-table" id="data-table">
                                        <thead className="thead-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Supplier ID</th>
                                            <th>Supplier Name</th>
                                            <th>Order by</th>
                                            <th>Add order</th>
                                            <th>Order list</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [1, 2, 3, 4, 5, 6,].map((item, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>256</td>
                                                    <td>Douglas Meyer</td>
                                                    <td>Trinity General Hospital</td>
                                                    <td>10-5-2020</td>
                                                    <td>Dolofin Antigripal(Dolo) 3</td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <a data-bs-toggle="modal" href="#"
                                                               onClick={() => setDelDialog(true)} className="text-danger">
                                                                <i className="feather-trash-2 me-1"></i> Delete
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="tablepagination" className="dataTables_wrapper">
                            <div className="dataTables_paginate paging_simple_numbers" id="data-table_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="data-table_previous"><a
                                        href="#" aria-controls="data-table" data-dt-idx="0" tabIndex="0"
                                        className="page-link"><i className="fas fa-chevron-left me-2"></i> Previous</a></li>
                                    <li className="paginate_button page-item active">
                                        <a href="#" aria-controls="data-table"
                                           data-dt-idx="1" tabIndex="0"
                                           className="page-link">1</a></li>
                                    <li className="paginate_button page-item next disabled" id="data-table_next">
                                        <a href="#"
                                           aria-controls="data-table"
                                           data-dt-idx="2"
                                           tabIndex="0"
                                           className="page-link">Next <i
                                            className="fas fa-chevron-right ms-2"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <DelOrderDialog setDialog={setDelDialog} dialog={delDialog} />
        </>

    )
}