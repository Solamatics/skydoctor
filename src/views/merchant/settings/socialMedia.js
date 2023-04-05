
export  default function SocialMedia(){
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title">Google Login Credential</h5>
                            <div className="status-toggle d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="status_1" className="check" checked=""/>
                                    <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group form-placeholder">
                                    <label>Client ID <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Client Secret <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title">Facebook</h5>
                            <div className="status-toggle d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="status_2" className="check" checked=""/>
                                    <label htmlFor="status_2" className="checktoggle">checkbox</label>
                            </div>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group form-placeholder">
                                    <label>App ID <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>App Secret <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title">Twiter Login Credential</h5>
                            <div className="status-toggle d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="status_3" className="check"/>
                                    <label htmlFor="status_3" className="checktoggle">checkbox</label>
                            </div>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group form-placeholder">
                                    <label>Client ID <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Client Secret <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}