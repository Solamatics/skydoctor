import {Link} from "react-router-dom";

export  default function Appointments(){
    return (
        <div className="card card-table mb-0">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                        <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Appt Date</th>
                            <th>Booking Date</th>
                            <th>Amount</th>
                            <th>Follow Up</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            [1,2,3,4,5].map((item,index)=>(
                                <tr key={index}>
                                    <td>
                                        <h2 className="table-avatar">
                                            <Link to={'/patient/doctor-profile'}
                                               className="avatar avatar-sm me-2">
                                                <img className="avatar-img rounded-circle"
                                                     src={require("../../../assets/img/doctors/doctor-thumb-01.jpg")}
                                                     alt="User Image"/>
                                            </Link>

                                            <Link to={'/patient/doctor-profile'}>Dr. Ruby Perrin <span>Dental</span></Link>
                                        </h2>
                                    </td>
                                    <td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span>
                                    </td>
                                    <td>12 Nov 2019</td>
                                    <td>$160</td>
                                    <td>16 Nov 2019</td>
                                    <td><span
                                        className="badge rounded-pill bg-success-light">Confirm</span>
                                    </td>
                                    <td className="text-end">
                                        <div className="table-action">
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-primary-light me-2">
                                                <i className="fas fa-print"></i> Print
                                            </a>
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-info-light">
                                                <i className="fas fa-eye"></i> View
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