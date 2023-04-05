import {Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";


export default function EditStockDialog({dialog, setDialog}) {
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
                        <h3 className="mb-0">Edit Outstock</h3>
                        <IconButton onClick={() => setDialog(false)} type="button" className="close-btn text-danger"
                                    data-bs-dismiss="modal" aria-label="Close">
                            <CloseOutlined/>
                        </IconButton>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row form-row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Outstock</label>
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