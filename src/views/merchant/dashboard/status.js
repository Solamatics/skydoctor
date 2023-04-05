import Chart from "react-apexcharts";

export default function Status() {
    const series = [
        {
            name: "Doctors",
            data: [0, 1, 5, 3, 2]
        },
        {
            name: "Patients",
            data: [0, 3, 5, 2, 3]
        }
    ]
    const options = {

        colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
        chart: {
            height: 300,
            type: 'area',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },
        markers: {
            size: 3,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        grid: {
            show: false,
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + "0"
                }
            },
            axisBorder: {
                show: true,
            },
        },
        xaxis: {
            categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021'],
        }
    };
    return (
        <div className="card flex-fill">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col">
                        <h5 className="card-title">Status</h5>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div id={'chart'}>
                    <Chart options={options} series={series} type="area" height={350}/>
                </div>
            </div>
        </div>
    )
}