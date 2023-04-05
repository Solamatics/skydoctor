import {useState} from "react";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import {MuiOtpInput} from "mui-one-time-password-input";


export default function Registration({updatePage, userDetails, userReg}) {
    const [status, setStatus] = useState(1)
    const [otp, setOTP] = useState('')
    const matchIsNumeric = (text) => {
        const isNumber = typeof text === 'number'
        const isString = typeof text === 'string'
        return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
    }
    const theme = useTheme();
    const [gap, setGap] = useState(useMediaQuery(theme.breakpoints.up('sm')))
    return (
        <Box>
            {
                status === 1
                    ? <div className="onboarding-content-box content-wrap">
                        <div className="onborad-set">
                            <div className="onboarding-title">
                                <h2>Whats your Primary email?<span>*</span></h2>
                                <h6>We will only use it to advise you for any important changes.</h6>
                            </div>
                            <div className="onboarding-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-placeholder form-focus passcode-wrap mail-box">
                                                <label className="focus-label">Legal name<span>*</span></label>
                                                <input type="text" className="form-control floating" required=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-placeholder form-focus passcode-wrap mail-box">
                                                <label className="focus-label">Email Address<span>*</span></label>
                                                <input type="text" className="form-control floating" required=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="onboarding-btn">
                            <a onClick={() => setStatus(2)}
                               style={{color: 'white!important', cursor: 'pointer'}}>Continue</a>
                        </div>
                    </div>
                    : <div className="onboarding-content-box content-wrap">
                        <div className="onboard-set">
                            <div className="onboarding-title">
                                <h2>Enter 4-digit code sent to your email.</h2>
                                <h6>We’ve sent it to <a
                                    href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="fb9f9498988e899ebb9e839a968b979ed5989496">[email&#160;protected]</a>
                                </h6>
                            </div>
                            <div className="onboarding-content">
                                <Box sx={{
                                    maxWidth: {xs: '100%', sm: '400px'},
                                    textAlign: 'left',
                                    justifyContent: 'start',

                                }}>
                                    <MuiOtpInput
                                        style={{
                                            textAlign: 'left',
                                            justifyContent: 'start',
                                        }}
                                        gap={gap ? 3 : 1}
                                        sx={{mt: 4}} length={4}
                                        validateChar={(value, index) => matchIsNumeric(value)}
                                        value={otp} onChange={(value) => setOTP(value)}/>


                                </Box>
                            </div>


                            <div className="opt-resend">
                                <a href="#" className="text-danger">Resend OTP</a>
                            </div>
                        </div>
                        <div className="onboarding-btn">
                            <a onClick={() => updatePage(2)}
                               style={{color: 'white!important', cursor: 'pointer'}}>Continue</a>
                        </div>
                    </div>
            }


        </Box>

    )
}