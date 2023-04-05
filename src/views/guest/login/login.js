

import TopBar from "../../../components/guest/topbar";
import Sidebar from "../../../components/guest/sidebar";
import {Toolbar, Typography, Box, Grid} from "@mui/material";
import Footer from "../../../components/guest/footer";
 
import LoginBG from '../../../assets/img/login-bg.svg'
 

 
import LoginForm from "./loginForm";

export default  function Login() {
    
 
    return (
        <Box sx={{display: 'flex'}}>

            <TopBar/>
            <Sidebar/>

            <Box component="main">

                <Box sx={{minHeight: {xs: 'inherit', sm: '90vh'}}}>
                    <Box sx={{p: 3}}>
                        <Toolbar/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={1} lg={1} sm={1} sx={{display: {xs: 'none', sm: 'block'}}}>
                                &nbsp;
                            </Grid>
                            <Grid item sx={{display: {xs: 'none', sm: 'block'}}} xs={12} sm={5} md={5} lg={5}>

                                <Box sx={{textAlign: 'center', p: 5, mt:6}}>
                                    <img src={LoginBG} alt={'login img'} className={'w3-image'}/>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={1} lg={1} sm={1} sx={{display: {xs: 'none', sm: 'block'}}}>
                                &nbsp;
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>

                                <Box sx={{
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '4px',
                                    padding: '25px',
                                    mt: {xs: 3, sm: 10}
                                }}>

                                    <img src={require('../../../assets/img/logo.png')} className={'w3-image'}
                                         style={{width: '180px'}} alt={'login-bg'}/>

                                    <br/>
                                    <br/>
                                    <Typography component={'h6'} className={'login-title'}>
                                        Sign In
                                    </Typography>
                                    <Typography component={'h6'} className={'login-subtitle'}>
                                        Sign in to your account to continue
                                    </Typography>
                                    <br/>
                                    
                                    
                                    <LoginForm/>

                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>


                <Footer/>
            </Box>

        </Box>
    )

}