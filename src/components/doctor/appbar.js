import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";


export default function Appbar({location, toggleNav}){
    return (
        <AppBar
            sx={{
                backgroundColor: '#0C4F8A',
                borderBottom: '1px solid #f0f0f0',
                padding: '5px 20px',
                display: 'block'
            }} elevation={0}
            position={'fixed'}
            component="nav">
            <Toolbar>

                <Box component={'div'} sx={{flexGrow: 1, color:'white'}}>

                    <h6
                        style={{
                            color: '#fff',
                            fontSize: '10px',
                            fontWeight: '500',
                            textTransform:'capitalize',
                            margin: '5px 0 0'
                        }}
                    >
                        <Link style={{color:'white', }} to={'/doctor/dashboard'}>Home</Link>  / {location}
                    </h6>
                    <h5 style={{
                        color: '#fff',
                        fontSize: '17px',
                        fontWeight: '700',
                        margin: '5px 0 0',
                        textTransform:'capitalize'
                    }}>{location}</h5>

                </Box>

                <IconButton
                    onClick={()=>toggleNav(true)}
                    sx={{color: '#fff', mr: 0.1, display: {lg: 'none'}}}
                    aria-label="open drawer"
                    edge="start"


                >
                    <MenuIcon/>
                </IconButton>


            </Toolbar>
        </AppBar>
    )
}