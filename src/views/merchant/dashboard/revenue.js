import Chart from "react-apexcharts";


export default function Revenue(){

    const options_1 = {
        colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
        series: [
            {
                name: "Gross revenue",
                type: "column",
                data: [15, 28, 5, 2, 32, 12, 30, 3, 2, 35, 15, 10]
            },
            {
                name: "Net revenue",
                type: "column",
                data: [10, 15, 2, 8, 20, 7, 15, 2, 3, 15, 8, 5]
            }
        ],
        chart: {
            type: 'bar',
            fontFamily: 'Poppins, sans-serif',
            height: 350,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
            },
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "0"
                }
            }
        }
    }

    const category = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const series = [
        {
            name: "Gross revenue",
            type: "column",
            data: [15, 28, 5, 2, 32, 12, 30, 3, 2, 35, 15, 10]
        },
        {
            name: "Net revenue",
            type: "column",
            data: [10, 15, 2, 8, 20, 7, 15, 2, 3, 15, 8, 5]
        }
    ]
    const options = {
        colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
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
            labels: {
                formatter: function (val) {
                    return val + "0"
                }
            },
            axisBorder: {
                show: true,
            },
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "0"
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
            },
        },
        grid: {
            show: false,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

    }
    return (
        <div className="card flex-fill">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col">
                        <h5 className="card-title">Revenue</h5>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div id={'chart'}>
                    <Chart options={options} series={series} type="bar" height={350} />
                </div>

            </div>
        </div>
    )
}