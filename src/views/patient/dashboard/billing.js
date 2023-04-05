import {Link} from "react-router-dom";

export default function Billing(){
    return (
        <div className="card card-table mb-0">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                        <thead>
                        <tr>
                            <th>Invoice No</th>
                            <th>Doctor</th>
                            <th>Amount</th>
                            <th>Paid On</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            [1,2,3,4,5].map((item,index)=>(
                                <tr>
                                    <td>
                                        <a href="invoice-view.html">#INV-0010</a>
                                    </td>
                                    <td>
                                        <h2 className="table-avatar">
                                            <Link to={'/patient/doctor-profile'}
                                               className="avatar avatar-sm me-2">
                                                <img className="avatar-img rounded-circle"
                                                     src={require("../../../assets/img/doctors/doctor-thumb-01.jpg")}
                                                     alt="User Image"/>
                                            </Link>
                                            <Link to={'/patient/doctor-profile'}>Ruby Perrin
                                                <span>Dental</span></Link>
                                        </h2>
                                    </td>
                                    <td>$450</td>
                                    <td>14 Nov 2019</td>
                                    <td className="text-end">
                                        <div className="table-action">
                                            <Link to={'/patient/invoice-details'}
                                               className="btn btn-sm bg-info-light me-2">
                                                <i className="fas fa-eye"></i> View
                                            </Link>
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-primary-light">
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
    )
}