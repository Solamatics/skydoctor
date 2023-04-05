import {Avatar, Box, Button, Grid} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import {Link, useNavigate} from "react-router-dom";
import {Check, Print, Visibility} from "@mui/icons-material";


export default function Invoices() {
    const invoices = [1, 2, 3, 4, 5, 6, 7, 8]
    const navigate = useNavigate()
    return (
        <Box component={'main'} sx={{mt: 2, pa: 1}}>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={3} spacing={3} sx={{pa: 5}}>

                    <Grid item xs={12} sm={3} lg={3} md={3}
                          sx={{
                              pa: 5,
                              display: {xs: 'none', sm: 'block'},

                          }}
                    >
                        <DashboardSideBar/>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={9} md={9} sx={{px: 2}}>

                        <Box sx={{padding: '3px 10px'}}>
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0" style={{border:'1px solid #dee2e6'}}>
                                    <thead>
                                    <tr style={{textAlign:'left', padding:'3px 10px',border:'1px solid #dee2e6'}}>
                                        <th>Invoice No</th>
                                        <th>Patient</th>
                                        <th>Amount</th>
                                        <th>Paid On</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        invoices.map(item => (
                                                <tr key={item.id} style={{borderBottom:'1px solid #dee2e6'}}>
                                                    <td>
                                                        <span style={{color:'#2E3842',fontSize:'13px'}}>#INV-001</span>
                                                    </td>
                                                    <td>
                                                        <h2 className="table-avatar">

                                                            <Avatar
                                                                alt="Remy Sharp"
                                                                src={require('../../../assets/img/patient.jpg')}
                                                                sx={{width: 56, height: 56}}
                                                            />
                                                            <Box sx={{ml: 1}}>
                                                                <span style={{color:'#272b41', fontSize:'13px'}}>Richard Wilson</span>
                                                                <br/>
                                                                <span style={{color:'#888', fontSize:'12px'}}>#PT0016</span>

                                                            </Box>


                                                        </h2>
                                                    </td>
                                                    <td>
                                                        <span style={{color:'#2E3842',fontSize:'13px'}}>$450</span>
                                                    </td>
                                                    <td>
                                                        <span style={{color:'#2E3842',fontSize:'13px'}}>12 Nov 2022</span>
                                                    </td>
                                                    <td>
                                                        <div className={'flex-row'}>
                                                            <div>
                                                                <Button
                                                                    onClick={()=>navigate('/doctor/invoice-details')}
                                                                    startIcon={<Visibility/>}
                                                                    sx={{
                                                                        textTransform: 'none',
                                                                        backgroundColor: 'rgba(15, 183, 107, 0.12)',
                                                                        color: 'rgb(38, 175, 72)',
                                                                        padding: '0.25rem 0.8rem',
                                                                        borderRadius: '0.2rem',
                                                                        mx: '5px'

                                                                    }}>
                                                                    <span>View</span>
                                                                </Button>
                                                            </div>
                                                            <div>
                                                                <Button
                                                                    startIcon={<Print/>}
                                                                    sx={{
                                                                        textTransform: 'none',
                                                                        backgroundColor: 'rgba(17, 148, 247,0.12)',
                                                                        color: '#2196f3',
                                                                        padding: '0.25rem 0.8rem',
                                                                        borderRadius: '0.2rem',
                                                                        mx: '5px'

                                                                    }}>
                                                                    <span>Print</span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}