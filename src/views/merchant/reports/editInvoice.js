import {CloseOutlined} from "@mui/icons-material";
import {Dialog, DialogContent, IconButton} from "@mui/material";


export default function EditInvoice({dialog, setDialog}) {
    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'sm'}
            fullWidth>
            <DialogContent sx={{}}>
                <div className=" doctor-profile">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Invoice Report</h5>
                        <IconButton onClick={() => setDialog(false)} type="button" className="close-btn"
                                    data-bs-dismiss="modal" aria-label="Close">
                            <CloseOutlined/>
                        </IconButton>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row form-row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Invoice Number</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Medicine Image</label>
                                        <div className="custom-file" id="customFile2">
                                            <label className="custom-file-upload">
                                                <input type="file" id="site_logo1" name="site_logo1"/>
                                                <span className="file-upload-text"></span>
                                                <span className="change-user">Choose File</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Medicine Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Total Amount</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Status <span className="text-danger">*</span></label>
                                        <select className="form-select form-control" name="category" required="">
                                            <option value="1" selected="selected">Paid</option>
                                            <option value="2">Unpaid</option>
                                            <option value="3">Pending</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Created Date</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Save Changes</button>
                        </form>
                    </div>
                </div>

            </DialogContent>
        </Dialog>


    )

}