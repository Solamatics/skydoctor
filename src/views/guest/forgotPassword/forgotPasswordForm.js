


import {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import {ForgotPassword} from "../../../store/authStore";

import {capitalize} from "../../../hooks/capitalize";
import {SuccessToast, ErrorToast} from "../../../hooks/ToastMessages";
import {Box, Button,TextField, Typography} from "@mui/material";

import {Link} from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";




export default function ForgotPasswordForm({setToken, setDetails}) {


    const [regMode, setRegMode] = useState(false)
    const [loading, setLoading] = useState(false)



    //login form validator
    const validationSchema = yup.object({
        emailMode: yup.boolean(),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .when('emailMode', {
                is: (val) => regMode === false,
                then: yup.string().required('Email is required')
            })
        ,
        phone: yup
            .string()
            .when('emailMode', {
                is: (val) => regMode === true,
                then: yup.string().required('Mobile number is required')
            })

    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const data = !regMode ? {email: values.email} : {phone: values.phone}

            setDetails({...data})

            return resetPassword(data);

        },
    });


    //reset user password
    const resetPassword = async (payload) => {
        setLoading(true)
        await ForgotPassword({...payload})
            .then(response => response?.data)
            .then(response => {
                setLoading(false)
                if (response.status) {
                     SuccessToast(capitalize(response?.message))
                    return setToken(true)
                }

                return ErrorToast(capitalize(response?.message) || 'Error occurred, kindly try again')
            })


    }


    return (
        <Box>

            <Box sx={{display: 'flex'}}>
                <Button
                    disableElevation
                    variant={!regMode ? 'contained' : 'outlined'} sx={{
                    backgroundColor: !regMode ? '#00329B' : 'white',
                    color: !regMode ? 'white' : '#00329B',
                    borderColor: !regMode ? '#00329B' : 'white',
                    mr: 1,
                    flexGrow: 1,
                    textTransform: 'none'
                }}
                    onClick={() => setRegMode(false)}
                >
                    With Email Address
                </Button>
                <Button
                    disableElevation
                    variant={regMode ? 'contained' : 'outlined'} sx={{
                    backgroundColor: regMode ? '#00329B' : 'white',
                    color: regMode ? 'white' : '#00329B',
                    flexGrow: 1,
                    ml: 1,
                    borderColor: regMode ? '#00329B' : 'white',
                    textTransform: 'none'
                }}
                    onClick={() => setRegMode(true)}
                >
                    With Mobile Number
                </Button>
            </Box>

            <Typography component={'p'}   sx={{fontSize:'12px', mt:3, color: 'rgba(149, 149, 149, 1)'}}>
                Enter your registered phone number to
                receive your password reset instruction
            </Typography>
            <form noValidate aria-autocomplete={'none'} autoComplete={'off'} onSubmit={formik.handleSubmit}>


                {
                    !regMode ?
                        <TextField
                            type={'email'}
                            margin={'normal'}
                            id={'email'}
                            label={'Email'}
                            variant={'outlined'}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            fullWidth/>
                        :
                        <TextField
                            type={'text'} margin={'normal'} required
                            label={'Mobile Number'}
                            id={'phone'}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            variant={'outlined'} fullWidth/>
                }


                <Box sx={{mt:1}}>

                    <div className={'w3-text-right'} style={{textAlign: 'right'}}>
                        <Typography to={'/'} component={Link} sx={{fontSize: '12px', mt: 1}}>
                            Remember my login?
                        </Typography>
                    </div>
                    <br/>
                    <LoadingButton
                        loading={loading} type={'submit'} fullWidth
                        sx={{backgroundColor: '#00329B', mr: 1}}
                        disableElevation variant={'contained'}
                        className={'guest-login'}>
                        Reset Password
                    </LoadingButton>



                </Box>

            </form>
        </Box>
    )
}