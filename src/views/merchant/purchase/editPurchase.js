export default function EditPurchase() {
    return (
        <div className="content container-fluid">

            <div className="row">
                <div className="col-md-8">
                    <h5 className="mb-3">Edit Purchase</h5>
                    <form method="post" className="supplier-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <input type="text" className="form-control floating"/>
                                        <label className="focus-label">Medicine Name <span
                                            className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-focus form-group">
                                    <select className="form-control select" name="category" required="">
                                        <option value="1">Category</option>
                                        <option value="2">Injuries</option>
                                        <option value="3">Cancer</option>
                                        <option value="4">Animal diseases</option>
                                        <option value="5">Growth disorders</option>
                                        <option value="6">Rare diseases</option>
                                        <option value="7">Neoplasms</option>
                                        <option value="8">Inflammations</option>
                                        <option value="9">Sleep disorders</option>
                                        <option value="10">Infectious diseases</option>
                                        <option value="11">Phytopathology</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <input type="text" className="form-control floating"/>
                                        <label className="focus-label">Price <span
                                            className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <input type="text" className="form-control floating"/>
                                        <label className="focus-label">Quantity <span
                                            className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <input type="text" className="form-control floating"/>
                                        <label className="focus-label">Expire Date <span
                                            className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="change-photo-btn  bg-grey" style={{width:'100%'}}>
                                        <div>
                                            <i className="feather-upload"></i>
                                            <p>Upload File</p>
                                        </div>
                                        <input type="file" className="upload"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <br/>
                                <button type="submit" className="btn btn-primary save-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}