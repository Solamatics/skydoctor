import {Autocomplete, Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {EmailOutlined, UploadFileOutlined, Visibility, VisibilityOff} from "@mui/icons-material";
import * as yup from "yup";
import {useFormik} from "formik";
import {MuiFileInput} from "mui-file-input";
import {FileSize} from "../../../hooks/fileSize";
import {uploadDoc} from "../../../store/doctorStore";
import {ErrorToast, SuccessToast} from "../../../hooks/ToastMessages";
import {LoadingButton} from "@mui/lab";


export default function UploadIdentity({userDetails, updatePage}) {


    const documentType = [
        {title: 'PDF', value: '.pdf'},
        {
            title: 'DOC',
            value: ' .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        },
        {title: 'IMAGE', value: 'image/*'}
    ]
    //upload   form validator
    const validationSchema = yup.object({

        doc: yup
            .object()
            .required('Select  a document type'),
        documentNumber: yup
            .number()
            .required('Enter your document type'),
        document: yup.mixed().required('File is required'),


    });

    const [loading, setLoading] = useState(false)
    const [thumb, setThumb] = useState(null)

    const formik = useFormik({
        initialValues: {
            doc: '',
            documentNumber: '',
            document: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            return uploadDocument({
                doc_no: values.documentNumber,
                doc: values.document
            })

        },
    });

    const uploadDocument = async (payload) => {
        try {
            setLoading(true)
            await uploadDoc(payload)
                .then(response => response.data)
                .then(response => {
                    if (response.status) {
                        SuccessToast(response.message || response.msg)

                        setTimeout(async () => {
                            await updatePage(3)
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
        <Box sx={{mt: {xs: 2, sm: 8}, padding: {xs: '20px', sm: '50px'}, minHeight: {xs: '90vh', sm: '580px'}}}
             className={'onboarding-content-box'}>

            <h6 className={'onboarding-title'}>Upload identification <span style={{color: '#FF0202'}}>*</span></h6>
            <h6 className={'onboarding-subtitle'}>
                We need to determine if an identity document is authentic and belongs to you.
                You just need to go through some steps which will help us to build a secure system together
            </h6>

            <br/>

            <form noValidate aria-autocomplete={'none'} autoComplete={'off'} onSubmit={formik.handleSubmit}>

                <Box className={'onboarding-box-wrap'}>
                    <div>
                        <Autocomplete
                            fullWidth
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label={'Select Document Type'}
                                    error={formik.touched.doc && Boolean(formik.errors.doc)}
                                    helperText={formik.touched.doc && formik.errors.doc}
                                />
                            }
                            sx={{mt: '12px', backgroundColor: '#F4F4F4'}}
                            options={documentType}
                            getOptionLabel={(option) => option.title || ''}
                            margin={'normal'}
                            id={'doc'}
                            value={formik.values.country}
                            onChange={(e, value) => formik.setFieldValue('doc', value || '')}
                            isOptionEqualToValue={(option, stateInput) => option.value === stateInput.value}

                        />
                        <TextField
                            margin={'normal'}
                            type={'number'}
                            required
                            id={'documentNumber'}
                            label={'Enter Document Number'}
                            variant={'outlined'}
                            sx={{backgroundColor: '#F4F4F4'}}
                            value={formik.values.documentNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.documentNumber && Boolean(formik.errors.documentNumber)}
                            helperText={formik.touched.documentNumber && formik.errors.documentNumber}
                            fullWidth/>

                        <Button
                            component={'label'}
                            className={'file-option'}
                            sx={{
                                height: '120px',
                                display: 'flex',
                                flexDirection: 'column',
                                mt: 1,
                                textTransform: 'none'
                            }}>

                            <UploadFileOutlined fontSize={'large'} sx={{color: '#272b41',}}/>


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
                                    : <p style={{color: '#272b41'}}>Upload Document </p>
                            }

                            <input
                                hidden
                                accept={!!formik.values.doc ? formik.values.doc.value : '*'}
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


                    </div>
                    <Box sx={{marginTop: {xs: '10%', sm: '5%'}}}>
                        <LoadingButton loading={loading} disableElevation type={"submit"}
                                       sx={{padding: '13px 45px', textTransform: 'none'}}
                                       variant={'contained'}>
                            Continue
                        </LoadingButton>
                    </Box>


                </Box>


            </form>


        </Box>
    )
}