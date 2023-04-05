import {Link} from "react-router-dom";
import {useState} from "react";
import DelTransaction from "./delTransaction";

export default function Transaction() {
    const [delDialog, setDelDialog] = useState(false)
    return (

        <>

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title mb-0">Transactions</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Transactions List</h5>
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
                            <div className="card-body p-0" style={{overflow:'auto'}}>
                                <table className="datatable table table-borderless hover-table" id="data-table">
                                    <thead className="thead-light">
                                    <tr>
                                        <th>Invoice No</th>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Total Amount</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8,].map((item, index) => (
                                            <tr key={index}>
                                                <td><Link to={'/merchant/invoice'}>#IN000{index+1}</Link></td>
                                                <td>#0{index+1}</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="#">
                                                            <img className="avatar avatar-img"
                                                                 src={require("../../../assets/img/products/product1.jpg")}
                                                                 alt="User Image"/>
                                                            Abilify
                                                        </a>
                                                    </h2>
                                                </td>
                                                <td>$100.00</td>
                                                <td className="text-center">
                                                    <span className="badge rounded-pill bg-success inv-badge">Paid</span>
                                                </td>
                                                <td className="text-end">
                                                    <div className="actions">
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

            <DelTransaction dialog={delDialog} setDialog={setDelDialog} />
        </>




    )
}