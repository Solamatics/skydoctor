import {Link} from "react-router-dom";
import {useState} from "react";
import DelSupplier from "./delSupplier";

export default function Supplier() {
    const [delDialog, setDelDialog] = useState(false)
    return (
        <>
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-sm-7 col-auto">
                            <h3 className="page-title mb-0">Supplier</h3>
                        </div>
                        <div className="col-sm-5 col">
                            <a href="add-supplier.html"
                               className="btn btn-primary float-end d-flex justify-content-between align-items-center"><i
                                className="feather-plus-square me-1"></i>Add New</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Supplier</h5>
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
                                            <th>ID</th>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Company</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="#">
                                                                <img className="avatar avatar-img"
                                                                     src={require("../../../assets/img/products/product1.jpg")}
                                                                     alt="User Image"/> Abilify</a>
                                                        </h2>
                                                    </td>
                                                    <td>Discarsa</td>
                                                    <td>+51 1542565</td>
                                                    <td><a
                                                        href="mailto:test@gmail.com"
                                                        className="__cf_email__"
                                                    >test@gmail.com</a>
                                                    </td>
                                                    <td>Paseo Los Robles</td>
                                                    <td>Discarsa Nicaragua</td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <Link to={'/merchant/edit-supplier'}  className="text-black">
                                                                <i className="feather-edit-3 me-1"></i> Edit
                                                            </Link>
                                                            <a data-bs-toggle="modal" href="#" onClick={()=>setDelDialog(true)}
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
            <DelSupplier setDialog={setDelDialog} dialog={delDialog} />
        </>

    )
}