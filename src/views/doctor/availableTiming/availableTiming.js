import {Box, Button, Grid, TextField} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import {useState} from "react";
import Timers from "./timers";


export default function AvailableTiming() {

    const [date, setDate] = useState('')
    const [timeSelection, setTimeSelection] = useState([])
    const time = [
        '02:40 PM', '03:00 PM', '03:20 PM', '03:40 PM', '04:00 PM', '04:20 PM', '04:40 PM', '05:00 PM', '05:20 PM', '05:40 PM', '06:00 PM', '06:20 PM', '06:40 PM', '07:00 PM', '07:20 PM', '07:40 PM', '08:00 PM', '08:20 PM', '08:40 PM', '09:00 PM', '09:20 PM', '09:40 PM'
    ]

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

                        <Box sx={{
                            border: '1px solid #f0f0f0',
                            marginBottom: '1.875rem',
                            borderRadius: '0.25rem',
                            padding: '1.5rem'
                        }}>

                            <h4 style={{
                                fontSize: '1.125rem',
                                marginBottom: '15px',
                                color: '#272b41',
                                fontWeight: '500'
                            }}>Schedule Timings</h4>
                            <Box className={'flex-row'} sx={{flexWrap: 'wrap'}}>
                                <div>
                                    <div className={'available-timing-date'}>
                                        <span>Date</span>
                                    </div>
                                </div>
                                <div>
                                    <TextField
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        type={'date'}
                                        size={'small'}
                                    />

                                </div>
                                <div style={{marginLeft: '10px'}}>
                                    <Button
                                        sx={{
                                            backgroundColor: '#09e5ab',
                                            color: 'white',
                                            border: '1px solid #09e5ab',
                                            padding: '0.4rem 0.75rem'
                                        }}
                                    >
                                        Search
                                    </Button>
                                </div>
                            </Box>
                            <br/>

                            <Box sx={{textAlign: 'center'}}>

                                <h6 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '15px',
                                    color: '#272b41',
                                    fontWeight: '500'
                                }}>
                                    1<sup>st</sup> Session
                                </h6>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    marginBottom: '15px',
                                    color: '#272b41',
                                    fontWeight: '500'
                                }}>Start Time</h4>

                                <Button
                                    sx={{
                                        color: '#09e5ab',
                                        border: '1px solid #09e5ab',
                                        padding: '0.45rem 0.75rem',
                                        fontSize: '1.125rem',
                                        '&:hover': {
                                            backgroundColor: '#09e5ab',
                                            color: 'white'
                                        }
                                    }}
                                    varaint={'outlined'}>
                                    09: 00 AM
                                </Button>

                            </Box>
                            <br/>
                            <Timers time={time} timeSelection={timeSelection} setTimeSelection={setTimeSelection}/>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}