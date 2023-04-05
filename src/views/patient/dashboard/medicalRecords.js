import {Link} from "react-router-dom";


export default function MedicalRecords(){
    return (
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
                            [1,2,3,4,5].map((item,index)=>(
                                <tr key={index}>
                                    <td><a href="javascript:void(0);">#MR-0010</a></td>
                                    <td>14 Nov 2019</td>
                                    <td>Dental Filling</td>
                                    <td><a href="#">dental-test.pdf</a></td>
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
                                               className="btn btn-sm bg-info-light me-2">
                                                <i className="fas fa-eye"></i> View
                                            </a>
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