import {Box, Button, Grid, useMediaQuery, useTheme} from "@mui/material";
import {PhonelinkLock, PhoneLockedOutlined} from "@mui/icons-material";
import { MuiOtpInput } from 'mui-one-time-password-input'
import {useCallback, useEffect, useState} from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {ResendOTP, VerifyOTP} from "../../../store/authStore";
import {ErrorToast, SuccessToast} from "../../../hooks/ToastMessages";
import {capitalize} from "../../../hooks/capitalize";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const matchIsNumeric = (text) =>{
    const isNumber = typeof text === 'number'
    const isString = typeof text==='string'
    return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
}
export default  function OtpForm() {

    const navigate = useNavigate()

    const [otp, setOTP] = useState('')
    const [resendOTPStatus, setResendOTPStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resendLoader, setResendLoader] = useState(false)


    const [countdown, setCountdown] = useState(60)

    const theme = useTheme();


    const regDetails = useSelector(state=>state.authStore.regDetails)







    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);

        if (countdown <= 0) {
            setResendOTPStatus(true)
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };


    })


    const verifyUser = async()=>{

        setLoading(true)

        let payload= {otp:otp}

        payload[regDetails.regMode]= regDetails[regDetails.regMode]


        await VerifyOTP(payload)
            .then(response => response?.data)
            .then(response => {
                setLoading(false)
                if (response.status) {
                     SuccessToast(capitalize(response?.message))

                    setTimeout(()=>{
                        navigate('/')
                    }, 2000)

                    return
                }

                return ErrorToast(capitalize(response?.message) || 'Error occurred, kindly try again')
            })

    }


    const resendOTP = async ()=>{

        setResendLoader(true)
        let payload = {}

        payload[regDetails.regMode]= regDetails[regDetails.regMode]


        await ResendOTP(payload)
            .then(response => response?.data)
            .then(response => {
                setResendLoader(false)
                if (response.status) {
                    return SuccessToast(capitalize(response?.message))
                }

                return ErrorToast(capitalize(response?.message) || 'Error occurred, kindly try again')
            })
    }




    return (

        <Box sx={{padding: 3}}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={3} lg={4} md={4} sx={{display: {xs: 'none', sm: 'block'}}}> </Grid>

                <Grid item xs={12} sm={6} lg={4} md={4}>

                    <Box sx={{border: '1px solid #F3F3F3', textAlign: 'center', borderRadius: '5px', padding: 5}}>

                        <Box component={'p'} className={'otp-header'}
                             sx={{color: '#272B41', fontWeight: '600', fontSize: '28px'}}> Verify Your Number</Box>

                        <PhonelinkLock sx={{color: '#E2E6EC', fontSize: 70}}/>

                        <p>Please enter the 4 digit verification code sent on your number.</p>

                        <Box sx={{maxWidth: {xs: '100%', sm: '300px'}, textAlign: 'center', margin:'0 auto'}}>
                            <MuiOtpInput
                                gap={useMediaQuery(theme.breakpoints.up('sm')) ? 3 : 1}
                                sx={{mt: 4}} length={4}
                                validateChar={(value, index) => matchIsNumeric(value)}
                                value={otp} onChange={(value) => setOTP(value)}/>
                        </Box>



                        <br/>
                        <br/>

                        <LoadingButton
                            onClick={()=>verifyUser()}
                            disabled={otp.length !== 4}
                            loading={loading} type={'submit'} fullWidth
                            sx={{backgroundColor: '#00329B', mr: 1}}
                            disableElevation variant={'contained'}
                            className={'guest-login'}>
                            Verify
                        </LoadingButton>

                        <br/>

                        <p style={{fontSize: '13px'}}>

                            Didn't receive your code?

                            {
                                resendOTPStatus ? <LoadingButton onClick={()=>resendOTP()} loading={resendLoader} size={'small'} variant={'text'} sx={{textTransform: 'none'}}>Resend
                                        code</LoadingButton>
                                    : <span
                                        style={{color: '#00329B'}}> request code <span>{countdown} seconds</span></span>
                            }

                        </p>


                    </Box>

                </Grid>
            </Grid>

        </Box>


    )
}