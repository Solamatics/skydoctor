import {Avatar, Box, Button, Card, CardContent, IconButton} from "@mui/material";
import {ArrowRight, ChevronRight, VideoCallOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";


const patients = [{id: 1, image: 'patient2.jpg', name: 'Richard', patientid: '#PT016'}, {
    id: 2,
    image: 'patient2.jpg',
    name: 'Richard',
    patientid: '#PT016'
}, {id: 3, image: 'patient2.jpg', name: 'Richard', patientid: '#PT016'}, {
    id: 4,
    image: 'patient2.jpg',
    name: 'Richard',
    patientid: '#PT016'
},]
export default function Patient() {
    return (<div className="card dash-cards">
        <div className="card-header">
            <div className="today-appointment-title">
                <h5 className="mb-0">Patients</h5>
                <Link to={'/doctor/my-patients'}><h6 className="mb-0 text-danger">
                    View All
                    <ArrowRight/>
                </h6></Link>
            </div>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                    <tbody>
                    {
                        [1, 2, 3, 4, 5].map(item => (
                            <tr>
                                <td>
                                    <h2 className="table-avatar">
                                        <Link to={'/doctor/patient-details'} className="avatar avatar-m me-2"><img
                                            className="avatar-img"
                                            src={require("../../../assets/img/patients/patient.jpg")}
                                            alt="User Image"/></Link>
                                        <Link to={'doctor/patient-details'}>Richard<span>#PT0016</span></Link>
                                    </h2>
                                </td>
                                <td className="text-center">
                                    <Link style={{color: '#2E3842'}}
                                          to={'/doctor/patient-details'}><i
                                        className="fas fa-chevron-right"></i></Link>
                                </td>
                            </tr>
                        ))
                    }


                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}