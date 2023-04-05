import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@mui/icons-material";


const Appointment = ()=>{
    return(
        <div>
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
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>14 Nov 2019 <span
                                    className="d-block text-info">10.00 AM</span>
                                </td>
                                <td>12 Nov 2019</td>
                                <td>$160</td>
                                <td>16 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-success-light">Confirm</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <Link to={'/doctor/edit-prescription'}
                                              className="btn btn-sm bg-success-light">
                                            <i className="far fa-edit"></i> Edit
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>12 Nov 2019 <span
                                    className="d-block text-info">8.00 PM</span>
                                </td>
                                <td>12 Nov 2019</td>
                                <td>$250</td>
                                <td>14 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-success-light">Confirm</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-success-light">
                                            <i className="far fa-edit"></i> Edit
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>11 Nov 2019 <span
                                    className="d-block text-info">11.00 AM</span>
                                </td>
                                <td>10 Nov 2019</td>
                                <td>$400</td>
                                <td>13 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-danger-light">Cancelled</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-success-light">
                                            <i className="far fa-edit"></i> Edit
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>10 Nov 2019 <span
                                    className="d-block text-info">3.00 PM</span>
                                </td>
                                <td>10 Nov 2019</td>
                                <td>$350</td>
                                <td>12 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-warning-light">Pending</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="edit-prescription.html"
                                           className="btn btn-sm me-2 bg-success-light">
                                            <EditOutlined fontSize={'small'}/> Edit
                                        </a>
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-danger-light">
                                            <DeleteOutlined
                                                fontSize={'small'}/> Cancel
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>9 Nov 2019 <span
                                    className="d-block text-info">7.00 PM</span>
                                </td>
                                <td>8 Nov 2019</td>
                                <td>$75</td>
                                <td>11 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-success-light">Confirm</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-success-light">
                                            <i className="far fa-edit"></i> Edit
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>8 Nov 2019 <span
                                    className="d-block text-info">9.00 AM</span>
                                </td>
                                <td>6 Nov 2019</td>
                                <td>$175</td>
                                <td>10 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-danger-light">Cancelled</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-success-light">
                                            <i className="far fa-edit"></i> Edit
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>8 Nov 2019 <span
                                    className="d-block text-info">6.00 PM</span>
                                </td>
                                <td>6 Nov 2019</td>
                                <td>$450</td>
                                <td>10 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-success-light">Confirm</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-success-light">
                                            <i className="far fa-edit"></i> Edit
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>7 Nov 2019 <span
                                    className="d-block text-info">9.00 PM</span>
                                </td>
                                <td>7 Nov 2019</td>
                                <td>$275</td>
                                <td>9 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-info-light">Completed</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-primary-light">
                                            <i className="far fa-clock"></i> Reschedule
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>6 Nov 2019 <span
                                    className="d-block text-info">8.00 PM</span>
                                </td>
                                <td>4 Nov 2019</td>
                                <td>$600</td>
                                <td>8 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-info-light">Completed</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-primary-light">
                                            <i className="far fa-clock"></i> Reschedule
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/doctor-profile'}
                                           className="avatar avatar-sm me-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src={require("../../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                alt="User Image"/>
                                        </Link>
                                        <Link to={'/doctor/doctor-profile'}>Dr. Darren
                                            Elder <span>Dental</span></Link>
                                    </h2>
                                </td>
                                <td>5 Nov 2019 <span
                                    className="d-block text-info">5.00 PM</span>
                                </td>
                                <td>1 Nov 2019</td>
                                <td>$100</td>
                                <td>7 Nov 2019</td>
                                <td><span
                                    className="badge rounded-pill bg-info-light">Completed</span>
                                </td>
                                <td className="text-end">
                                    <div className="table-action">
                                        <a href="javascript:void(0);"
                                           className="btn btn-sm bg-primary-light">
                                            <i className="far fa-clock"></i> Reschedule
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment