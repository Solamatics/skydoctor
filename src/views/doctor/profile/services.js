import {Box, TextField} from "@mui/material";

export default function Services(){
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>
            <h4 className={'profile-card-title'}>Services and Specialization</h4>
            <label
                style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
            >
                Services
            </label>
            <TextField
                fullWidth
                size={'small'}
                type={'text'}
                placeholder={'Enter your services'}
                variant={'outlined'}
                helperText={'Note : Type & Press enter to add new services'}
            />

          <br/>

            <label
                style={{fontSize:'0.9375rem',margin:'0.8rem 0 0.5rem ', }}
            >
                Specialization
            </label>
            <TextField
                fullWidth
                size={'small'}
                type={'text'}
                placeholder={'Enter your services'}
                variant={'outlined'}
                helperText={'Note : Type & Press enter to add new specialization'}
            />

        </Box>
    )
}