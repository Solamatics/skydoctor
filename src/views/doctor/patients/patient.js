import {Avatar, Box, Grid, List, ListItem, ListItemSecondaryAction} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import {LocationOn} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import {Link} from "react-router-dom";


const patients = [1,2,3,4,5,6,7,8,9,10]
export default function Patient() {

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

                        <Grid container rowSpacing={1} spacing={3}>
                            {
                                patients.map(item => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} sx={{px: 2}} key={item}>

                                        <Box className={'widget-patient-profile'}>
                                            <div className={'w3-center w3-text-center'}>
                                                <Link to={'/doctor/patient-details'}>
                                                    <Avatar sx={{height: '100px', width: '100px', margin:'0 auto'}}
                                                            src={require('../../../assets/img/patient.jpg')}/>
                                                </Link>


                                                <h3 style={{
                                                    color: '#2E3842',
                                                    fontSize: '15px',
                                                    fontWeight: '500'
                                                }}>Richard Wilson</h3>
                                                <h5 className={'patient-id'}><b>Patient ID :</b> P0016</h5>
                                                <h5 className={'patient-id'}>
                                                    <LocationOn sx={{
                                                        height: '13px',
                                                        width: '13px',
                                                        marginBottom: '-1px',
                                                        marginRight: '3px'
                                                    }}/>
                                                    Alabama, USA
                                                </h5>
                                            </div>
                                            <br/>
                                            <div style={{borderTop: '1px solid #f0f0f0'}}>
                                                <List dense sx={{px:0}}>

                                                    <ListItem sx={{px:0}}>
                                                        <ListItemText>
                                                            <b className={'patient-info-list-title'}>Phone</b>
                                                        </ListItemText>
                                                        <ListItemSecondaryAction>
                                                            <span className={'patient-info-list-content'}>+1 952 001 8563</span>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                    <ListItem sx={{px:0}}>
                                                        <ListItemText>
                                                            <b className={'patient-info-list-title'}>Age</b>
                                                        </ListItemText>
                                                        <ListItemSecondaryAction>
                                                            <span className={'patient-info-list-content'}>38 Years, Male</span>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                    <ListItem sx={{px:0}}>
                                                        <ListItemText>
                                                            <b className={'patient-info-list-title'}>Blood Group</b>
                                                        </ListItemText>
                                                        <ListItemSecondaryAction>
                                                            <span className={'patient-info-list-content'}>AB+</span>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>

                                                </List>
                                            </div>
                                        </Box>


                                    </Grid>
                                ))
                            }
                        </Grid>


                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}