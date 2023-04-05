import {Avatar, Box, Button, Card, CardContent, IconButton} from "@mui/material";
import {ArrowRight, ChevronRight, VideoCallOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import tablet from '../../../assets/img/tablets.svg'

const prescription = [
    {id:1, image:tablet,name:'Calcium',patientid:'#PT016', type:'One Time'},
    {id:2, image:tablet,name:'Calcium',patientid:'#PT016', type:'One Time'},
    {id:3, image:tablet,name:'Calcium',patientid:'#PT016', type:'One Time'},
    {id:4, image:tablet,name:'Calcium',patientid:'#PT016', type:'One Time'},
    {id:5, image:tablet,name:'Calcium',patientid:'#PT016', type:'One Time'},
]
export default function Prescriptions(){
    return (
        <div className="card dash-cards flex-fill">
            <div className="card-header">
                <div className="today-appointment-title">
                    <h5 className="mb-0">Recent Prescriptions</h5>
                    <Link to={'/doctor/patient-details'}>
                        <h6 className="mb-0 text-danger">
                        View All   <ArrowRight/></h6>
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                        <tbody>
                        {
                            [1,2,3,4,5].map(item=>(
                                <tr>
                                    <td>
                                        <h2 className="table-avatar">
                                            <Link to={'/doctor/patient-details'}
                                               className="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                                                <img src={tablet} alt=""/>
                                            </Link>
                                            <Link to={'/doctor/patient-details'}>Abacavir<span
                                                className="text-danger">#8995447</span></Link>
                                        </h2>
                                    </td>
                                    <td>Type : Onetime</td>
                                    <td className="text-center"><a style={{color:'#2E3842'}} href="javascript:void(0);"><i
                                        className="fas fa-chevron-right"></i></a></td>
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