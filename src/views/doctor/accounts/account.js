import {Grid, Box, Tab} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import AccountDetails from "./accountDetails";
import Earnings from "./earnings";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";
import AccountBreakdown from "./accountBreakdown";



export default function Account(){
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box component={'main'} sx={{mt: 2, pa: 1}}>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={3} spacing={3} sx={{pa: 5}}>

                    <Grid item xs={12} sm={3} lg={3} md={3}
                          sx={{
                              pa: 5,
                              display: {xs: 'none', sm: 'block'},

                          }}
                    >
                        <DashboardSideBar/>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={9} md={9} sx={{px: 2}}>

                        <Box sx={{padding: '3px 10px'}}>
                            <Grid container spacing={3} rowSpacing={3}>
                                <Grid item xs={12} md={5} sm={5} lg={5}>
                                    <AccountDetails/>
                                </Grid>
                                <Grid item xs={12} md={7} sm={7} lg={7}>
                                    <Earnings/>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12} lg={12}>

                                    <Box className={'card'} sx={{padding: '1rem 1.5rem'}}>

                                        <Box sx={{ width: '100%', typography: 'body1' }}>
                                            <TabContext value={value}>
                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                    <TabList sx={{py:0}} variant={'fullWidth'} onChange={handleChange} aria-label="lab API tabs example">
                                                        <Tab sx={{fontWeight:'600', py:0}} label="Accounts" value="1" />
                                                        <Tab sx={{fontWeight:'600'}} label="Patient Refund Request" value="2" />

                                                    </TabList>
                                                </Box>
                                                <TabPanel value="1">
                                                    <AccountBreakdown/>
                                                </TabPanel>
                                                <TabPanel value="2">
                                                    <AccountBreakdown/>
                                                </TabPanel>

                                            </TabContext>
                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}