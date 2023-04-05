import {Box, FormControl, Grid, MenuItem, Select, TextField} from "@mui/material";

export default  function Contact({contactFields}){
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>

            <h4 className={'profile-card-title'}>Contact Details</h4>


            <Grid container spacing={2}>
                {
                    contactFields.map(item=>(
                        <Grid key={item.title}  item xs={12} sm={6} md={6} lg={6}>

                            <label
                                style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
                            >
                                {item.title} <span className={'text-danger'}>*</span>
                            </label>
                            <br/>
                            <TextField
                                fullWidth
                                size={'small'}
                                type={item.type}
                                variant={'outlined'}

                            />




                        </Grid>
                    ))
                }
            </Grid>


        </Box>

    )
}