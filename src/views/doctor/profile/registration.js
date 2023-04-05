import {Box, Button, Grid, IconButton, TextField} from "@mui/material";
import {ControlPoint, Delete} from "@mui/icons-material";

export default function Registration({reg, setReg, addReg, delReg }){
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>
            <h4 className={'profile-card-title'}> Registrations </h4>
            {
                reg.map((item, index) => (
                    <Grid spacing={2} sx={{mb:1.8}} container key={item.award}>
                        <Grid item xs={12} md={5} sm={5} lg={5}>
                            <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>Registration</label>
                            <TextField
                                name={'registration'}
                                value={item.registration}
                                type={'text'}
                                size={'small'}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={5} sm={5} lg={5}>
                            <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>Year</label>
                            <TextField
                                name={'year'}
                                value={item.year}
                                type={'date'}
                                size={'small'}
                                fullWidth
                            />
                        </Grid>


                        {
                            index !== 0
                            &&  <Grid item xs={12} md={2} sm={2} lg={2}>
                                <IconButton
                                    size={'small'}
                                    variant={'contained'}
                                    onClick={()=>delReg(index)}
                                    sx={{
                                        backgroundColor: '#ff0100',
                                        borderRadius: '5px',
                                        color: 'white',
                                        mt: 3.8,
                                        '&:hover': {
                                            backgroundColor: '#dc3545'
                                        }
                                    }}>
                                    <Delete/>
                                </IconButton>
                            </Grid>
                        }
                    </Grid>

                ))
            }


            <br/>
            <Button
                onClick={()=>addReg()}
                sx={{color: '#20c0f3', textTransform: 'none'}}
                startIcon={<ControlPoint sx={{mt:-0.1}} />}
                variant={'text'}>
                <span>Add More</span>
            </Button>


        </Box>
    )
}