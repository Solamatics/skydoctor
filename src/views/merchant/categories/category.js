import {useRef, useState} from "react";
import AddCategory from "./addCategory";
import DelCategory from "./delCategory";
import EditCategory from "./editCategory";

export default function Category() {

    const [delDialog, setDelDialog] = useState(false)
    const [editDialog, setEditDialog] = useState(false)
    const [addDialog, setAddDialog] = useState(false)
    const filterRef = useRef(null)
    return (
        <>
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-7 col-auto">
                            <h3 className="page-title">Categories</h3>
                        </div>
                        <div className="col-sm-5 col">
                            <a href="#" onClick={() => setAddDialog(true)} data-bs-toggle="modal"
                               className="btn btn-primary float-end d-flex justify-content-between align-items-center"><i
                                className="feather-plus-square me-1"></i> Add New</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="card-title">Categories List</h5>
                                    </div>
                                    <div className="col-auto custom-list d-flex">
                                        <div className="form-custom me-2">
                                            <div id="tableSearch" className="dataTables_wrapper">
                                                <div id="data-table_filter" className="dataTables_filter"><label> <input
                                                    type="search" className="form-control form-control-sm"
                                                    placeholder="Search..." aria-controls="data-table"/></label></div>
                                            </div>
                                        </div>
                                        <div className="SortBy">
                                            <div className="selectBoxes order-by"
                                                 onClick={() => filterRef.current.classList.toggle('d-block')}>
                                                <p className="mb-0">
                                                    <img src={require("../../../assets/img/icon/sort.png")} className="me-2"
                                                         alt="icon"/>
                                                    Order by
                                                </p>
                                                <span className="down-icon"><i className="feather-chevron-down"></i></span>
                                            </div>
                                            <div id="checkBox" ref={filterRef}>
                                                <form
                                                    action="">
                                                    <p className="lab-title">Order By </p>
                                                    <label className="custom_radio w-100">
                                                        <input type="radio" name="sort"/>
                                                        <span className="checkmark"></span> ID
                                                    </label>
                                                    <label className="custom_radio w-100">
                                                        <input type="radio" name="sort"/>
                                                        <span className="checkmark"></span> Amount
                                                    </label>
                                                    <label className="custom_radio w-100">
                                                        <input type="radio" name="sort"/>
                                                        <span className="checkmark"></span> Date Created
                                                    </label>
                                                    <p className="lab-title">Sort By</p>
                                                    <label className="custom_radio w-100">
                                                        <input type="radio" name="sort"/>
                                                        <span className="checkmark"></span> Ascending
                                                    </label>
                                                    <label className="custom_radio w-100">
                                                        <input type="radio" name="sort"/>
                                                        <span className="checkmark"></span> Descending
                                                    </label>
                                                    <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                </form>
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
                                            <th>Name</th>
                                            <th>Created date</th>
                                            <th className="text-end">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            Phytopathology‎
                                                        </h2>
                                                    </td>
                                                    <td>01-May-2020-12:00</td>
                                                    <td className="text-end">
                                                        <div className="actions">
                                                            <a className="text-black" data-bs-toggle="modal"
                                                               href="#" onClick={()=>setEditDialog(true)}>
                                                                <i className="feather-edit-3 me-1"></i> Edit
                                                            </a>
                                                            <a data-bs-toggle="modal" href="#"  onClick={()=>setDelDialog(true)}
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
            <AddCategory dialog={addDialog} setDialog={setAddDialog} />
            <DelCategory setDialog={setDelDialog} dialog={delDialog} />
            <EditCategory setDialog={setEditDialog} dialog={editDialog} />
        </>

    )
}