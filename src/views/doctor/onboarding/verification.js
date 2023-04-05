import * as yup from "yup";
import {useFormik} from "formik";
import {Autocomplete, Box, Button, Grid, TextField, Typography} from "@mui/material";
import {FileSize} from "../../../hooks/fileSize";
import {FileOpen, FileOpenOutlined, ImageSearch} from "@mui/icons-material";
import {verifyDoctor} from "../../../store/doctorStore";
import {ErrorToast, SuccessToast} from "../../../hooks/ToastMessages";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";


export default function Verification({userDetails,updatePage}){

    const validationSchema = yup.object({
        regno: yup
            .string()
            .required('Enter your medical council number'),
        document: yup
            .mixed()
            .required('Document is required'),
        specialization: yup
            .object()
            .required('Select a specialization'),

    });
    const formik = useFormik({
        initialValues: {
            regno: userDetails?.onboarding.mcreg_no || '',
            document: '',
            specialization: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            return verifyDoc({
                regno:values.regno,
                regdoc:values.document,
                spec:values.specialization.value,
            })

        },
    });

    const requirements = [
        {id:1, content:'Certificate of Registration with the Maltese Medical Council OR Registration from the appropriate Professional Council'},
        {id:2, content: 'Certificate of Good Standing (from the Maltese Medical Council - valid for 3 months from the date of issue). Doctors applying from overseas are to provide a Certificate of Good Standing issued from the most recent country of residence / practise (valid for 3 months from the date of issue) (only applicable for Medical Doctors)'},
        {id:3, content: 'Curriculum Vitae'},
        {id:4, content: 'Specialist Registration Certificate'},
        {id:5, content: 'Digital signature: copy of the signature and registration number'},
    ]

    const specialization= [
        {id:1, title:'Physiology', value:'physiology'},
        {id:1, title:'Orthopedic', value:'orthopedic'},

    ]

    const [loading,setLoading] = useState(false)

    const verifyDoc = async (payload)=>{
        try {
            setLoading(true)
            await verifyDoctor(payload)
                .then(response => response.data)
                .then(response => {
                    if (response.status) {
                        SuccessToast(response.message || response.msg)

                        setTimeout(async () => {
                            await updatePage(5)
                            setLoading(false)
                        }, 1500)
                        return
                    }

                    setLoading(false)
                    ErrorToast(response.message || response.msg)
                })
        } catch (e) {
            ErrorToast(e.message)

        }
    }

    return (
        <Box sx={{mt: {xs: 2, sm: 10},padding:{xs:'20px',sm:'50px'}, minHeight: {xs: '100%', sm: '580px'}}} className={'onboarding-content-box'}>

            <h6 className={'onboarding-title'}>Doctor Verification<span style={{color: '#FF0202'}}>*</span></h6>
            <h6 className={'onboarding-subtitle'}>
                Please provide the details below and attach copies for your:
            </h6>
            <div className={'verify-box'}>
                <ul className={'verify-list'}>

                    {
                        requirements.map(item=><li className={'verify-item'} key={item.id}>{item.content}</li>)
                    }

                </ul>

            </div>
            <br/>
            <form noValidate aria-autocomplete={'none'} autoComplete={'off'} onSubmit={formik.handleSubmit}>

                <Box className={'onboarding-box-wrap'}>

                    <Grid container spacing={3} rowSpacing={{xs: 1, sm: 1}}>

                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <div>
                                <label className={'form-label'}>Medical council registration number <span
                                    style={{color: '#FF0202'}}>*</span>
                                </label>
                                <TextField
                                    margin={'normal'}
                                    type={'number'}
                                    required
                                    id={'regno'}
                                    placeholder={'Medical council registration number'}
                                    variant={'outlined'}
                                    sx={{backgroundColor: '#F4F4F4'}}
                                    value={formik.values.regno}
                                    onChange={formik.handleChange}
                                    error={formik.touched.regno && Boolean(formik.errors.regno)}
                                    helperText={formik.touched.regno && formik.errors.regno}
                                    fullWidth/>

                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <Button
                                component={'label'}
                                className={'file-option'}
                                sx={{
                                    height: '163px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent:'center',
                                    my: 1,
                                    width: '100%!important',
                                    textTransform: 'none'
                                }}>
                                {
                                    !!formik.values.document
                                        ? <Typography
                                            component={'div'}
                                            sx={{textTransform: 'lowercase', mt: 2}}>
                                             <span style={{
                                                 padding: '5px 10px',
                                                 color: '#272b41',
                                                 fontWeight: '600',
                                                 fontSize: '11px',
                                                 backgroundColor: 'darkgray',
                                                 borderRadius: '10px'
                                             }}>
                                            {formik.values.document.name}
                                        </span>
                                            <div className={'w3-text-center w3-center '} style={{marginTop: '5px'}}>
                                                <span style={{
                                                    color: '#A8A8A8',
                                                    fontSize: '10px'
                                                }}>{FileSize(formik.values.document.size)}</span>
                                            </div>

                                        </Typography>
                                        :
                                        <div>
                                            <div className={'w3-center'}>
                                                <FileOpenOutlined fontSize={'large'}/>
                                            </div>
                                            <div className={'upload-pic'}>
                                                <h6>Upload Document</h6>
                                            </div>
                                        </div>

                                }

                                <input
                                    hidden

                                    id={'document'}
                                    name={'document'}
                                    onChange={(event) => {
                                        formik.setFieldValue("document", event.currentTarget.files[0])
                                    }
                                    }
                                    type="file"/>

                            </Button>
                            <span
                                className={'error-info'}
                                style={{
                                    display: formik.touched.document && Boolean(formik.errors.document) ? 'block' : 'none'
                                }}>
                                {formik.touched.document && formik.errors.document}
                            </span>


                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <div>
                                <label className={'form-label'}>Area of Specialisation<span style={{color: '#FF0202'}}>*</span></label>
                                <Autocomplete
                                    fullWidth
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            placeholder={'Select Area of  Specialization'}
                                            error={formik.touched.specialization && Boolean(formik.errors.specialization)}
                                            helperText={formik.touched.specialization && formik.errors.specialization}
                                        />
                                    }
                                    sx={{backgroundColor: '#F4F4F4', mt: 2}}
                                    options={specialization}
                                    getOptionLabel={(option) => option.title || ''}
                                    margin={'normal'}
                                    id={'specialization'}
                                    value={formik.values.specialization}
                                    onChange={(e, value) => formik.setFieldValue('specialization', value || '')}
                                    isOptionEqualToValue={(option, stateInput) => option.value === stateInput.value}

                                />

                            </div>
                        </Grid>



                    </Grid>


                    <Box sx={{marginTop: {xs: '5%', sm: '5%'}}}>
                        <LoadingButton loading={loading} disableElevation type={"submit"} sx={{padding: '13px 45px', textTransform: 'none'}}
                                variant={'contained'}>
                            Continue
                        </LoadingButton>
                    </Box>


                </Box>


            </form>


        </Box>
    )
}