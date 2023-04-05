import {useState} from "react";
import DelSales from "./delSales";
import EditSales from "./editSales";
import {Link} from "react-router-dom";

export default function Sales() {

    const [delDialog, setDelDialog] = useState(false)
    const [editDialog, setEditDialog] = useState(false)


    return (
        <>
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12 col-auto">
                            <h3 className="page-title">Sales</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Sales List</h5>
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
                                            <th>Invoice No</th>
                                            <th>Medicine Name</th>
                                            <th>Total Price</th>
                                            <th>Date</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [1,2,3,4,5,6].map((item,index)=>(
                                                <tr key={index}>
                                                    <td>2017000{index+1}</td>
                                                    <td>Abilify,Actamin,Actamin</td>
                                                    <td>$220</td>
                                                    <td>12-5-2020</td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <a className="text-black" data-bs-toggle="modal"
                                                               href="#" onClick={()=>setEditDialog(true)} >
                                                                <i className="feather-edit-3 me-1"></i> Edit
                                                            </a>
                                                            <Link to={'/merchant/invoice'} className="text-black">
                                                                <i className="fas fa-file-alt me-1"></i> Invoice
                                                            </Link>
                                                            <a data-bs-toggle="modal" href="#"  onClick={()=>setDelDialog(true)} className="text-danger">
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
            <DelSales dialog={delDialog} setDialog={setDelDialog}/>
            <EditSales dialog={editDialog} setDialog={setEditDialog} />
        </>

    )
}