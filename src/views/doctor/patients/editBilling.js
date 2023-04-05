import {Link} from "react-router-dom";
import {useState} from "react";
import {DeleteForeverOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";


const EditBilling = () => {

    const [details, setDetails] = useState([
        {title: 'Consulting Fee', amount: '$ 330'},
        {title: 'Video Calling Appointment', amount: '$200'},
    ])

    const addMore = () => {
        const bill = {title: '', amount: ''}
        return setDetails(prevState => [...prevState, {...bill}])
    }

    const deleteBill = (element) => {

        return setDetails(prevState => prevState.filter(item => item !== element))

    }

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                        <div className="card widget-profile pat-widget-profile">
                            <div className="card-body">
                                <div className="pro-widget-content">
                                    <div className="profile-info-widget">
                                        <Link to={'/doctor/patient-details'} className="booking-doc-img">
                                            <img src={require("../../../assets/img/patients/patient.jpg")}
                                                 alt="User Image"/>
                                        </Link>
                                        <div className="profile-det-info">
                                            <h3><Link to={'/doctor/patient-details'}>Richard Wilson</Link></h3>
                                            <div className="patient-details">
                                                <h5><b>Patient ID :</b> PT0016</h5>
                                                <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork,
                                                    USA</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="patient-info" style={{justifyContent: 'start', textAlign: 'left'}}>
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
                                <h4 className="card-title mb-0">Add Billing</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="biller-info">
                                            <h4 className="d-block">Dr. Darren Elder</h4>
                                            <span className="d-block text-sm text-muted">Dentist</span>
                                            <span className="d-block text-sm text-muted">Newyork, United States</span>
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
                                    <a href="javascript:void(0);" onClick={()=>addMore()}><i className="fas fa-plus-circle"></i> Add Item</a>
                                </div>


                                <div className="card card-table">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-center">
                                                <thead>
                                                <tr>
                                                    <th style={{minWidth: '200px'}}>Title</th>
                                                    <th style={{minWidth: '200px'}}>Amount</th>
                                                    <th style={{width: "80px"}}></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    details.map((item,index)=>(
                                                        <tr key={index}>
                                                            <td>
                                                                <input type="text" value={item.title} className="form-control"/>
                                                            </td>
                                                            <td>
                                                                <input value={item.amount} type="text" className="form-control"/>
                                                            </td>

                                                            {
                                                                index!== 0 &&   <td >
                                                                    <IconButton onClick={()=>deleteBill(item)}  className="btn bg-danger-light trash">
                                                                        <DeleteForeverOutlined />
                                                                    </IconButton>
                                                                </td>
                                                            }

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
                                            <button type="submit" className="btn btn-primary submit-btn">Save</button>
                                            <button type="reset" className="btn btn-secondary submit-btn">Clear</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default EditBilling