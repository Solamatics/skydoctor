import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    IconButton, MenuItem, Select, TextField
} from "@mui/material";
import {Close, ControlPoint, Delete} from "@mui/icons-material";
import {useState} from "react";


export default function AccountDetails() {

    const accountDetails = [
        {title: 'Bank Name', value: 'Wells Fargo & Co'},
        {title: 'Branch Name', value: 'Lenexa'},
        {title: 'Account Number', value: '5396 5250 1908 3838'},
        {title: 'Account Name', value: 'Dr. Darren Elder'},
    ]
    const [dialog, setDialog] = useState(false)
    return (
        <Box>

            <Box className={'card'}>
                <Box className={'flex-row'} sx={{
                    justifyContent: 'space-between',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid rgb(240, 240, 240)'
                }}>

                    <div>
                        <h4>Account Details</h4>
                    </div>
                    <div style={{alignItems: 'center'}}>

                        <Button
                            variant={'contained'}
                            onClick={()=>setDialog(true)}
                            disableElevation
                            sx={{
                                fontSize: '0.875rem',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '0.2rem',
                                backgroundColor: '#09e5ab',
                                textTransform: 'none',
                                mt: 1,
                            }}
                        >
                            Edit Details
                        </Button>
                    </div>


                </Box>
                <br/>
                <Box sx={{padding: '1rem 1.5rem'}}>
                    <Grid container spacing={3} rowSpacing={3}>
                        {
                            accountDetails.map(item => (
                                <Grid key={item.title} item xs={12} sm={6} md={6} lg={6}>
                                    <h5 style={{
                                        color: 'rgb(39, 43, 65)',
                                        fontWeight: '500',
                                        fontSize: '14px'
                                    }}>{item.title}</h5>
                                    <h6 style={{
                                        color: 'rgb(117, 117, 117)',
                                        fontSize: '14px'
                                    }}
                                    >{item.value}</h6>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>

            </Box>
            <Dialog
                open={dialog}
                onClose={() => setDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'xs'}
                fullWidth
            >
                <DialogTitle component={'div'} className={'flex-row'}
                             sx={{
                                 textAlign: 'center',
                                 borderBottom: '1px solid rgb(222, 226, 230)',
                                 justifyContent: 'space-between'
                             }}
                             id="alert-dialog-title">

                    <h6 style={{color: 'rgb(39, 43, 65)', fontWeight: '500',}}>Account Details</h6>
                    <div>
                        <IconButton onClick={() => setDialog(false)}>
                            <Close/>
                        </IconButton>
                    </div>


                </DialogTitle>
                <DialogContent>
                    <DialogContentText component={'div'} id="alert-dialog-description" sx={{padding: '1.25rem'}}>

                        <form>
                            <div style={{marginBottom:'10px'}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Bank Name</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'small'}
                                    margin={'dense'}
                                />

                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Branch Name</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'small'}
                                    margin={'dense'}
                                />

                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Account Number</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'small'}
                                    margin={'dense'}
                                />

                            </div>
                            <div style={{marginBottom:'10px',}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Account Name</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'small'}
                                    margin={'dense'}
                                />

                            </div>




                            <br/>
                            <div className={'w3-center'}>

                                <Button
                                    type={'submit'}

                                    className={'slot-buttons'}

                                >
                                    Save
                                </Button>

                            </div>

                        </form>


                    </DialogContentText>
                </DialogContent>


            </Dialog>
            
        </Box>


    )
}