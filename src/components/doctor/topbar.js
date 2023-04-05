
import {useState} from "react";
import{AppBar,
    Toolbar,
    IconButton,

    Typography,
    Box,
    Button
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';





export  default  function TopBar({toggleNav}) {


    return (
        <AppBar
            sx={{
                backgroundColor: '#0C4F8A',
                borderBottom: '1px solid #f0f0f0',
                padding: '10px 20px',
                display: {xs: 'block', sm: 'none'}
            }} elevation={0}
            position={'fixed'} component="nav">
            <Toolbar>

                <Box component={'div'} sx={{flexGrow: 1, textAlign: {xs: 'center', sm: 'left'}}}>
                    <img src={require('../../assets/img/logo.png')} alt={'logo'} style={{width: '150px'}}/>
                </Box>

                <IconButton
                    sx={{color: '#fff', mr: 2, display: {lg: 'none'}}}
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => toggleNav()}

                >
                    <MenuIcon/>
                </IconButton>


            </Toolbar>
        </AppBar>
    )

}