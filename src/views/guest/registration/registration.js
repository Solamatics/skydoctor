
import TopBar from "../../../components/guest/topbar";
import Sidebar from "../../../components/guest/sidebar";
import {
    Toolbar,
    Typography,
    Box,
    Grid,
} from "@mui/material";
import Footer from "../../../components/guest/footer";

import SignupBg from '../../../assets/img/signup_bg.svg'

import RegistrationForm from "./registrationForm";
import OtpForm from "./otpForm";
import {useState} from "react";

export default  function Registration() {

    const [regStatus, setRegStatus] = useState(false)

    return (
        <Box sx={{display: 'flex'}}>

            <TopBar/>
            <Sidebar/>
            <Box component="main">

                <Box sx={{minHeight: {xs: 'inherit', sm: '90vh'}}}>
                    <Box sx={{p: 3}}>
                        <Toolbar/>

                        {
                            !regStatus
                                ?   <Grid  container spacing={2}>
                                    <Grid item sx={{display: {xs: 'none', sm: 'block'}}} xs={12} sm={1} md={1} lg={1}></Grid>
                                    <Grid item sx={{display: {xs: 'none', sm: 'block'}}} xs={12} sm={5} md={5} lg={5}>

                                        <Box sx={{textAlign: 'center',mt:10, p: 5}}>
                                            <img src={SignupBg} alt={'login img'} className={'w3-image'}/>
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
                                                 style={{width: '180px'}}/>

                                            <br/>
                                            <br/>
                                            <Typography component={'h6'} className={'login-title'}>
                                                Get Started For Free
                                            </Typography>
                                            <Typography component={'h6'} className={'login-subtitle'}>
                                                Signup to create an account to continue
                                            </Typography>
                                            <br/>

                                            <RegistrationForm updateReg={setRegStatus}/>



                                        </Box>
                                    </Grid>
                                </Grid>
                                :  <OtpForm regstatus={regStatus}/>
                        }




                    </Box>
                </Box>


                <Footer/>
            </Box>

        </Box>
    )

}