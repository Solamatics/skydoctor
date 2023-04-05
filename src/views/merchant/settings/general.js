
export default function General(){
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header">
                            <h5 className="card-title">Website Basic Details</h5>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group">
                                    <label>Website Name <span className="star-red">*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter Website Name"/>
                                </div>
                                <div className="form-group">
                                    <p className="settings-label">Logo <span className="star-red">*</span></p>
                                    <div className="settings-btn">
                                        <input type="file" accept="image/*" name="image" id="file"
                                               onChange="loadFile(event)" className="hide-input"/>
                                        <label htmlFor="file" className="upload">
                                            <i className="feather-upload"></i>
                                        </label>
                                    </div>
                                    <h6 className="settings-size">Recommended image size
                                        is <span>150px x 150px</span>
                                    </h6>
                                    <div className="upload-images">
                                        <img src={require("../../../assets/img/logo.png")} alt="Image"/>
                                        <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
                                            <i className="feather-x-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p className="settings-label">Favicon <span className="star-red">*</span></p>
                                    <div className="settings-btn">
                                        <input type="file" accept="image/*" name="image" id="file"
                                               onChange="loadFile(event)" className="hide-input"/>
                                        <label htmlFor="file" className="upload">
                                            <i className="feather-upload"></i>
                                        </label>
                                    </div>
                                    <h6 className="settings-size">
                                        Recommended image size is <span>16px x 16px or 32px x 32px</span>
                                    </h6>
                                    <h6 className="settings-size mt-1">Accepted formats: only png and ico</h6>
                                    <div className="upload-images upload-size">
                                        <img src={require("../../../assets/img/favicon.png")} alt="Image"/>
                                        <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
                                            <i className="feather-x-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="form-group">
                                            <div
                                                className="status-toggle d-flex justify-content-between align-items-center">
                                                <p className="mb-0">RTL</p>
                                                <input type="checkbox" id="status_1" className="check"/>
                                                <label htmlFor="status_1"
                                                       className="checktoggle">checkbox</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Update</button>
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
                        <div className="card-header">
                            <h5 className="card-title">Address Details</h5>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group">
                                    <label>Address Line 1 <span className="star-red">*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter Address Line 1"/>
                                </div>
                                <div className="form-group">
                                    <label>Address Line 2 <span className="star-red">*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter Address Line 2"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City <span className="star-red">*</span></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>State/Province <span className="star-red">*</span></label>
                                            <select className="select form-control">
                                                <option selected="selected">Select</option>
                                                <option>California</option>
                                                <option>Tasmania</option>
                                                <option>Auckland</option>
                                                <option>Marlborough</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Zip/Postal Code <span className="star-red">*</span></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Country <span className="star-red">*</span></label>
                                            <select className="select form-control">
                                                <option selected="selected">Select</option>
                                                <option>India</option>
                                                <option>London</option>
                                                <option>France</option>
                                                <option>USA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Update</button>
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