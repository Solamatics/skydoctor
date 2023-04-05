import {Box, Button, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";
import {DeleteOutlined, Edit, EditOutlined, PrintOutlined, Visibility} from "@mui/icons-material";
import {Link} from "react-router-dom";
import MedicalDialog from "./medicalDialog";
import EditMedicalDialog from "./editMedicalDialog";
import Appointment from "./detailsTabs/appointment";
import Prescriptions from "./detailsTabs/prescriptions";
import MedicalRecords from "./detailsTabs/medicalRecords";
import BillingContainer from "./detailsTabs/billingContainer";

export default function PatientDetails() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [medicalDialog, setMedicalDialog] = useState(false)
    const [editMedicalDialog, setEditMedicalDialog] = useState(false)
    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">

                            <div className="card widget-profile pat-widget-profile">
                                <div className="card-body">
                                    <div className="pro-widget-content">
                                        <div className="profile-info-widget">
                                            <a href="#" className="booking-doc-img">
                                                <img src={require("../../../assets/img/patients/patient.jpg")}
                                                     alt="User Image"/>
                                            </a>
                                            <div className="profile-det-info">
                                                <h3>Richard Wilson</h3>
                                                <div className="patient-details">
                                                    <h5><b>Patient ID :</b> PT0016</h5>
                                                    <h5 className="mb-0"><i
                                                        className="fas fa-map-marker-alt"></i> Newyork,
                                                        United
                                                        States</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="patient-info text-left"  style={{textAlign: 'left', justifyContent: 'start'}}>
                                        <ul>
                                            <li><b>Phone</b> <span>+1 952 001 8563</span></li>
                                            <li>Age <span>38 Years, Male</span></li>
                                            <li>Blood Group <span>AB+</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title" style={{fontSize: '16px'}}>Last Booking</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="media align-items-center d-flex">
                                            <div className="me-3 flex-shrink-0">
                                                <img alt="Image placeholder"
                                                     src={require("../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                     className="avatar  rounded-circle"/>
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <h5 className="d-block mb-0" style={{fontSize: '14px'}}>Dr. Darren
                                                    Elder </h5>
                                                <span className="d-block text-sm text-muted">Dentist</span>
                                                <span className="d-block text-sm text-muted">14 Nov 2019 5.00 PM</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media align-items-center d-flex">
                                            <div className="me-3 flex-shrink-0">
                                                <img alt="Image placeholder"
                                                     src={require("../../../assets/img/doctors/doctor-thumb-02.jpg")}
                                                     className="avatar  rounded-circle"/>
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <h5 className="d-block mb-0" style={{fontSize: '14px'}}>Dr. Darren
                                                    Elder </h5>
                                                <span className="d-block text-sm text-muted">Dentist</span>
                                                <span className="d-block text-sm text-muted">12 Nov 2019 11.00 AM</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                            <div className="card">
                                <div className="card-body pt-0">
                                    <TabContext value={value}>
                                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                            <TabList sx={{py: 0}} variant={'fullWidth'} onChange={handleChange}
                                                     aria-label="lab API tabs example">
                                                <Tab sx={{fontWeight: '600', py: 0, textTransform: 'none'}}
                                                     label="Appointments" value="1"/>
                                                <Tab sx={{fontWeight: '600', textTransform: 'none'}}
                                                     label="Prescriptions"
                                                     value="2"/>
                                                <Tab sx={{fontWeight: '600', textTransform: 'none'}}
                                                     label="Medical Records"
                                                     value="3"/>
                                                <Tab sx={{fontWeight: '600', textTransform: 'none'}} label="Billing"
                                                     value="4"/>
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                          <Appointment/>
                                        </TabPanel>
                                        <TabPanel value={'2'}>
                                           <Prescriptions/>
                                        </TabPanel>
                                        <TabPanel value={'3'}>
                                          <MedicalRecords setMedicalDialog={setEditMedicalDialog} setEditMedicalDialog={setEditMedicalDialog} />
                                        </TabPanel>
                                        <TabPanel value={'4'}>
                                           <BillingContainer />
                                        </TabPanel>


                                    </TabContext>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MedicalDialog dialog={medicalDialog} setDialog={setMedicalDialog}/>
            <EditMedicalDialog dialog={editMedicalDialog} setDialog={setEditMedicalDialog}/>
        </>

    )
}