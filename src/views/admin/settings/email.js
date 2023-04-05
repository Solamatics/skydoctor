
export default function Email(){
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title">PHP Mail</h5>
                            <div className="status-toggle d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="status_1" className="check"/>
                                    <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group form-placeholder">
                                    <label>Email From Address <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Email Password <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Emails From Name <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Submit</button>
                                        <button type="submit" className="btn btn-grey">Cancel</button>
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
                            <h5 className="card-title">SMTP</h5>
                            <div className="status-toggle d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="status_2" className="check" checked=""/>
                                    <label htmlFor="status_2" className="checktoggle">checkbox</label>
                            </div>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group form-placeholder">
                                    <label>Email From Address <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Email Password <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Email Host <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group form-placeholder">
                                    <label>Email Port <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Submit</button>
                                        <button type="submit" className="btn btn-grey">Cancel</button>
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