import {Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";


export default function EditDependent({dialog,setDialog}){
    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'sm'}
            fullWidth>
            <DialogContent sx={{ my:3}}>
                <div className="modal-content">
                    <form action="#" encType="multipart/form-data" autoComplete="off" method="post">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit member</h5>
                            <IconButton onClick={()=>setDialog(false)} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <CloseOutlined/>
                            </IconButton>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="control-label mb-10"> Name <span
                                    className="text-danger">*</span></label>
                                <input type="text" name="name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label mb-10">Relationship </label>
                                <input type="text" name="relationship" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label mb-10">Gender </label>
                                <select className="form-select form-control" name="gender">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="control-label mb-10">DOB </label>
                                <input type="date" name="dob" id="dob" value="" readOnly="" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label mb-10">Photo </label>
                                <input type="file" name="profile_image" className="form-control"/>
                            </div>
                        </div>
                        <div className="modal-footer text-center">
                            <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}