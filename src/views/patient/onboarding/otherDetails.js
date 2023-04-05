import {Link} from "react-router-dom";
import {Dialog, DialogContent} from "@mui/material";
import {useState} from "react";
import successTick from '../../../assets/img/icons/success-tick.svg'


export default function OtherDetails() {
    const [dialog, setDialog] = useState(false)
    return (
        <div className="onboarding-content-box content-wrap">
            <div className="onborad-set">
                <div className="onboarding-title">
                    <h2>Other Details<span>*</span></h2>
                    <h6>Please fill the details below</h6>
                </div>
                <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                        <form method="post">
                            <div className="col-lg-12">
                                <div className="form-group ">
                                    <div className="input-placeholder form-focus passcode-wrap">
                                        <label className="focus-label">Enter Address</label>
                                        <input type="text" className="form-control floating" required=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <select className="select">
                                        <option disabled selected>Select City</option>
                                        <option>New York</option>
                                        <option>Los Angeles</option>
                                        <option>Chicago</option>
                                        <option>Houston</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <select className="select">
                                        <option disabled selected>Select State</option>
                                        <option>Alaska</option>
                                        <option>California</option>
                                        <option>Hawaii</option>
                                        <option>Georgia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <select className="select">
                                        <option disabled selected>Select Country</option>
                                        <option>Argentina</option>
                                        <option>Brazil</option>
                                        <option>Chile</option>
                                        <option>Egypt</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group ">
                                    <div className="form-floating input-placeholder passcode-wrap">
                                                    <textarea className="form-control"
                                                              placeholder="Leave a comment here"
                                                              id="floatingTextarea2" style={{height: "135px"}}></textarea>
                                        <label htmlFor="floatingTextarea2">Other Information</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="onboarding-btn">
                <a onClick={() => setDialog(true)} style={{cursor:'pointer'}} data-bs-toggle="modal"
                   data-bs-target="#profile-completed">Continue</a>
            </div>

            <Dialog
                open={dialog}
                onClose={() => setDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'sm'}
                fullWidth
            >

                <DialogContent>
                    <div className="">
                        <div className="text-center " style={{border:'0!important'}}>
                            <div className="modal-header id-pop-header justify-content-center">
                                <img src={successTick} alt=""/>
                            </div>
                            <div className="modal-body id-pop-body text-center">
                                <h3>Thank you</h3>
                                <span> Mr.Dennis</span>
                                <p className="pb-0">your Account has been completed successfully</p>
                            </div>
                            <div className="modal-footer id-pop-footer text-center">
                                <div className="onboarding-btn pop-btn ">
                                    <Link to={'/patient/dashboard'}>Go to Dashboard</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>


        </div>
    )
}