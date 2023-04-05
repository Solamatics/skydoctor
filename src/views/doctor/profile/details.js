import {Box, FormControl, Grid, MenuItem, Select, TextField} from "@mui/material";
import {Upload} from "@mui/icons-material";

export default function Details({profileFields,gender, setGender,genderOption,}){

    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>

            <h4 className={'profile-card-title'}>Basic Information</h4>
            <Box className={'d-flex flex-row'}>
                <div className={'change-avatar'}>
                    <div className={'profile-img'}>
                        <img src={require('../../../assets/img/patient2.jpg')} alt={'Profile pics'} />
                    </div>
                    <div className="upload-img">
                        <div className="change-photo-btn">
                            <span><Upload sx={{color:'white'}} /> Upload Photo</span>
                            <input type="file" className="upload" />
                        </div>
                        <small className="form-text text-muted">
                            Allowed JPG, GIF or PNG. Max size of 2MB
                        </small>
                    </div>

                </div>
            </Box>
            <br/>

            <Grid container spacing={2}>

                {
                    profileFields.map(item=>(
                        <Grid key={item.title}  item xs={12} sm={6} md={6} lg={6}>

                            <label
                                style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
                            >
                                {item.title} <span className={'text-danger'}>*</span>
                            </label>
                            <br/>

                            {
                                item.type !=='autocomplete'
                                && <TextField
                                    fullWidth
                                    size={'small'}
                                    type={item.type}
                                    variant={'outlined'}
                                    disabled={item.disabled}
                                />
                            }

                            {
                                item.type === 'autocomplete'
                                && <FormControl sx={{  minWidth: '100%' }} size="small">

                                    <Select
                                        labelId="demo-select-small1"
                                        id="demo-select-small1"
                                        value={gender}
                                        sx={{fontSize:'13px'}}
                                        onChange={(e)=>setGender(e.target.value)}
                                        fullWidth
                                    >
                                        {
                                            genderOption.map(item=>(
                                                <MenuItem key={item.value} value={item.value}>
                                                    {item.title}
                                                </MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            }



                        </Grid>
                    ))
                }


            </Grid>

        </Box>
    )
}