


import {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import {ResetPassword} from "../../../store/authStore";

import {capitalize} from "../../../hooks/capitalize";
import {SuccessToast, ErrorToast} from "../../../hooks/ToastMessages";
import {Box, Button, InputAdornment, TextField, Typography,} from "@mui/material";


import LoadingButton from "@mui/lab/LoadingButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";




export default function ResetPasswordForm({userDetails}) {


    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [togglePass, setTogglePass] = useState(false)
    const [toggleCPass, setToggleCPass] = useState(false)


    //login form validator
    const validationSchema = yup.object({
        otp: yup
            .string()
            .required('OTP field is required')
            .length(4, 'Invalid OTP format'),
        password: yup
            .string('Enter your password')
            .required('Password is required')
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {message: 'Invalid password format'}),
        cpass: yup
            .string()
            .required('Confirm password is required')
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),


    });

    const formik = useFormik({
        initialValues: {
            otp: '',
            password: '',
            cpass:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            let data = {
                otp:values.otp,
                new_password:values.password,
                ...userDetails
            }

            return changePassword(data);

        },
    });


    //reset user password
    const changePassword = async (payload) => {
        setLoading(true)
        await ResetPassword({...payload})
            .then(response => response?.data)
            .then(response => {
                setLoading(false)
                if (response.status) {
                    SuccessToast(capitalize(response?.message))
                    setTimeout(() => {
                        navigate('/')
                    }, 1000)

                    return
                }

                return ErrorToast(capitalize(response?.message) || 'Error occurred, kindly try again')
            })


    }


    return (
        <Box>

            <form noValidate aria-autocomplete={'none'} autoComplete={'off'} onSubmit={formik.handleSubmit}>


                <TextField
                    required
                    id={'otp'}
                    margin={'normal'}
                    label={'OTP'}
                    type={'number'}
                    fullWidth

                    variant={'outlined'}
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    error={formik.touched.otp && Boolean(formik.errors.otp)}
                    helperText={formik.touched.otp && formik.errors.otp}

                />


                <TextField
                    required
                    id={'password'}
                    margin={'normal'}
                    label={'Password'}
                    type={togglePass ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment onClick={() => setTogglePass(!togglePass)} position="end"
                                            sx={{cursor: 'pointer'}}>
                                {togglePass ? <VisibilityOff/> : <Visibility/>}
                            </InputAdornment>
                        )
                    }}
                    variant={'outlined'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    fullWidth/>

                <TextField
                    required
                    id={'cpass'}
                    margin={'dense'}
                    label={'Confirm Password'}
                    type={toggleCPass ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment onClick={() => setToggleCPass(!toggleCPass)} position="end"
                                            sx={{cursor: 'pointer'}}>
                                {toggleCPass ? <VisibilityOff/> : <Visibility/>}
                            </InputAdornment>
                        )
                    }}
                    variant={'outlined'}
                    value={formik.values.cpass}
                    onChange={formik.handleChange}
                    error={formik.touched.cpass && Boolean(formik.errors.cpass)}
                    helperText={formik.touched.cpass && formik.errors.cpass}
                    fullWidth/>

                <Typography sx={{textAlign:'center', fontSize:'11px', mt:1, color:'darkgrey'}}>
                    password must be at least 8 characters long contains (special character, number, Uppercase )
                </Typography>


                <Box sx={{mt:1}}>
                    <br/>


                    <LoadingButton
                        loading={loading} type={'submit'} fullWidth
                        sx={{backgroundColor: '#00329B', mr: 1}}
                        disableElevation variant={'contained'}
                        className={'guest-login'}>
                        Change Password
                    </LoadingButton>
                    <br/>

                    <Button  onClick={()=>navigate('/')}  fullWidth   sx={{backgroundColor:'white', mt:1, color:'#2E3842', borderRadius:'35px', textTransform:'none'}}>
                        Back to Login
                    </Button>




                </Box>

            </form>
        </Box>
    )
}