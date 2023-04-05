import {useState} from "react";
import {Box} from "@mui/material";
import AddMedical from "./addMedical";
import EditMedical from "./editMedical";

export default function MedicalDetails(){
    const [addDialog,setAddDialog] = useState(false)
    const [editDialog, setEditDialog] = useState(false)
    return (
        <Box>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title float-start">Medical details</h4>
                    <a onClick={()=>setAddDialog(true)} href="#modal_medical_form" className="btn btn-primary float-end"
                       data-bs-toggle="modal">Add Details</a>
                </div>
                <div className="card-body">
                    <div className="card card-table mb-0">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>BMI</th>
                                        <th className="text-center">Heart Rate</th>
                                        <th className="text-center">FBC Status</th>
                                        <th>Weight</th>
                                        <th>Order date</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        [1,2,3,4,5,6].map((item, index)=>(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>Richard Wilson</td>
                                                <td>23.7</td>
                                                <td className="text-center">89</td>
                                                <td className="text-center">140</td>
                                                <td>74Kg</td>
                                                <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span>
                                                </td>
                                                <td>
                                                    <div className="table-action">
                                                        <a href="#edit_medical_form"
                                                           onClick={()=>setEditDialog(true)}
                                                           className="btn btn-sm bg-info-light me-2"
                                                           data-bs-toggle="modal">
                                                            <i className="fas fa-edit"></i> Edit
                                                        </a>
                                                        <a href="javascript:void(0);"
                                                           className="btn btn-sm bg-danger-light">
                                                            <i className="fas fa-trash-alt"></i> Delete
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
                </div>
            </div>
            <AddMedical setDialog={setAddDialog} dialog={addDialog} />
            <EditMedical dialog={editDialog} setDialog={setEditDialog}/>

        </Box>

    )
}