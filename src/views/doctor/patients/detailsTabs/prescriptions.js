import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined, PrintOutlined, Visibility} from "@mui/icons-material";


export default  function Prescriptions(){
    return (
        <div>
            <div className="text-end">
                <Link to={'/doctor/add-prescription'} className="add-new-btn">Add
                    Prescription</Link>
            </div>
            <div className="card card-table mb-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Created by</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <tr key={item}>
                                        <td>13 Nov 2019</td>
                                        <td>Prescription 2</td>
                                        <td>
                                            <h2 className="table-avatar">
                                                <Link to={'/doctor/doctor-profile'}
                                                   className="avatar avatar-sm me-2">
                                                    <img
                                                        className="avatar-img rounded-circle"
                                                        src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                        alt="User Image"/>
                                                </Link>
                                                <Link to={'/doctor/doctor-profile'}>Dr.
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
                                                <Link
                                                    to={'/doctor/edit-prescription'}
                                                    className="btn btn-sm bg-success-light me-2">
                                                    <EditOutlined
                                                        fontSize={'small'}/> Edit
                                                </Link>
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