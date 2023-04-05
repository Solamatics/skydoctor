
import {Box, Card, CardContent, CircularProgress, Grid, List, ListItem, ListItemIcon} from "@mui/material";
import {routes} from "../../../components/doctor/routes";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {Icon} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import Appointment from "./appointment";
import Patient from "./patient";
import AppointmentGraph from "./appointmentGraph";
import Prescriptions from "./prescriptions";
import Earnings from "./earnings";
import Consultation from "./consultation";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";


const dashCards = [
    {id:1, color:'#DA3F81', progress:75, image:'icon-01.png', header:'Total Patient All time', subContent:'1500', summary:'9.5%', status:1},
    {id:2, color:'#68DDA9', progress:70, image:'icon-03.png', header:'Total Appointments', subContent:'4587', summary:'5.5%', status:1},
    {id:3, color:'#1B5A90', progress:50, image:'icon-4.png', header:'Today’s Income', subContent:'€1454', summary:'5.5%', status:0},
]
export default function Dashboard(){


    return (
        <Box component={'main'} sx={{mt:2, pa:1}}>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={1} spacing={3} sx={{pa:5}}>

                    <Grid item xs={12} sm={3} lg={3} md={3}
                          sx={{
                              pa:5,
                              display:{xs:'none', sm:'block'},

                    }}
                    >
                       <DashboardSideBar/>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={9} md={9}>

                        <Grid container spacing={2}>
                            {
                                dashCards.map(item=>(
                                    <Grid key={item.id} item xs={12} md={4} sm={6} lg={4} sx={{px:2}}>
                                        <Card className={'dash-cards'}>
                                            <CardContent sx={{pb:2, pt:3}}>
                                                <Box sx={{display:'flex', flexDirection:'row'}}>
                                                    <div className={'w3-display-container'}>
                                                        <CircularProgress sx={{color:item.color}} thickness={2.8} size={85} variant="determinate" value={item.progress} />
                                                        <div className={'w3-display-middle'}>
                                                            <img src={require(`../../../assets/img/${item.image}`)} />
                                                        </div>
                                                    </div>
                                                    <div style={{padding:'10px 15px 10px'}}>
                                                        <h6 className={'dash-cards-header'}>{item.header}</h6>
                                                        <h5 className={'dash-cards-content'}>{item.subContent}</h5>

                                                    </div>
                                                </Box>
                                                <Box sx={{textAlign:'right', mt:-1}}>
                                                    <Typography component={'span'} className={'dash-cards-summary'} >
                                                        {
                                                            item.status >=1  ?   <ExpandLess  fontSize={'small'} sx={{mb:-0.5, mr:0.2, color:'#10916F'}}/>
                                                                : <ExpandMore  fontSize={'small'} sx={{mb:-0.5, mr:0.2, color:'#FF0202'}}/>
                                                        }
                                                        <span style={{color: item.status>=1 ? '#10916F' : '#FF0202', marginRight:'2px'}}>
                                                            {item.summary}
                                                        </span>
                                                          last Week
                                                    </Typography>
                                                </Box>









                                            </CardContent>

                                        </Card>
                                    </Grid>
                                ))
                            }

                            <Grid sx={{px:2}} item xs={12} sm={8} lg={8} md={8}>
                                <Appointment/>
                            </Grid>
                            <Grid sx={{px:2}} item xs={12} sm={4} lg={4} md={4}>
                                <Patient/>
                            </Grid>
                            <Grid sx={{px:2}} item xs={12} sm={12} lg={12} md={12}>
                                <AppointmentGraph/>
                            </Grid>
                            <Grid sx={{px:2}} item xs={12} sm={4} lg={4} md={4}>
                               <Prescriptions/>
                            </Grid>
                            <Grid sx={{px:2}} item xs={12} sm={4} lg={4} md={4}>
                               <Earnings/>
                            </Grid>
                            <Grid sx={{px:2}} item xs={12} sm={4} lg={4} md={4}>
                               <Consultation/>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}