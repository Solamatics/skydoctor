
import {Avatar, Box, Button} from "@mui/material";
import {Check, Close, Visibility} from "@mui/icons-material";

const breakdown = [1,2,3,4,5,6,7,8,9]
export  default function PatientRefund(){

    return (
        <table className="table table-hover table-center mb-0" style={{border:'1px solid #dee2e6', borderRadius:'10px!important'}} >
            <thead>
            <tr style={{textAlign:'left',padding:'10px 15px!important',}}>
                <th>Date</th>
                <th>Patient Name</th>
                <th className="text-center">Amount</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                breakdown.map(item=>(
                    <tr key={item} style={{fontSize:'14px!important'}}>
                        <td>
                            <div className={'flex-column'}>
                                <span>     11 Nov 2019</span>
                                <span  style={{color:'rgb(0, 158, 251)'}}>10.00 AM</span>
                            </div>



                        </td>
                        <td>
                            <div className={'flex-row'}>
                                <Avatar src={require('../../../assets/img/patient.jpg')} sx={{width:'2.5rem', height:'2.5rem'}} />
                                <div>
                                    <div className={'flex-column'} style={{color:'rgb(39, 43, 65)!important'}}>
                                        <span>Richard Wilson </span>
                                        <span style={{
                                            color: 'rgb(136, 136, 136)',
                                            fontSize: '12px',
                                            marginTop: '3px',
                                        }}>#PT0016</span>
                                    </div>
                                </div>
                            </div>

                        </td>
                        <td className="text-center">$150</td>
                        <td><span className="badge rounded-pill bg-success-light">Paid</span></td>
                        <td className="text-end">
                            <Box className={'flex-row'} sx={{alignItems: 'center'}}>

                                <div>
                                    <Button

                                        startIcon={<Visibility/>}
                                        sx={{
                                            textTransform: 'none',
                                            backgroundColor: 'rgba(2, 182, 179, 0.12)',
                                            color: 'rgb(29, 185, 170)',
                                            padding: '0.25rem 0.8rem',
                                            borderRadius: '0.2rem',
                                            mx: '5px'

                                        }}>
                                        <span>View</span>
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        startIcon={<Check/>}
                                        sx={{
                                            textTransform: 'none',
                                            backgroundColor: 'rgba(15, 183, 107, 0.12)',
                                            color: 'rgb(38, 175, 72)',
                                            padding: '0.25rem 0.8rem',
                                            borderRadius: '0.2rem',
                                            mx: '5px'

                                        }}>
                                        <span>Accept</span>
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        startIcon={<Close/>}
                                        sx={{
                                            textTransform: 'none',
                                            backgroundColor: 'rgba(242, 17, 54, 0.12)',
                                            color: 'rgb(230, 60, 60)',
                                            padding: '0.25rem 0.8rem',
                                            borderRadius: '0.2rem',
                                            mx: '5px'

                                        }}>
                                        <span>Cancel</span>
                                    </Button>
                                </div>
                            </Box>
                        </td>
                    </tr>
                ))
            }


            </tbody>
        </table>
    )
}