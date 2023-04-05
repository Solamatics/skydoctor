import {Box, Button, Grid, TextField} from "@mui/material";
import {DeleteForever, DeleteOutline} from "@mui/icons-material";

export default function Clinic({about, setAbout}) {
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>

            <h4 className={'profile-card-title'}>Clinic Info</h4>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} sm={6}>
                    <label
                        style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
                    >
                        Clinic Name
                    </label>
                    <br/>
                    <TextField
                        fullWidth
                        size={'small'}
                        type={'text'}
                        variant={'outlined'}

                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sm={6}>
                    <label
                        style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
                    >
                        Clinic Address
                    </label>
                    <br/>
                    <TextField
                        fullWidth
                        size={'small'}
                        type={'text'}
                        variant={'outlined'}

                    />
                </Grid>
                <Grid item xs={12} md={12} lg={12} sm={12}>
                    <label
                        style={{fontSize:'0.9375rem',marginBottom:' 0.5rem'}}
                    >
                        Clinic Images
                    </label>
                    <br/>

                    <Button className={'dropzone'} fullWidth>

                        <div className="dz-default dz-message">
                            <input type="file"  className="upload"   />
                            <span>Drop files here to upload</span>
                        </div>

                    </Button>
                    <br/>
                    <br/>
                    <div className="upload-wrap">
                        <div className="upload-images">
                            <img src={require('../../../assets/img/features/feature-01.jpg')} alt="Upload Image" />
                                <a href="javascript:void(0);" className="btn btn-icon btn-danger btn-sm">
                                    <i
                                    className="far fa-trash-alt">
                                        <DeleteForever  sx={{color:'white', fontSize:'16px', ml:'-7px', mt:'-8px'}} />
                                    </i></a>
                        </div>
                        <div className="upload-images">
                            <img src={require('../../../assets/img/features/feature-02.jpg')} alt="Upload Image" />
                                <a href="javascript:void(0);" className="btn btn-icon btn-danger btn-sm">
                                    <i
                                    className="far fa-trash-alt">
                                        <DeleteForever  sx={{color:'white', fontSize:'16px', ml:'-7px', mt:'-8px'}} />
                                    </i></a>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </Box>


    )

}