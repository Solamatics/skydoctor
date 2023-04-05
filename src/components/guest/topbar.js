
import {useState} from "react";
import{AppBar,
    Toolbar,
    IconButton,

    Typography,
    Box,
    Button
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import {AccountCircleOutlined, LoginOutlined} from "@mui/icons-material";
import LinkMenu from "./linkMenu";



export  default  function TopBar() {

    const [mobileOpen, setMobileOpen] = useState(false)
    const navItems = [
        {title: 'Home', route: '/'},
        {title: 'Services', route: '/services'},
        {title: 'E-Stores', route: '/e-stores'},
        {title: 'Plans', route: '/plans'},
    ];
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const search = [
        {title:'Map Grid/List', route:''},
        {title:'Doctor/Nurse/Pharmacist', route:''},
        {title:'Dentist', route:''},
        {title:'Pharmacy Stores', route:''},
        {title:'Hospitals/Clinics', route:''},
        {title:'HMO/Health Insurance', route:''},
        {title:'Laboratory/Diagnosis Centers ', route:''},
        {title:'Ambulance Land/Air  ', route:''},
        {title:'Cemeteries & Burial Accessories  ', route:''},
    ]

    return (
        <AppBar sx={{backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', padding: '10px 20px'}} elevation={0}
                position={'fixed'} component="nav">
            <Toolbar>
                <IconButton
                    sx={{color:'#2E3842',mr: 2, display:{lg:'none'}}}
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}

                >
                    <MenuIcon/>
                </IconButton>
                <Box component={'div'} sx={{flexGrow:{xs:1, sm:1, md:0}, textAlign:{xs:'center',sm:'left'}}}>
                    <img src={require('../../assets/img/logo.png')} alt={'logo'} style={{width: '150px'}}/>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'none', md:'flex'}, flexGrow: 1,}}>
                    {
                        navItems.map(item => (
                            <Button sx={{
                                color: '#2E3842',
                                textTransform: 'none',
                                fontSize: '15px',
                                fontWeight: '500',
                                mx: 1
                            }}

                                    to={item.route} key={item.title} component={Link}>
                                {item.title}
                            </Button>
                        ))
                    }
                    <LinkMenu links={search} title={'Search'}/>
                    <Button sx={{
                        color: '#2E3842',
                        textTransform: 'none',
                        fontSize: '15px',
                        fontWeight: '500',
                        mx: 1
                    }}

                            to={''}  component={Link}>
                       DOM
                    </Button>
                    <LinkMenu links={search} title={'Company'}/>
                </Box>


                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Button startIcon={<AccountCircleOutlined sx={{color: 'white'}}/>} sx={{backgroundColor: 'red', mr: 1}}
                            disableElevation variant={'contained'} className={'guest-login'}>
                        Book Appointment
                    </Button>

                    <Button to={'/login'} component={Link} endIcon={<LoginOutlined sx={{color: 'white'}}/>} sx={{backgroundColor: '#00329B', mr: 1}}
                            disableElevation variant={'contained'} className={'guest-login'}>
                        Sign in
                    </Button>
                </Box>



            </Toolbar>
        </AppBar>
    )

}