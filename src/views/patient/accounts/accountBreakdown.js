import {Avatar, Box, Button} from "@mui/material";
import {Check, Close, Visibility} from "@mui/icons-material";
import {Link} from "react-router-dom";

const breakdown = [1,2,3,4,5,6,7,8,9]
export  default function AccountBreakdown(){


    return (
        <div className="card card-table mb-0">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Doctor Name</th>
                            <th className="text-center">Amount</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            breakdown.map((item,index)=>(
                                <tr>
                                    <td>11 Nov 2019 <span
                                        className="d-block text-info">10.00 AM</span></td>
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
                                    <td className="text-center">$150</td>
                                    <td><span className="badge rounded-pill bg-success-light">Paid</span>
                                    </td>
                                    <td className="text-end">
                                        <div className="table-action">
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-info-light me-2">
                                                <i className="fas fa-eye"></i> View
                                            </a>
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-success-light me-2">
                                                <i className="fas fa-check"></i> Accept
                                            </a>
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times"></i> Cancel
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
    )
}