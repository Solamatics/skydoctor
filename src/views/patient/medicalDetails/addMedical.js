import {Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";

export default function AddMedical({dialog,setDialog}){

    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'xs'}
            fullWidth
        >
            <DialogContent>

                <div className="modal-content">
                    <form action="#" encType="multipart/form-data" autoComplete="off" method="post">
                        <div className="modal-header">
                            <h5 className="modal-title">Add new data</h5>
                            <IconButton onClick={()=>setDialog(false)} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <CloseOutlined/>
                            </IconButton>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" value="" name="id"/>
                                <input type="hidden" value="insert" name="method"/>
                                    <div className="form-group">
                                        <label className="control-label mb-10"> BMI <span
                                            className="text-danger">*</span></label>
                                        <input type="text" name="bmi" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label mb-10">Heart rate </label>
                                        <input type="text" name="hr" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label mb-10">Weight</label>
                                        <input type="text" name="Weight" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label mb-10">Fbc</label>
                                        <input type="text" id="Fbc" name="Fbc" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label mb-10">Created Date </label>
                                        <input type="text" name="dob" id="dob" value="" readOnly=""
                                               className="form-control"/>
                                    </div>
                        </div>
                        <div className="modal-footer text-center">
                            <button type="submit" className="btn btn-outline btn-success ">Submit</button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}