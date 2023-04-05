import {Box, Button, Grid, IconButton, TextField} from "@mui/material";
import {ControlPoint, Delete} from "@mui/icons-material";


export default function Education({edulist, setEdulist, addNewEducation,delEdu}) {
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>
            <h4 className={'profile-card-title'}> Education </h4>


                {
                    edulist.map((item, index) => (
                        <Grid spacing={2} sx={{mb:1.8}} container key={item.degree}>
                            <Grid item xs={12} md={3} sm={3} lg={3}>
                                <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>Degree</label>
                                <TextField
                                    name={'degree'}
                                    value={item.degree}
                                    type={'text'}
                                    size={'small'}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={3} sm={3} lg={3}>
                                <label
                                    style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>College/Institute</label>
                                <TextField
                                    name={'college'}
                                    value={item.college}
                                    type={'text'}
                                    size={'small'}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={3} sm={3} lg={3}>
                                <label style={{fontSize: '0.9375rem', marginBottom: ' 0.5rem'}}>Year of
                                    Completion</label>
                                <TextField
                                    name={'year'}
                                    value={item.year}
                                    type={'text'}
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
                                            onClick={()=>delEdu(index)}
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
                onClick={()=>addNewEducation()}
                sx={{color: '#20c0f3', textTransform: 'none'}}
                startIcon={<ControlPoint sx={{mt:-0.1}} />}
                variant={'text'}>
                <span>Add More</span>
            </Button>


        </Box>
    )
}