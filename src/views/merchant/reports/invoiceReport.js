import {Link} from "react-router-dom";
import {useState} from "react";
import EditInvoice from "./editInvoice";
import DelInvoice from "./delInvoice";

export default function InvoiceReport() {
    const [delDialog, setDelDialog] = useState(false)
    const [editDialog, setEditDialog] = useState(false)
    return (
        <>
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Invoice Reports</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Invoice Reports List</h5>
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
                                            <th>Invoice Number</th>
                                            <th>Medicine Name</th>
                                            <th>Total Amount</th>
                                            <th>Created Date</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                                                <tr>
                                                    <td><Link to={'/merchant/invoice'}>#IN000{index + 1}</Link></td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="#">
                                                                <img className="avatar avatar-img"
                                                                     src={require("../../../assets/img/products/product1.jpg")}
                                                                     alt="User Image"/> Abilify</a>
                                                        </h2>
                                                    </td>
                                                    <td>$100.00</td>
                                                    <td>9 Sep 2019</td>
                                                    <td className="text-center">
                                                    <span
                                                        className="badge rounded-pill bg-success inv-badge">Paid</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <a className="text-black"
                                                               onClick={() => setEditDialog(true)}
                                                               data-bs-toggle="modal"
                                                               href="#">
                                                                <i className="feather-edit-3 me-1"></i> Edit
                                                            </a>
                                                            <a data-bs-toggle="modal" href="#"
                                                               onClick={() => setDelDialog(true)}
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
                        <div id="tablepagination" className="dataTables_wrapper"></div>
                    </div>
                </div>
            </div>
            <EditInvoice dialog={editDialog} setDialog={setEditDialog}/>
            <DelInvoice dialog={delDialog} setDialog={setDelDialog}/>
        </>

    )
}