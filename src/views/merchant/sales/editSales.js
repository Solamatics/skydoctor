import {CloseOutlined} from "@mui/icons-material";
import {Dialog, DialogContent, IconButton} from "@mui/material";


export default function EditSales({dialog, setDialog}) {
    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'xs'}
            fullWidth>
            <DialogContent sx={{}}>
                <div className=" doctor-profile">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Invoice Report</h5>
                        <IconButton onClick={()=>setDialog(false)} type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
                            <CloseOutlined/>
                        </IconButton>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Invoice Number</label>
                                        <input type="text" className="form-control" value="20169998"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Medicine Name</label>
                                        <input type="text" className="form-control" value="Abilify"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Total Amount</label>
                                        <input type="text" className="form-control" value="$150.00"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Created Date</label>
                                        <input type="text" className="form-control" value="14-5-2020"/>
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