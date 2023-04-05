

import TopBar from "../../../components/guest/topbar";
import Sidebar from "../../../components/guest/sidebar";
import {Toolbar, Typography, Box, Grid} from "@mui/material";
import Footer from "../../../components/guest/footer";

import ForgotBg from '../../../assets/img/forgot-password.svg'



import ForgotPasswordForm from "./forgotPasswordForm";
import ResetPasswordForm from "./resetPasswordForm";
import {useState} from "react";

export default  function ForgotPassword() {

    const [userDetails, setUserDetails] = useState({})

    const [tokenSent, SetTokenSent] = useState(false)

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
                                    <img src={ForgotBg} alt={'forgot-password image'} className={'w3-image'}/>
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
                                        Forgot Password
                                    </Typography>
                                    <Typography component={'h6'} className={'login-subtitle'}>
                                        Send a request to reset your password
                                    </Typography>
                                    <br/>

                                    {
                                        !tokenSent
                                            ? <ForgotPasswordForm setDetails={setUserDetails} setToken={SetTokenSent}/>
                                            : <ResetPasswordForm userDetails={userDetails}/>
                                    }





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