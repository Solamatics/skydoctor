import {Box, Button, IconButton} from "@mui/material";
import {AddOutlined, DeleteOutlined} from "@mui/icons-material";
import {useState} from "react";
import {Link} from "react-router-dom";


const AddPrescription = () => {
    const [prescription, AddPrescription] = useState([
        {name: '', quantity: '', days: '', morning: false, afternoon: false, evening: false, night: false},
    ])
    const addMore = () => {
        const prescription = {
            name: '',
            quantity: '',
            days: '',
            morning: false,
            afternoon: false,
            evening: false,
            night: false
        }
        return AddPrescription(prevState => [...prevState, {...prescription}])
    }

    const deletePrescription = (element) => {

        return AddPrescription(prevState => prevState.filter(item => item !== element))

    }
    return (
        <Box>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                            <div className="card widget-profile pat-widget-profile">
                                <div className="card-body">
                                    <div className="pro-widget-content">
                                        <div className="profile-info-widget">
                                            <Link to={'/doctor/appointments'} className="booking-doc-img">
                                                <img src={require("../../../assets/img/patients/patient.jpg")}
                                                     alt="User Image"/>
                                            </Link>
                                            <div className="profile-det-info">
                                                <h3><Link to={'/doctor/appointments'}>Richard Wilson</Link></h3>
                                                <div className="patient-details">
                                                    <h5><b>Patient ID :</b> PT0016</h5>
                                                    <h5 className="mb-0"><i
                                                        className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="patient-info" style={{textAlign: 'left', justifyContent: 'start'}}>
                                        <ul>
                                            <li>Phone <span>+1 952 001 8563</span></li>
                                            <li>Age <span>38 Years, Male</span></li>
                                            <li>Blood Group <span>AB+</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Add Prescription</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="biller-info">
                                                <h4 className="d-block">Dr. Darren Elder</h4>
                                                <span className="d-block text-sm text-muted">Dentist</span>
                                                <span
                                                    className="d-block text-sm text-muted">Newyork, United States</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-sm-end">
                                            <div className="billing-info">
                                                <h4 className="d-block">1 November 2019</h4>
                                                <span className="d-block text-muted">#INV0001</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="add-more-item text-end">
                                        <Button variant={'text'} onClick={() => addMore()}>
                                            {/*<i className="fas fa-plus-circle"></i>*/}
                                            <AddOutlined sx={{mt:-0.6, mr:0.2}}/>
                                            Add Item
                                        </Button>
                                    </div>


                                    <div className="card card-table">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-center">
                                                    <thead>
                                                    <tr>
                                                        <th style={{minWidth: '200px'}}>Name</th>
                                                        <th style={{minWidth: '80px'}}>Quantity</th>
                                                        <th style={{minWidth: '80px'}}>Days</th>
                                                        <th style={{minWidth: '100px'}}>Time</th>
                                                        <th style={{minWidth: '80px'}}></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        prescription.map((item, index) => (
                                                            <tr>
                                                                <td>
                                                                    <input className="form-control" name={'name'}
                                                                           type="text"/>
                                                                </td>
                                                                <td>
                                                                    <input className="form-control" name={'quantity'}
                                                                           type="text"/>
                                                                </td>
                                                                <td>
                                                                    <input className="form-control" name={'days'}
                                                                           type="text"/>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label">
                                                                            <input name={'morning'}
                                                                                   className="form-check-input"
                                                                                   type="checkbox"/> Morning
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label">
                                                                            <input name={'afternoon'}
                                                                                   className="form-check-input"
                                                                                   type="checkbox"/> Afternoon
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label">
                                                                            <input name={'evening'}
                                                                                   className="form-check-input"
                                                                                   type="checkbox"/> Evening
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label">
                                                                            <input name={'night'}
                                                                                   className="form-check-input"
                                                                                   type="checkbox"/> Night
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td style={{display: index !== 0 ? 'block' : 'none'}}>
                                                                    <IconButton onClick={() => deletePrescription(item)}
                                                                                className="btn bg-danger-light trash">
                                                                        <DeleteOutlined fontSize={'small'}/>
                                                                    </IconButton>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-12 text-end">
                                            <div className="signature-wrap">
                                                <div className="signature">
                                                    Click here to sign
                                                </div>
                                                <div className="sign-name">
                                                    <p className="mb-0">( Dr. Darren Elder )</p>
                                                    <span className="text-muted">Signature</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="submit-section">
                                                <button type="submit" className="btn btn-primary submit-btn">Save
                                                </button>
                                                <button type="reset" className="btn btn-secondary submit-btn">Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}


export default AddPrescription