import DelStockDialog from "./delStockDialog";
import {useState} from "react";
import EditStockDialog from "./editStockDialog";

export default function OutStock() {
    const [delDialog, setDelDialog] = useState(false)
    const [editDialog, setEditDialog] = useState(false)
    return (
        <>
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Outstock</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Outstock List</h5>
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
                                            <th>Brand Name</th>
                                            <th>Genetic Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Discount</th>
                                            <th>Expire</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="#">
                                                                <img className="avatar avatar-img"
                                                                     src={require("../../../assets/img/products/product1.jpg")}
                                                                     alt="User Image"/> Abilif</a>
                                                        </h2>
                                                    </td>
                                                    <td>Aripiprazole</td>
                                                    <td>Phytopathology</td>
                                                    <td>$22</td>
                                                    <td><span className="btn btn-sm bg-danger-light">THERE ONLY 2</span>
                                                    </td>
                                                    <td>0%</td>
                                                    <td><span
                                                        className="btn btn-sm bg-danger-light">THE PRODUCT IS EXPIRED</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <a onClick={()=>setEditDialog(true)} className="text-black" data-bs-toggle="modal"
                                                               href="#">
                                                                <i className="feather-edit-3 me-1"></i> Edit
                                                            </a>
                                                            <a style={{cursor:'pointer'}} onClick={()=>setDelDialog(true)} data-bs-toggle="modal"
                                                               className="text-danger">
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
            <DelStockDialog dialog={delDialog} setDialog={setDelDialog} />
            <EditStockDialog setDialog={setEditDialog} dialog={editDialog} />
        </>

    )
}