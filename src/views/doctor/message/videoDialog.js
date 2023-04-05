import {Dialog, DialogContent} from "@mui/material";


export  default function VideoDialog({dialog,setDialog}){


    return (
        <Dialog
            open={dialog}
            onClose={() => setDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'xs'}
            fullWidth>
            <DialogContent sx={{textAlign:'center', my:3}}>
                <div className="call-box incoming-box">
                    <div className="call-wrapper">
                        <div className="call-inner">
                            <div className="call-user">
                                <img alt="User Image" src={require("../../../assets/img/patients/patient.jpg")} className="call-avatar" />
                                    <h4>Richard Wilson</h4>
                                    <span>Calling ...</span>
                            </div>
                            <div className="call-items">
                                <a href="javascript:void(0);"  onClick={()=>setDialog(false)} className="btn call-item call-end" data-bs-dismiss="modal"
                                   aria-label="Close"><i className="material-icons">call_end</i></a>
                                <a href="video-call.html" className="btn call-item call-start"><i
                                    className="material-icons">videocam</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}