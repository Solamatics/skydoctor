import {useState} from "react";
import AddDependent from "./addDependent";
import EditDependent from "./editDependent";

export default function Dependent() {
    const [addDialog, setAddDialog] = useState(false)
    const [editDialog,setEditDialog] = useState(false)
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="card-title">Dependent</h3>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-end">
                                <a href="#modal_form" onClick={()=>setAddDialog(true)} data-bs-toggle="modal" className="btn btn-primary btn-sm"
                                   tabIndex="0">Add Dependent</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body ">

                    <div className="card card-table mb-0">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                    <thead>
                                    <tr>
                                        <th>Dependent</th>
                                        <th>Relationship</th>
                                        <th>gender</th>
                                        <th>Number</th>
                                        <th>Blood Group</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        [1, 2, 3, 4,5,6].map((item, index) => (
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                 <span className="avatar avatar-sm me-2">
                                                    <img className="avatar-img rounded-circle"
                                                         src={require("../../../assets/img/patients/patient16.jpg")} alt="User Image"/>
                                            </span>
                                                        Christopher
                                                    </h2>
                                                </td>
                                                <td>Son</td>
                                                <td>Male</td>
                                                <td>303-297-6170</td>
                                                <td>AB+</td>
                                                <td>
                                                    <div className="table-action">
                                                        <a href="#" onClick={()=>setEditDialog(true)} className="btn btn-sm bg-info-light me-2"
                                                           data-bs-toggle="modal"> <i className="fas fa-edit"></i> Edit</a>
                                                        <a href="javascript:void(0);"
                                                           className="btn btn-sm bg-danger-light"><i
                                                            className="fas fa-times"></i> Deactive</a>
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

                </div>
            </div>
            <AddDependent setDialog={setAddDialog} dialog={addDialog} />
            <EditDependent setDialog={setEditDialog} dialog={editDialog} />
        </>

    )
}