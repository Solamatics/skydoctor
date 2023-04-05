import {Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import {ChevronRight, Email, Facebook, Instagram, LinkedIn, LocalPhone, Place, Twitter} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import {Link} from "react-router-dom";

const social = [
    {icon:<Facebook/>, link:'',id:1},
    {icon:<Twitter/>, link:'',id:2},
    {icon:<LinkedIn/>, link:'',id:3},
    {icon:<Instagram/>, link:'',id:4},
]

const footerLinks= [
    {
        header:'For Patients',
        items:[
            {title:'Search Doctors',route:''},
            {title:'Login',route:''},
            {title:'Register',route:''},
            {title:'Bookings',route:''},
            {title:'Patient Dashboard',route:''},

        ]
    },
    {
        header:'For Doctors',
        items:[
            {title:'Appointments',route:''},
            {title:'Chat',route:''},
            {title:'Login',route:''},
            {title:'Register',route:''},
            {title:'Doctor Dashboard',route:''},

        ]
    },


]

const contactList = [
    {id:1, route:'', title:'3556 Beech Street, San Francisco California, CA 94108', icon:<Place/>},
    {id:2, route:'', title:' +1 315 369 5943', icon:<LocalPhone/>},
    {id:3, route:'', title:'doccure@example.com', icon:<Email/>},
]

export default function Footer(){
    return (
        <Box component={'div'} sx={{padding: '30px 0 0', backgroundColor: '#15558d' }}>

            <Grid container spacing={2} columnSpacing={4} sx={{py:2, px:3}}>
                <Grid item xs={12} sm={6} lg={3} md={3} sx={{}}>

                    <div>
                        <img src={require('../../assets/img/logo.png')} alt={'logo'} style={{width:'60%'}} />
                        <br/>
                        <br/>
                        <Typography sx={{color:'white', fontSize:'14px', lineHeight:2}} component={'p'}>
                            TheSkyDoctors is one of the leading and premium Platform and Software as a Service Brand
                            of Nextsoft Company that offers Full-Stack Quick and Secure Online Payment for Doctors, Patients,
                            Pharmacy Stores, Manufacturers and other Health Service Providers across the Health Value chain,
                        </Typography>
                        <br/>
                        {
                            social.map(item=>(
                                <IconButton key={item.id} sx={{color:'white'}} size={'25px'}>
                                    {item.icon}
                                </IconButton>
                            ))
                        }
                    </div>
                </Grid>
                {
                    footerLinks.map(link=>(
                        <Grid item xs={6} sm={6} lg={3} md={3} key={link.header}>

                            <Typography className={'footer-title'} sx={{color:'white', mt:{xs:0, sm:8}}} variant={'h6'}>
                                {link.header}
                            </Typography>
                            <List>
                                {
                                    link.items.map(item=>(
                                        <ListItem key={item.title}  sx={{px:0, py:0}} to={item.route} component={Link}>
                                            <ListItemIcon>
                                                <ChevronRight sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText sx={{ml:-3}}>
                                                <Typography className={'footer-sub-link'} variant={'caption'}>
                                                    {item.title}
                                                </Typography>

                                            </ListItemText>
                                        </ListItem>
                                    ))
                                }
                            </List>

                        </Grid>
                    ))
                }

                <Grid item xs={6} sm={6} lg={3} md={3} >

                    <Typography className={'footer-title'} sx={{color:'white', mt:{xs:0, sm:8}}} variant={'h6'}>
                       Contact Us
                    </Typography>
                    <List>
                        {
                            contactList.map(item=>(
                                <ListItem key={item.title}  sx={{px:0,}} to={item.route} component={Link}>
                                    <ListItemIcon sx={{color:'white'}}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText sx={{ml:-1}}>
                                        <Typography className={'footer-sub-link'} variant={'caption'}>
                                            {item.title}
                                        </Typography>

                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>


                </Grid>


            </Grid>

            <Box sx={{padding: '5px 20px'}}>
                <Box sx={{borderTop: '1px solid #1663a6', display:'flex',flexDirection:{xs:'column',sm:'row'}, py:2}}>
                    <Typography sx={{color:'white', fontSize:'14px', lineHeight:2, flexGrow:1, textAlign:{xs:'center',sm:'left'}}}  >
                        © {new Date().getFullYear()} TheSkyDoctors. All rights reserved.
                    </Typography>

                    <Box sx={{textAlign:{xs:'center',sm:'left'}}}>
                        <Button sx={{color:'white', textTransform:'none'}}>
                            Terms and Conditions
                        </Button>
                        <span className={'w3-text-white'}> | </span>
                        <Button sx={{color:'white', textTransform:'none'}}>
                            Privacy Policy
                        </Button>
                    </Box>

                </Box>


            </Box>

        </Box>
    )
}