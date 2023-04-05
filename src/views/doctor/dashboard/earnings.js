import Chart from "react-apexcharts";
import {

    Box,
    Card, CardContent,

} from "@mui/material";


export default function Earnings() {



    const category = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',]
    const series = [
        {
            name: 'Earnings',
            data: [500, 275, 710, 320, 40, 200, 20]
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


                    <h6 style={{fontSize: '16px', fontWeight: '500'}}>Earnings</h6>



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