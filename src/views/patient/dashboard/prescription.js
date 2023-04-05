import {Link} from "react-router-dom";

export default function Prescription() {
    return (

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
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <tr key={index}>
                                    <td>14 Nov 2019</td>
                                    <td>Prescription 1</td>
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
                                    <td className="text-end">
                                        <div className="table-action">
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm me-2 bg-primary-light">
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