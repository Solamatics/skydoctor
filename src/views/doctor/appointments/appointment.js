import {
    Avatar,
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Grid, IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemSecondaryAction
} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import ListItemText from "@mui/material/ListItemText";
import {AccessTime, Check, Close, Email, LocationOn, Phone, Visibility} from "@mui/icons-material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {LoadingButton} from "@mui/lab";
import {useState} from "react";

const appointments = [
    {id:1, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
    {id:2, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
    {id:3, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
    {id:4, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
    {id:5, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
    {id:6, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
    {id:7, name:'Richard Wilson', image:'patient.jpg', time:'14 Nov 2019, 10.00 AM',location:'Newyork, United States',mail:'richard@example.com',phone:'+1 923 782 4575',},
]

const breakdown = [
    {title:'#APT0001',subtitle:'21 Oct 2019 10:00 AM', status:1},
    {title:'Status',subtitle:'Completed', status:0},
    {title:'Confirm Date',subtitle:'29 Jun 2019', status:0},
    {title:'Paid Amount',subtitle:'$450', status:0},

    ]


export default function Appointment() {

    const [dialog, setDialog] = useState(false)
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

                        {
                            appointments.map(item => (
                                <Box key={item.id} className={'appointment-list'}>
                                    <Box className={'flex-row'}>
                                        <Avatar sx={{width: '120px', height: '120px', borderRadius: '4px', mt: 1.5}}
                                                src={require(`../../../assets/img/${item.image}`)}/>

                                        <Box className={'flex-column'}>
                                            <h6 style={{color: 'rgb(46, 56, 66)', fontWeight: '500'}}>{item.name}</h6>
                                            <List dense sx={{padding: 0, margin: 0}}>
                                                <ListItem sx={{padding: 0}}>
                                                    <ListItemIcon sx={{color: 'rgb(117, 117, 117)'}}>
                                                        <AccessTime sx={{fontSize: '15px'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ml: -4}}>
                                                        <span
                                                            className={'patient-details-appointment'}>{item.time} </span>
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem sx={{padding: 0}}>
                                                    <ListItemIcon sx={{color: 'rgb(117, 117, 117)'}}>
                                                        <LocationOn sx={{fontSize: '15px'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ml: -4}}>
                                                        <span
                                                            className={'patient-details-appointment'}>{item.location} </span>
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem sx={{padding: 0}}>
                                                    <ListItemIcon sx={{color: 'rgb(117, 117, 117)'}}>
                                                        <Email sx={{fontSize: '15px'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ml: -4}}>
                                                        <span
                                                            className={'patient-details-appointment'}>{item.mail} </span>
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem sx={{padding: 0}}>
                                                    <ListItemIcon sx={{color: 'rgb(117, 117, 117)'}}>
                                                        <Phone sx={{fontSize: '15px'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ml: -4}}>
                                                        <span
                                                            className={'patient-details-appointment'}>{item.phone} </span>
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        </Box>

                                    </Box>

                                    <Box className={'flex-row'} sx={{alignItems: 'center'}}>

                                        <div>
                                            <Button
                                                onClick={()=>setDialog(true)}
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

                                </Box>
                            ))
                        }

                    </Grid>
                </Grid>
            </Box>
            <Dialog
                open={dialog}
                onClose={() => setDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'sm'}
                fullWidth
            >
                <DialogTitle className={'flex-row'}
                             sx={{textAlign: 'center', borderBottom: '1px solid rgb(222, 226, 230)',justifyContent:'space-between'}}
                             id="alert-dialog-title">

                    <h6 style={{color: 'rgb(39, 43, 65)', fontWeight: '500',}}>Appointment Details</h6>
                    <div>
                        <IconButton onClick={() => setDialog(false)}>
                            <Close/>
                        </IconButton>
                    </div>



                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{py:0}}>

                        <List dense>
                            {
                                breakdown.map(item=>(
                                    <ListItem  key={item.title}>
                                        <ListItemText>
                                            <b>{item.title}</b><br/>
                                            <span>{item.subtitle}</span>
                                        </ListItemText>
                                        {
                                            !!item.status && <ListItemSecondaryAction>
                                                <Button
                                                    sx={{
                                                        textTransform: 'none',
                                                        backgroundColor: 'rgba(15, 183, 107, 0.12)',
                                                        color: 'rgb(38, 175, 72)',
                                                        padding: '0.25rem 0.8rem',
                                                        borderRadius: '0.2rem',
                                                        mx: '5px'

                                                    }}>
                                                    <span>Completed</span>
                                                </Button>
                                            </ListItemSecondaryAction>
                                        }
                                    </ListItem>
                                ))
                            }
                        </List>

                    </DialogContentText>
                </DialogContent>

            </Dialog>

        </Box>
    )

}