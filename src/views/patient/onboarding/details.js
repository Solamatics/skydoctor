import {Grid} from "@mui/material";
import {useState} from "react";


export default function Details({updatePage, userDetails}){
    const [gender, setGender] = useState('')
    const [isPreg, setPreg] = useState(false)
    return (
        <div className="onboarding-content-box content-wrap">
            <div className="onboarding-title">
                <h2>What are your personal details? <span>*</span></h2>
                <h6>Please provide your personal information</h6>
            </div>
            <div className="patient-details-form">
                <div className="login-header">
                    <form id="personal_details" encType="multipart/form-data">
                        <div className="form-group">
                            <div className="row select-gender-option">
                                <div className="col-6">
                                    <div className="option-set">
                                        <input onChange={({target})=>setGender(target.value)} style={{width:'100%'}} type="radio" id="test1" name="gender" value="Male"/>
                                        <label htmlFor="test1">
                                            <span><i className="fas fa-mars"></i> Male</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <input onChange={({target})=>setGender(target.value)} style={{width:'100%'}} type="radio" id="test2" name="gender" value="Female"/>
                                    <label htmlFor="test2">
                                        <span><i className="fas fa-venus"></i> Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <Grid container spacing={3} className="row" rowSpacing={1}>
                            <Grid item xs={12} sm={9} md={9} lg={9} className="col-lg-9">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Your Weight<span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating"  required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3} lg={3} className="col-lg-3">
                                <div className="form-group">
                                    <select style={{width:'100%',height:'50px',padding:'3px 10px'}} className="select">
                                        <option selected>KG</option>
                                        <option>LBS</option>
                                    </select>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={9} md={9} lg={9} className="col-lg-9">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Your Height<span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3} lg={3} className="col-lg-3">
                                <div className="form-group">
                                    <select style={{width:'100%',height:'50px',padding:'3px 10px'}} className="select">
                                        <option selected>CM</option>
                                        <option>FEET</option>
                                        <option>INCH</option>
                                    </select>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="col-lg-12">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Age<span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="col-lg-12">
                                <div className="form-group">
                                    <select style={{width:'100%',height:'50px',padding:'3px 10px'}} className="select">
                                        <option disabled selected>Blood Type</option>
                                        <option>O+ve</option>
                                        <option>O-ve</option>
                                        <option>B+ve</option>
                                        <option>B-ve</option>
                                    </select>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="col-lg-12">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Heart Rate<span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="col-lg-12">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Blood Pressure <span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="col-lg-12">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Glucose Level <span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="col-lg-12">
                                <div className="form-group">
                                    <div className="passcode-wrap input-placeholder form-focus">
                                        <label className="focus-label">Allergies <span>*</span></label>
                                        <input style={{width:'100%'}} type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={9} md={12} lg={12} className="col-lg-12" >
                                <div className="form-group" style={{display: gender==='Female' ?'block':'none'}}>
                                    <div className="pregnant-col pt-4">
                                        <div>
                                            <div
                                                className="remember-me-col d-flex justify-content-between align-items-center">
                                                <span className="mt-1">Are you Pregnant</span>
                                                <label className="custom_check">
                                                    <input  onChange={(e)=>setPreg(e.target.value)} style={{width:'100%'}} type="checkbox" className="" id="is_registered"
                                                           name="pregnant" value="1"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-process-col mt-4">
                                        <div className="form-group" id="preg_div" style={{display: isPreg ?'block':'none'}}>
                                            <select style={{width:'100%',height:'50px',padding:'3px 10px'}} className=" select form-control" id="preg_term"
                                                    name="preg_term" tabIndex="-1" aria-hidden="true">
                                                <option selected="" value="">Select Your Pregnancy
                                                    Month
                                                </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="checklist-col">
                                            <div
                                                className="remember-me-col d-flex justify-content-between align-items-center">
                                                <span className="mt-1">Do you have any pre-exisiting conditions?</span>
                                                <label className="custom_check">
                                                    <input style={{width:'100%'}} type="checkbox" className="" name="cancer"
                                                           id="cancer" onClick="show_cancer()"
                                                           value="1"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="remember-me-col" id="cancer_div"
                                                 style={{display:'none'}}>
                                                <div className="condition_input">
                                                    <input style={{width:'100%'}} type="text" id="conditions"
                                                           name="conditions[]" className="form-control"
                                                           placeholder=""/>
                                                </div>
                                                <a href="javascript:void(0);" className="add_condition"><i
                                                    className="fa fa-plus"></i></a>
                                            </div>
                                            <div
                                                className="remember-me-col d-flex justify-content-between align-items-center">
                                                <span className="mt-1">Are you currently taking any medication</span>
                                                <label className="custom_check">
                                                    <input style={{width:'100%'}} type="checkbox" className="" name="medicine"
                                                           id="medicine" onClick="show_medicine()"
                                                           value="1"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="remember-me-col" id="medicine_div"
                                                 style={{display:'none'}}>
                                                <div className="medicine_input">
                                                    <input style={{width:'100%'}} type="text" id="medicine_name"
                                                           name="medicine_name[]" value=""
                                                           className="form-control"
                                                           placeholder="Enter medicine_name"/>
                                                    <input style={{width:'100%'}} type="text" value="" id="dosage"
                                                           name="dosage[]" className="form-control"
                                                           placeholder="Enter dosage"/>
                                                </div>
                                                <a href="javascript:void(0);" className="add_medicine"><i
                                                    className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </div>
            <div className="onboarding-btn">
                <a onClick={() => updatePage(4)}
                   style={{color: 'white!important', cursor: 'pointer'}}
                >Continue</a>
            </div>
        </div>
    )
}