import {Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined, CloseSharp} from "@mui/icons-material";


const MedicalDialog = ({dialog,setDialog}) =>{
    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'sm'}
            fullWidth>
            <DialogContent sx={{ my:1}}>
                <div className="modal-header">
                    <h3 className="modal-title">Medical Records</h3>
                    <IconButton
                        onClick={()=>setDialog(false)}><span
                       >
                        <CloseOutlined/>
                    </span>
                    </IconButton>
                </div>
                <form>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control " value="31-10-2019"/>
                    </div>
                    <div className="form-group">
                        <label>Description ( Optional )</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Upload File</label>
                        <input type="file" className="form-control"/>
                    </div>
                    <div className="submit-section text-center">
                        <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                        <button onClick={()=>setDialog(false)} type="button" className="btn btn-secondary submit-btn" data-bs-dismiss="modal">Cancel
                        </button>
                    </div>
                </form>

            </DialogContent>
        </Dialog>
    )
}


export  default MedicalDialog