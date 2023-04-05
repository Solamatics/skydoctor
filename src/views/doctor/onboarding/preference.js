import {
    AccordionDetails,
    Autocomplete,
    Box,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControlLabel,
    FormGroup,
    Grid,
    InputAdornment, Switch,
    TextField,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import {
    ChatBubbleOutlined,
    EmailOutlined,
    KeyboardVoiceOutlined,
    MonetizationOnOutlined,
    Money,
    MoneyOutlined, Repeat, TaskOutlined,
    VideoCallOutlined
} from "@mui/icons-material";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {LoadingButton} from "@mui/lab";
import {useNavigate} from "react-router-dom";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: 'none',
    borderRadius:'10px',
    marginBottom:'20px',
    backgroundColor: '#fff',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : '#fff',
    flexDirection: 'row-reverse',
    borderRadius:'10px',
    padding:'10px 15px',
    fontSize: '1.875rem',
    border: '1px solid rgba(0,0,0,.125)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const detailsStyle = {
    borderRadius: '0 0 10px 10px',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    borderRight: '1px solid rgba(0,0,0,.125)',
    borderLeft: '1px solid rgba(0,0,0,.125)'
}

const headerStyle={
    fontSize: '14px',
    fontWeight:'normal'
}


export default function Preference() {

    const navigation= useNavigate()
    const [expanded, setExpanded] = useState('panel1');

    const consultationOptions = [
        {id: 1, content: 'Audio Calls', icon: <KeyboardVoiceOutlined/>},
        {id: 2, content: 'Video Calls', icon: <VideoCallOutlined/>},
        {id: 3, content: 'Chat', icon: <ChatBubbleOutlined/>},
    ]

    const daysOption = [
        {id: 1, content: 'M', value: 'monday'},
        {id: 2, content: 'T', value: 'tuesday'},
        {id: 3, content: 'W', value: 'wednesday'},
        {id: 4, content: 'T', value: 'thursday'},
        {id: 5, content: 'F', value: 'friday'},
        {id: 6, content: 'S', value: 'saturday'},
        {id: 7, content: 'S', value: 'sunday'},
    ]

    const languageOptions = [
        {id: 1, title: 'English', value: 'english'},
        {id: 2, title: 'French', value: 'french'},
        {id: 2, title: 'Spanish', value: 'spanish'},

    ]

    const [consultMode, setConsultMode] = useState([])
    const [days, setDays] = useState([])
    const [dialog, setDialog] = useState(false)
    const handleConsultMode = async (value) => {
        let index = consultMode.indexOf(value)

        if (index === -1) {
            await setConsultMode((prevState) => [...prevState, value])
            return preferredForm.setFieldValue('mode', [...consultMode, value])
        }

        await setConsultMode((prevState) => prevState.filter(item => item !== value))
        return preferredForm.setFieldValue('mode', consultMode.filter(item => item !== value))
    }

    const handleDays = async (value) => {
        let index = days.indexOf(value)

        if (index === -1) {
            await setDays((prevState) => [...prevState, value])
            return availabilityForm.setFieldValue('days', [...days, value])
        }

        await setDays((prevState) => prevState.filter(item => item !== value))
        return availabilityForm.setFieldValue('days', days.filter(item => item !== value))
    }


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const consultationSchema = yup.object({

        amount: yup
            .string()
            .required('Enter an amount')

    });
    const consultationForm = useFormik({
        initialValues: {
            amount: '',
        },
        validationSchema: consultationSchema,
        onSubmit: (values) => {

            return console.log(values)

        },
    });

    const preferredSchema = yup.object({

        language: yup
            .object()
            .required('Select a language'),
        mode: yup
            .array()
            .min(1, 'Select at least 1 option')

    });
    const preferredForm = useFormik({
        initialValues: {
            language: '',
            mode: [],
        },
        validationSchema: preferredSchema,
        onSubmit: (values) => {

            return console.log(values)

        },
    });


    const availabilitySchema = yup.object({

        date: yup
            .date()
            .required('Select a date'),
        start_time: yup
            .mixed()
            .required('Select start time'),
        end_time: yup
            .mixed()
            .required('Select end time'),

        repeat: yup.boolean(),
        days: yup
            .array()
            .min(1, 'Select at least a day'),
        schedule: yup
            .date()
            .required('select a day')


    });
    const availabilityForm = useFormik({
        initialValues: {
            date: '',
            start_time: '',
            end_time: '',
            repeat: false,
            days: [],
            schedule: ''
        },
        validationSchema: availabilitySchema,
        onSubmit: (values) => {

            setDialog(true)
            return console.log(values)

        },
    });

    return (
        <Box sx={{mt: {xs: 2, sm: 10}, padding: {xs: '20px', sm: '50px'}, minHeight: {xs: '100%', sm: '580px'}}}
             className={'onboarding-content-box'}>

            <h6 className={'onboarding-title'}>Preferences <span style={{color: '#FF0202'}}>*</span></h6>
            <h6 className={'onboarding-subtitle'}>
                This can be edited later on from the account settings.
            </h6>

            <Box className={'onboarding-box-wrap'}>
                <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            sx={{boxShadow: expanded === 'panel1' ? '8px 7px 14px -15px rgb(0 0 0 / 40%)' : 'none'}}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography sx={headerStyle}>Cost of Consultation</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={detailsStyle}>
                            <h6 className={'accordion-content-header'}>What is the maximum cost per consultation <span
                                style={{color: '#FF0202'}}>*</span></h6>
                            <p className={'accordion-content-content'}>
                                This can be edited later on from the preferences
                                section.
                            </p>
                            <form noValidate aria-autocomplete={'none'} autoComplete={'off'}
                                  onSubmit={consultationForm.handleSubmit}>
                                <div>
                                    <TextField
                                        label={'Amount'}
                                        sx={{backgroundColor: '#F4F4F4'}}
                                        variant={'outlined'}
                                        fullWidth
                                        type={'number'}
                                        id={'amount'}
                                        value={consultationForm.values.amount}
                                        onChange={consultationForm.handleChange}
                                        error={consultationForm.touched.amount && Boolean(consultationForm.errors.amount)}
                                        helperText={consultationForm.touched.amount && consultationForm.errors.amount}
                                        required
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    position="end"
                                                >
                                                    <MonetizationOnOutlined/>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </div>
                                <Box sx={{marginTop: {xs: '5%', sm: '5%'}, display: 'flex', flexDirection: 'row'}}>
                                    <Button disableElevation type={"submit"}
                                            sx={{padding: '13px 45px', textTransform: 'none'}} variant={'contained'}>
                                        Continue
                                    </Button>

                                    <Button onChange={handleChange('panel1')} disableElevation
                                            sx={{padding: '13px 45px', textTransform: 'none', ml: 1}} variant={'text'}>
                                        Not Now
                                    </Button>
                                </Box>

                            </form>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            sx={{boxShadow: expanded === 'panel2' ? '8px 7px 14px -15px rgb(0 0 0 / 40%)' : 'none'}}
                            aria-controls="panel2d-content"
                            id="panel2d-header">
                            <Typography sx={headerStyle}>
                                Preferred means for online consultations
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={detailsStyle}>
                            <h6 className={'accordion-content-header'}>
                                Which are your preferred means of online
                                consultation?
                                <span style={{color: '#FF0202'}}>*</span>
                            </h6>
                            <p className={'accordion-content-content'}>
                                You can select more than one from the below. These will
                                show up as options for the patient when booking an
                                appointment.
                            </p>
                            <form noValidate aria-autocomplete={'none'} autoComplete={'off'}
                                  onSubmit={preferredForm.handleSubmit}>
                                <Box sx={{
                                    display: 'flex',
                                    mb: 3,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>

                                    {
                                        consultationOptions.map(item => (

                                            <Button
                                                onClick={() => handleConsultMode(item.id)}
                                                startIcon={item.icon}
                                                fullWidth
                                                sx={{
                                                    mx: 2,
                                                    backgroundColor: consultMode.indexOf(item.id) !== -1 ? '#0c4f8a' : '#fff',
                                                    borderColor: '#0c4f8a',
                                                    color: consultMode.indexOf(item.id) !== -1 ? '#fff' : '#272b41',
                                                    height: '55px',
                                                    '&:hover': {
                                                        color: '#272b41'
                                                    }

                                                }}
                                                variant={'outlined'}
                                                key={item.id}>
                                                {item.content}

                                            </Button>
                                        ))
                                    }

                                </Box>
                                <span
                                    className={'error-info'}
                                    style={{
                                        display: preferredForm.touched.mode && Boolean(preferredForm.errors.mode) ? 'block' : 'none'
                                    }}>
                                {preferredForm.touched.mode && preferredForm.errors.mode}
                            </span>
                                <p className={'accordion-content-content'}>
                                    Choose your preferred language for Audio, Video calls and chat. You can select more
                                    than one option.
                                </p>

                                <label className={'form-label'}>Language</label>
                                <Autocomplete
                                    fullWidth
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            placeholder={'Choose your language'}
                                            error={preferredForm.touched.language && Boolean(preferredForm.errors.language)}
                                            helperText={preferredForm.touched.language && preferredForm.errors.language}
                                        />
                                    }
                                    sx={{backgroundColor: '#F4F4F4', mt: 2}}
                                    options={languageOptions}
                                    getOptionLabel={(option) => option.title || ''}
                                    margin={'normal'}
                                    id={'state'}
                                    value={preferredForm.values.language}
                                    onChange={(e, value) => preferredForm.setFieldValue('language', value || '')}
                                    isOptionEqualToValue={(option, stateInput) => option.value === stateInput.value}

                                />

                                <Box sx={{marginTop: {xs: '5%', sm: '9%'}, display: 'flex', flexDirection: 'row'}}>
                                    <Button disableElevation type={"submit"}
                                            sx={{padding: '13px 45px', textTransform: 'none'}} variant={'contained'}>
                                        Continue
                                    </Button>

                                    <Button onChange={handleChange('panel2')} disableElevation
                                            sx={{padding: '13px 45px', textTransform: 'none', ml: 1}} variant={'text'}>
                                        Not Now
                                    </Button>
                                </Box>
                            </form>


                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            sx={{boxShadow: expanded === 'panel3' ? '8px 7px 14px -15px rgb(0 0 0 / 40%)' : 'none'}}
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography>Availabilities</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={detailsStyle}>
                            <h6 className={'accordion-content-header'}>
                                Add availability
                                <span style={{color: '#FF0202'}}>*</span>
                            </h6>
                            <p className={'accordion-content-content'}>
                                Visitors will only be able to schedule appointments during available hours.
                            </p>
                            <form noValidate aria-autocomplete={'none'} autoComplete={'off'}
                                  onSubmit={availabilityForm.handleSubmit}>
                                <label className={'form-label'}>Date</label>
                                <div>
                                    <TextField
                                        placeholder={'Select a date'}
                                        sx={{backgroundColor: '#F4F4F4'}}
                                        variant={'outlined'}
                                        fullWidth
                                        type={'date'}
                                        id={'date'}
                                        value={availabilityForm.values.date}
                                        onChange={availabilityForm.handleChange}
                                        error={availabilityForm.touched.date && Boolean(availabilityForm.errors.date)}
                                        helperText={availabilityForm.touched.date && availabilityForm.errors.date}
                                        required

                                    />
                                </div>
                                <br/>

                                <label className={'form-label'}> Time will you be available?</label>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6} sm={6} lg={6}>
                                        <div>
                                            <TextField
                                                placeholder={'Select a date'}
                                                sx={{backgroundColor: '#F4F4F4'}}
                                                variant={'outlined'}
                                                fullWidth
                                                type={'time'}
                                                id={'start_time'}
                                                value={availabilityForm.values.start_time}
                                                onChange={availabilityForm.handleChange}
                                                error={availabilityForm.touched.start_time && Boolean(availabilityForm.errors.start_time)}
                                                helperText={availabilityForm.touched.start_time && availabilityForm.errors.start_time}
                                                required

                                            />
                                            <span style={{fontSize: '10px'}}>start time</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} sm={6} lg={6}>
                                        <div>
                                            <TextField
                                                placeholder={'Select a date'}
                                                sx={{backgroundColor: '#F4F4F4'}}
                                                variant={'outlined'}
                                                fullWidth
                                                type={'time'}
                                                id={'end_time'}
                                                value={availabilityForm.values.end_time}
                                                onChange={availabilityForm.handleChange}
                                                error={availabilityForm.touched.end_time && Boolean(availabilityForm.errors.end_time)}
                                                helperText={availabilityForm.touched.end_time && availabilityForm.errors.end_time}
                                                required

                                            />
                                            <span style={{fontSize: '10px'}}>end time</span>
                                        </div>
                                    </Grid>
                                </Grid>


                                <Box sx={{mt: 1}}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    id={'repeat'}
                                                    name={'repeat'}
                                                    value={availabilityForm.values.repeat}
                                                    onChange={availabilityForm.handleChange}
                                                    error={availabilityForm.touched.repeat && Boolean(availabilityForm.errors.repeat)}
                                                    helperText={availabilityForm.touched.repeat && availabilityForm.errors.repeat}

                                                    sx={{color: '#10916F'}}

                                                />
                                            }
                                            label={
                                                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                                    <Repeat sx={{fontSize: '20px'}}/>
                                                    <Typography sx={{color: 'colors.primary', ml: 1}}>Repeat
                                                        Availability</Typography>
                                                </Box>
                                            }
                                        />

                                    </FormGroup>
                                </Box>
                                <br/>
                                <label className={'form-label'}> Choose any day of the week to repeat this
                                    availability.</label>
                                <Box sx={{
                                    display: 'flex',
                                    mt: 1,
                                    mb: 3,
                                    flexDirection: 'row',
                                    maxWidth: '100%',
                                    flexWrap: 'wrap'
                                }}>

                                    {
                                        daysOption.map(item => (

                                            <Button
                                                onClick={() => handleDays(item.value)}
                                                fullWidth
                                                sx={{
                                                    mr: 1,
                                                    backgroundColor: days.indexOf(item.value) !== -1 ? '#0c4f8a' : '#fff',
                                                    borderColor: '#E6E9F4',
                                                    color: days.indexOf(item.value) !== -1 ? '#fff' : '#272b41',
                                                    padding: '8px 0px',
                                                    width: '60px',
                                                    fontSize: '20px',
                                                    '&:hover': {
                                                        color: '#272b41'
                                                    }
                                                }}
                                                variant={'outlined'}
                                                key={item.id}>
                                                {item.content}

                                            </Button>
                                        ))
                                    }

                                </Box>
                                <span
                                    className={'error-info'}
                                    style={{
                                        display: availabilityForm.touched.days && Boolean(availabilityForm.errors.days) ? 'block' : 'none'
                                    }}>
                                {availabilityForm.touched.days && availabilityForm.errors.days}
                            </span>

                                <label className={'form-label'}>Repeat this schedule until</label>
                                <div>
                                    <TextField
                                        placeholder={'Select a date'}
                                        sx={{backgroundColor: '#F4F4F4'}}
                                        variant={'outlined'}
                                        fullWidth
                                        type={'date'}
                                        id={'schedule'}
                                        value={availabilityForm.values.schedule}
                                        onChange={availabilityForm.handleChange}
                                        error={availabilityForm.touched.schedule && Boolean(availabilityForm.errors.schedule)}
                                        helperText={availabilityForm.touched.schedule && availabilityForm.errors.schedule}
                                        required

                                    />
                                </div>

                                <br/>

                                <Box sx={{marginTop: {xs: '5%', sm: '9%'}, display: 'flex', flexDirection: 'row'}}>
                                    <Button disableElevation type={"submit"}
                                            sx={{padding: '13px 45px', textTransform: 'none'}} variant={'contained'}>
                                        Save & Next
                                    </Button>


                                </Box>


                            </form>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Box>

            <Dialog
                open={dialog}
                onClose={() => setDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'sm'}
                fullWidth
            >
                <DialogTitle sx={{textAlign: 'center', padding: '2rem 1rem 1rem 1rem'}} id="alert-dialog-title">
                    <TaskAltIcon sx={{color: 'teal', fontSize: '50px'}}/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h2 className={'onboarding-completion-title'}>
                            Doctor’s profile has been verified
                        </h2>
                        <p className={'onboarding-completion-subtitle'}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{alignItems: 'center', padding: 2, justifyContent: 'center'}}>
                    <LoadingButton
                        onClick={()=>navigation('/doctor/dashboard')}
                        disableElevation
                        sx={{padding: '13px 45px', textTransform: 'none'}}
                        variant={'contained'}>
                        Continue
                    </LoadingButton>
                </DialogActions>
            </Dialog>


        </Box>
    )
}