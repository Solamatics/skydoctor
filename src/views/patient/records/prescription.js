import {Box} from "@mui/material";
import {Link} from "react-router-dom";


export default function Prescription(){
    return (
        <Box>
            <div className="card card-table mb-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Doctor</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                [1,2,3,4,5,].map((item,index)=>(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>11 Nov 2019 <span
                                            className="d-block text-info">10.00 AM</span></td>
                                        <td>Prescription</td>
                                        <td>
                                            <h2 className="table-avatar">
                                                <Link to={'/patient/doctor-profile'}
                                                   className="avatar avatar-sm me-2">
                                                    <img className="avatar-img rounded-circle"
                                                         src={require("../../../assets/img/doctors/doctor-thumb-01.jpg")}
                                                         alt="User Image"/>
                                                </Link>
                                                <Link to={'/patient/doctor-profile'}>Dr. Ruby Perrin
                                                    <span>Dental</span></Link>
                                            </h2>
                                        </td>
                                        <td>
                                            <div className="table-action">
                                                <a href="javascript:void(0);"
                                                   className="btn btn-sm bg-info-light me-2">
                                                    <i className="far fa-eye"></i> View
                                                </a>
                                                <a href="javascript:void(0);"
                                                   className="btn btn-sm bg-success-light">
                                                    <i className="fas fa-print"></i> Print
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
        </Box>
    )
}