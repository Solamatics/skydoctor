export default function EditProduct() {
    return (
        <div className="content container-fluid">

            <div className="row">
                <div className="col-md-8">
                    <h5 className="mb-3">Edit Product</h5>
                    <form method="post" className="supplier-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <input type="text" className="form-control floating"/>
                                        <label className="focus-label">Product Name <span
                                            className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-focus form-group">
                                    <select className="form-control select" name="category" required="">
                                        <option value="1">Category</option>
                                        <option value="2">Family Care</option>
                                        <option value="3">Cancer</option>
                                        <option value="4">Fitness & Wellness</option>
                                        <option value="5">Hair care</option>
                                        <option value="6">Skin care</option>
                                        <option value="7">Neoplasms</option>
                                        <option value="8">Women's Care</option>
                                        <option value="9">Sleep disorders</option>
                                        <option value="10">Baby care</option>
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
                                        <label className="focus-label">Discount <span
                                            className="text-danger">*</span></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group form-focus">
                                    <textarea rows={4}  className="form-control bg-grey floating" style={{height:'130px', resize:'none'}}></textarea>
                                    <label className="focus-label">Descriptions <span
                                        className="text-danger">*</span></label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group" style={{marginTop:'6em'}}>
                                    <div className="change-photo-btn floating  bg-grey" style={{width:'100%'}}>
                                        <div>
                                            <i className="feather-upload"></i>
                                            <p>Upload File</p>
                                        </div>
                                        <input type="file" className="upload"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary save-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}