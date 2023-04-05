import { Grid, Box,TextField,Button } from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";

export default function Password() {
  return (
    <Box component={"main"} sx={{ mt: 2, pa: 1 }}>
      <Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          spacing={3}
          sx={{ pa: 5 }}
        >
          <Grid
            item
            xs={12}
            sm={3}
            lg={3}
            md={3}
            sx={{
              pa: 5,
              display: { xs: "none", sm: "block" },
            }}
          >
            <DashboardSideBar />
          </Grid>
          <Grid item xs={12} sm={9} lg={9} md={9} sx={{ px: 2 }}>
            <Box className={"card"} sx={{ padding: "1.3rem 1.5rem" }}>

                <Grid container spacing={3}>

                    <Grid item xs={12} sm={7} lg={7} md={7}>

                    <form>
                            <div style={{marginBottom:'10px'}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Old Password</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'normal'}
                                    type={'password'}
                                    margin={'dense'}
                                />

                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>New Password</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'normal'}
                                    margin={'dense'}
                                    type={'password'}
                                />

                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Confirm Password</label>
                                <TextField
                                    fullWidth
                                    variant={'outlined'}
                                    size={'normal'}
                                    margin={'dense'}
                                    type={'password'}
                                />

                            </div>
                       



                            <br/>
                            <div className={''}>

                                <Button
                                    type={'submit'}

                                    className={'slot-buttons'}

                                >
                                    Save Changes
                                </Button>

                            </div>

                        </form>
                    </Grid>
                </Grid>


            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
