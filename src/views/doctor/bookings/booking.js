import {Link} from "react-router-dom";
import {WeekDaysFinder, dayFinder} from "../../../hooks/weekDaysFinder";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";


export default function Booking() {

    const filterOptions = [
        {title: 'Today', value: 'Today'},
        {title: 'Yesterday', value: 'Yesterday'},
        {title: 'Last 7 Days', value: 'Last 7 Days'},
        {title: 'Last 30 Days', value: 'Last 30 Days'},
        {title: 'This Month', value: 'This Month'},
        {title: 'Custom Range', value: 'Custom Range'},
    ]
    const [filter, setFilter] = useState('')

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="booking-doc-info">
                                    <Link to={'/doctor/doctor-profile'} className="booking-doc-img">
                                        <img src={require("../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                             alt="User Image"/>
                                    </Link>
                                    <div className="booking-info">
                                        <h4><Link to={'/doctor/doctor-profile'}>Dr. Darren Elder</Link></h4>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating">35</span>
                                        </div>
                                        <p className="text-muted mb-0"><i
                                            className="fas fa-map-marker-alt"></i> Newyork, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-6">
                                <h4 className="mb-1">{dayFinder().date}</h4>
                                <p className="text-muted">{dayFinder().day}</p>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6 text-sm-end">
                                <div className="bookingrange btn btn-white btn-sm mb-3">
                                    <FormControl sx={{m: 1, minWidth: 120}} size="small">
                                        <InputLabel id="demo-select-small">Filter</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={filter}
                                            label="Filter"
                                            sx={{fontSize: '13px'}}
                                            onChange={(e) => setFilter(e.target.value)}
                                        >
                                            {
                                                filterOptions.map(item => (
                                                    <MenuItem key={item.value} value={item.value}>
                                                        {item.title}
                                                    </MenuItem>
                                                ))
                                            }

                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>

                        <div className="card booking-schedule schedule-widget">

                            <div className="schedule-header">
                                <div className="row" style={{width: '100%'}}>
                                    <div className="col-md-12 flex-grow-1">

                                        <div className="day-slot">
                                            <ul>
                                                <li className="left-arrow">
                                                    <a href="#">
                                                        <i className="fa fa-chevron-left"></i>
                                                    </a>
                                                </li>
                                                {
                                                    WeekDaysFinder().map((item, index) => (
                                                        <li key={index}>
                                                            <span>{item.day}</span>
                                                            <span className="slot-date">{item.date}
                                                              </span>
                                                        </li>
                                                    ))
                                                }


                                                <li className="right-arrow">
                                                    <a href="#">
                                                        <i className="fa fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </div>


                            <div className="schedule-cont">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="time-slot">
                                            <ul className="clearfix">
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing selected" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="submit-section proceed-btn text-end">
                            <Link to={'/doctor/checkout'} className="btn btn-primary submit-btn">Proceed to Pay</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}