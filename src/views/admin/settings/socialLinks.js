

export default function SocialLinks(){
    return (
        <div className="row">
            <div className="col-lg-6 col-md-8">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header">
                            <h5 className="card-title">Social Link Settings</h5>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="links-info">
                                    <div className="row form-row links-cont">
                                        <div className="col-12 col-md-11">
                                            <div className="form-group form-placeholder d-flex">
                                                <button className="btn social-icon">
                                                    <i className="feather-facebook"></i>
                                                </button>
                                                <input type="text" className="form-control"
                                                       placeholder="https://www.facebook.com/"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-1">
                                            <a href="#" className="btn trash">
                                                <i className="feather-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="links-info">
                                    <div className="row form-row links-cont">
                                        <div className="col-12 col-md-11">
                                            <div className="form-group form-placeholder d-flex">
                                                <button className="btn social-icon">
                                                    <i className="feather-twitter"></i>
                                                </button>
                                                <input type="text" className="form-control"
                                                       placeholder="https://www.twitter.com/"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-1">
                                            <a href="#" className="btn trash">
                                                <i className="feather-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="links-info">
                                    <div className="row form-row links-cont">
                                        <div className="col-12 col-md-11">
                                            <div className="form-group form-placeholder d-flex">
                                                <button className="btn social-icon">
                                                    <i className="feather-youtube"></i>
                                                </button>
                                                <input type="text" className="form-control"
                                                       placeholder="https://www.youtube.com/"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-1">
                                            <a href="#" className="btn trash">
                                                <i className="feather-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="links-info">
                                    <div className="row form-row links-cont">
                                        <div className="col-12 col-md-11">
                                            <div className="form-group form-placeholder d-flex">
                                                <button className="btn social-icon">
                                                    <i className="feather-linkedin"></i>
                                                </button>
                                                <input type="text" className="form-control"
                                                       placeholder="https://www.linkedin.com/"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-1">
                                            <a href="#" className="btn trash">
                                                <i className="feather-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <a href="javascript:void(0);" className="btn add-links">
                                    <i className="fas fa-plus me-1"></i> Add More
                                </a>
                            </div>
                            <div className="form-group mb-0">
                                <div className="settings-btns">
                                    <button type="submit" className="btn btn-orange">Submit</button>
                                    <button type="submit" className="btn btn-grey">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}