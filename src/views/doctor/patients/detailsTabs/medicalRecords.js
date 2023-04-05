import {Button} from "@mui/material";
import {DeleteOutlined, EditOutlined, PrintOutlined, Visibility} from "@mui/icons-material";
import {Link} from "react-router-dom";


export default function MedicalRecords({setMedicalDialog,setEditMedicalDialog}){
    return (
        <div>
            <div className="text-end">
                <Button disableElevation sx={{'&:hover': {backgroundColor: 'cyan'}}}
                        variant={'contained'} className="add-new-btn"
                        onClick={() => setMedicalDialog(true)}>Add Medical
                    Records</Button>
            </div>
            <br/>
            <div className="card card-table mb-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Attachment</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <tr key={item}>
                                        <td><a
                                            href="javascript:void(0);">#MR-0009</a>
                                        </td>
                                        <td>13 Nov 2019</td>
                                        <td>Teeth Cleaning</td>
                                        <td><a href="#">dental-test.pdf</a></td>
                                        <td>
                                            <h2 className="table-avatar">
                                                <Link  to={'/doctor/doctor-profile'}
                                                   className="avatar avatar-sm me-2">
                                                    <img
                                                        className="avatar-img rounded-circle"
                                                        src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                        alt="User Image"/>
                                                </Link>
                                                <Link  to={'/doctor/doctor-profile'}>Dr.
                                                    Darren
                                                    Elder <span>Dental</span></Link>
                                            </h2>
                                        </td>
                                        <td className="text-end">
                                            <div className="table-action">
                                                <a href="javascript:void(0);"
                                                   className="btn btn-sm bg-primary-light me-2">
                                                    <PrintOutlined
                                                        fontSize={'small'}/> Print
                                                </a>
                                                <a href="javascript:void(0);"
                                                   className="btn btn-sm bg-info-light me-2">
                                                    <Visibility
                                                        fontSize={'small'}/> View
                                                </a>
                                                <a href="#" onClick={()=>setEditMedicalDialog(true)}
                                                   className="btn btn-sm bg-success-light me-2">
                                                    <EditOutlined
                                                        fontSize={'small'}/> Edit
                                                </a>
                                                <a href="javascript:void(0);"
                                                   className="btn btn-sm bg-danger-light">
                                                    <DeleteOutlined
                                                        fontSize={'small'}/> Delete
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
    )
}