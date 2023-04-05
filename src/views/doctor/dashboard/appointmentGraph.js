import Chart from "react-apexcharts";
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {ArrowRight} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function AppointmentGraph() {

    const categoryOptions = [
        {id:1, title:'All Calls', value:'all'},
        {id:2, title:'Video', value:'video'},
        {id:3, title:'Audio', value:'audio'},
        {id:4, title:'Chat', value:'chat'},
    ]
    const yearOptions = ['2022', '2021', '2020', '2019']


    const category = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const series = [
        {
            name: 'Video calls',
            data: [100, 975, 410, 390, 310, 460, 0, 240, 10, 0, 45, 300]
        },
        {
            name: 'Audio Call',
            data: [500, 275, 710, 320, 40, 200, 0, 65, 900, 650, 34, 56]
        }
    ]
    const options = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            },
            offsetX: -14

        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            lines: {
                show: false,
            },
            categories: category,

        },
        yaxis: {
            lines: {
                show: false,
            }
        },
        stroke: {
            curve: 'smooth',
        },

    }

    const [year, setYear] = useState('')
    const [cat, setCat] = useState()


    return (
        <Card className={'dash-cards'}>
            <CardContent sx={{padding:0}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.2rem',
                    flexDirection: 'row',
                    borderBottom: '1px solid #f0f0f0'
                }}>


                    <h6 style={{fontSize: '16px', fontWeight: '500'}}>Appointments</h6>
                    <div style={{marginTop: '10px',}}>

                        <Box sx={{display:'flex', flexDirection:'row'}}>
                            <Box>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">Category</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={cat}
                                        label="Category"
                                        sx={{fontSize:'13px'}}
                                        onChange={(e)=>setCat(e.target.value)}
                                    >
                                        {
                                            categoryOptions.map(item=>(
                                                <MenuItem key={item.value} value={item.value}>
                                                    {item.title}
                                                </MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>


                            </Box>
                            <Box>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small1">Year</InputLabel>
                                    <Select
                                        labelId="demo-select-small1"
                                        id="demo-select-small1"
                                        value={year}
                                        label="Year"
                                        sx={{fontSize:'13px'}}
                                        onChange={(e)=>setYear(e.target.value)}
                                    >
                                        {
                                            yearOptions.map(item=>(
                                                <MenuItem key={item} value={item}>
                                                    {item}
                                                </MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>


                            </Box>
                        </Box>

                    </div>


                </Box>

                <br/>
                <Box sx={{padding:'3px 10px'}} >
                    <div id={'chart'}>
                        <Chart options={options} series={series} type="area" height={350} />
                    </div>
                </Box>
            </CardContent>
        </Card>

    )


}