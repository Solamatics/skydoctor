import {Box, TextField} from "@mui/material";


export default function Aboutme({about,setAbout}){
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>

            <h4 className={'profile-card-title'}>About Me</h4>
            <label
                style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
            >
               Biography
            </label>
            <br/>

            <TextField
                fullWidth
                size={'small'}
                type={'text'}
                variant={'outlined'}
                multiline
                rows={4}
                sx={{resize:'none'}}

            />


        </Box>
    )
}