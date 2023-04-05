

import {Dialog, DialogContent, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {CloseOutlined} from "@mui/icons-material";


export default function DelInvoice({dialog, setDialog}) {
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
                    <div className="modal-header border-bottom-0 justify-content-end">
                        <IconButton onClick={()=>setDialog(false)} type="button" className="close-btn text-danger" data-bs-dismiss="modal" aria-label="Close">
                            <CloseOutlined/>
                        </IconButton>
                    </div>
                    <div className="modal-body">
                        <div className="delete-wrap text-center">
                            <div className="del-icon"><i className="feather-x-circle"></i></div>
                            <h2>Sure you Want to delete</h2>
                            <p>“Invoice Report”</p>
                            <div className="submit-section">
                                <Link to={'/merchant/purchase'} className="btn btn-success me-2">Yes</Link>
                                <a href="#" onClick={()=>setDialog(false)} className="btn btn-danger" data-bs-dismiss="modal">No</a>
                            </div>
                        </div>
                    </div>
                </div>

            </DialogContent>

        </Dialog>
    )
}