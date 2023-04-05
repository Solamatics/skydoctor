
export  default function Seo(){
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header">
                            <h5 className="card-title">SEO Settings</h5>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group form-placeholder">
                                    <label>Meta Title <span className="star-red">*</span></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Meta Keywords <span className="star-red">*</span></label>
                                    <input type="text" data-role="tagsinput" className="input-tags form-control"
                                           placeholder="Meta Keywords" name="services" value="Lorem,Ipsum"
                                           id="services"/>
                                </div>
                                <div className="form-group">
                                    <label>Meta Description <span className="star-red">*</span></label>
                                    <textarea className="form-control"></textarea>
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