import {Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";


export default function AddRecord({dialog,setDialog}){
    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'md'}
            fullWidth
        >
            <DialogContent>
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Medical Records</h5>
                            <IconButton onClick={()=>setDialog(false)} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <CloseOutlined/>
                            </IconButton>
                        </div>
                        <form id="medical_records_form" encType="multipart/form-data">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Title Name</label>
                                            <input type="text" name="description" className="form-control"
                                                   placeholder="Enter Title Name"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Patient</label>
                                            <select className="form-select">
                                                <option>Myself</option>
                                                <option>Child_1</option>
                                                <option>Self</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Hospital Name</label>
                                            <input type="text" name="hospital" className="form-control"
                                                   placeholder="Enter name here.."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Upload</label>
                                            <div className="upload-medical-records">
                                                <input className="form-control" type="file" name="user_file"
                                                       id="user_files_mr"/>
                                                    <div className="upload-content dropzone">
                                                        <div className="text-center">
                                                            <div className="upload-icon mb-2"><img
                                                                src={require("../../../assets/img/upload-icon.png")} alt=""/>
                                                            </div>
                                                            <h5>Drag &amp; Drop</h5>
                                                            <h6>or <span className="text-danger">Browse</span></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Symptoms</label>
                                            <input type="text" data-role="tagsinput" className="input-tags form-control"
                                                   value="Fever, Fatigue" name="services" id="services"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <div className="form-group">
                                                <input type="date" className="form-control" name="tratment_date"
                                                       id="tratment_date"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <div className="submit-section text-center">
                                        <button type="submit" id="medical_btn"
                                                className="btn btn-primary submit-btn">Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>

        </Dialog>
    )
}