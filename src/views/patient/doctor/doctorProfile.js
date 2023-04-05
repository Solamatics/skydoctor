import {useState} from "react";
import {Link} from "react-router-dom";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Tab} from "@mui/material";
import Overview from "./overview";
import Locations from "./locations";
import Reviews from "./reviews";
import BusinessHours from "./businessHours";
import CallDialog from "../message/callDialog";
import VideoDialog from "../message/videoDialog";


export default function DoctorProfile(){
    const [value, setValue] = useState('1');
    const [dialog, setDialog] = useState(false)
    const [callDialog, setCallDialog] = useState(false)
    return (
        <>
            <div className="content">
                <div className="container">

                    <div className="card">
                        <div className="card-body">
                            <div className="doctor-widget">
                                <div className="doc-info-left">
                                    <div className="doctor-img">
                                        <img src={require("../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                             className="img-fluid"
                                             alt="User Image"/>
                                    </div>
                                    <div className="doc-info-cont">
                                        <h4 className="doc-name">Dr. Darren Elder</h4>
                                        <p className="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                                        <p className="doc-department">
                                            <img src={require("../../../assets/img/specialities/specialities-05.png")}
                                                 className="img-fluid" alt="Speciality"/>
                                            Dentist
                                        </p>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating">(35)</span>
                                        </div>
                                        <div className="clinic-details">
                                            <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork,
                                                USA - <a
                                                    href="javascript:void(0);">Get Directions</a></p>
                                            <ul className="clinic-gallery">
                                                <li>
                                                    <a href={require("../../../assets/img/features/feature-01.jpg")}
                                                       data-fancybox="gallery">
                                                        <img src={require("../../../assets/img/features/feature-01.jpg")}
                                                             alt="Feature"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={require("../../../assets/img/features/feature-02.jpg")}
                                                       data-fancybox="gallery">
                                                        <img src={require("../../../assets/img/features/feature-02.jpg")}
                                                             alt="Feature Image"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={require("../../../assets/img/features/feature-03.jpg")}
                                                       data-fancybox="gallery">
                                                        <img src={require("../../../assets/img/features/feature-03.jpg")}
                                                             alt="Feature"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={require("../../../assets/img/features/feature-04.jpg")}
                                                       data-fancybox="gallery">
                                                        <img src={require("../../../assets/img/features/feature-04.jpg")}
                                                             alt="Feature"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clinic-services">
                                            <span>Dental Fillings</span>
                                            <span>Teeth Whitneing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="doc-info-right">
                                    <div className="clini-infos">
                                        <ul>
                                            <li><i className="fas fa-thumbs-up"></i> 99%</li>
                                            <li><i className="fas fa-comment"></i> 35 Feedback</li>
                                            <li><i className="fas fa-map-marker-alt"></i> Newyork, USA</li>
                                            <li><i className="fas fa-money-bill-alt"></i> $100 per hour</li>
                                        </ul>
                                    </div>
                                    <div className="doctor-action">
                                        <a href="javascript:void(0)" className="btn btn-white fav-btn">
                                            <i className="fas fa-bookmark"></i>
                                        </a>
                                        <Link to={'/patient/message'}  className="btn btn-white msg-btn">
                                            <i className="fas fa-comment-alt"></i>
                                        </Link>
                                        <a onClick={()=>setCallDialog(true)} href="javascript:void(0)" className="btn btn-white call-btn"
                                           data-bs-toggle="modal"
                                           data-bs-target="#voice_call">
                                            <i className="fas fa-phone"></i>
                                        </a>
                                        <a  onClick={()=>setDialog(true)} href="javascript:void(0)" className="btn btn-white call-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#video_call">
                                            <i className="fas fa-video"></i>
                                        </a>
                                    </div>
                                    <div className="clinic-booking">
                                        <Link to={'/patient/booking'} className="apt-btn" >Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body pt-0">

                            <TabContext value={value}>
                                <Box sx={{borderBottom: 1, borderColor: 'divider', mb: 1}}>
                                    <TabList sx={{py: 0}} variant={'fullWidth'}
                                             onChange={(event, newValue) => setValue(newValue)}
                                    >
                                        <Tab sx={{fontWeight: '600', py: 0, textTransform: 'none'}}
                                             label="Overview" value="1"/>
                                        <Tab sx={{fontWeight: '600', textTransform: 'none'}}
                                             label="Locations"
                                             value="2"/>
                                        <Tab sx={{fontWeight: '600', textTransform: 'none'}}
                                             label="Reviews"
                                             value="3"/>
                                        <Tab sx={{fontWeight: '600', textTransform: 'none'}} label="Business Hours"
                                             value="4"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Overview/>
                                </TabPanel>
                                <TabPanel value="2"> <Locations/></TabPanel>
                                <TabPanel value="3"> <Reviews/></TabPanel>
                                <TabPanel value="4"><BusinessHours/></TabPanel>

                            </TabContext>


                        </div>
                    </div>

                </div>
            </div>
            <CallDialog dialog={callDialog} setDialog={setCallDialog} />
            <VideoDialog dialog={dialog} setDialog={setDialog}  />
        </>


    )
}