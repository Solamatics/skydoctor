import {Box, Button, Grid, IconButton, TextField} from "@mui/material";
import {ControlPoint, Delete} from "@mui/icons-material";


export default function Experience({experience, setExperience, addNewExperience, deleteExperience}) {
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>
            <h4 className={'profile-card-title'}> Education </h4>


            {
                experience.map((item, index) => (
                    <Grid spacing={2} sx={{mb: 1.8}} container key={item.hospital}>
                        <Grid item xs={12} md={3} sm={3} lg={3}>
                            <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>Hospital Name</label>
                            <TextField
                                name={'hospital'}
                                value={item.hospital}
                                type={'text'}
                                size={'small'}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={3} sm={3} lg={3}>
                            <label
                                style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>From </label>
                            <TextField
                                name={'from'}
                                value={item.from}
                                type={'text'}
                                size={'small'}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={3} sm={3} lg={3}>
                            <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}> To </label>
                            <TextField
                                name={'to'}
                                value={item.to}
                                type={'text'}
                                size={'small'}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} md={2} sm={2} lg={2}>
                            {
                                index !== 0
                                    ? <IconButton
                                        size={'small'}
                                        variant={'contained'}
                                        onClick={() => deleteExperience(index)}
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
                                    : ''
                            }

                        </Grid>
                        <Grid item xs={12} md={3} sm={3} lg={3}>
                            <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}> Designation </label>
                            <TextField
                                name={'designation'}
                                value={item.designation}
                                type={'text'}
                                size={'small'}
                                fullWidth
                            />
                        </Grid>

                    </Grid>

                ))
            }


            <br/>
            <Button
                onClick={() => addNewExperience()}
                sx={{color: '#20c0f3', textTransform: 'none'}}
                startIcon={<ControlPoint sx={{mt: -0.1}}/>}
                variant={'text'}>
                <span>Add More</span>
            </Button>


        </Box>
    )

}