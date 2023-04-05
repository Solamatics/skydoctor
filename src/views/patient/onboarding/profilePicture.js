export default function ProfilePicture({updatePage,userDetails}) {
    return (

        <div className="onboarding-content-box">
            <div className="onboarding-title profile-title">
                <h2>Upload Profile Picture</h2>
                <h6>Add a profile photo</h6>
            </div>
            <div className="onboarding-content passcode-wrap mail-box">
                <div className="onboarding-contents">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group onboarding-contents">
                                <div className="upload-pic patient-photo-upload">
                                    <img src={require("../../../assets/img/icons/up-cam.png")} alt="img" id="blah"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="upload-patient-pic">
                                <div className="upload-patient-btn">
                                    <a className="pic-upload-btn"  style={{color:'#2E3842'}}><i className="fas fa-upload me-2"></i>Upload
                                        images</a>
                                    <input type="file" id="imgInp"/>
                                </div>
                                <div>
                                    <a className="pic-upload-btn" style={{color:'#2E3842'}}><i className="fas fa-camera me-2"></i>Take a photo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="uploads-report">
                                <a href="#" className="text-success" ><i className="fas fa-check-double me-2"></i>Uploaded
                                    Successfully</a>
                                <a href="#" className="text-danger"><i className="far fa-times-circle me-2"></i>Upload
                                    Failed</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="onboarding-btn Personalize-btn" >
                    <a onClick={() => updatePage(3)}
                       style={{color: 'white!important', cursor: 'pointer'}}
                    >Continue</a>
                </div>
            </div>
        </div>

    )
}