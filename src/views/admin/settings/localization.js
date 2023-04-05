
export default function Localization(){
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body pt-0">
                        <div className="card-header">
                            <h5 className="card-title">Localization Details</h5>
                        </div>
                        <form>
                            <div className="settings-form">
                                <div className="form-group">
                                    <label>Time Zone</label>
                                    <select className="select form-control">
                                        <option selected="selected">(UTC +5:30) Antarctica/Palmer</option>
                                        <option>(UTC+05:30) India</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Date Format</label>
                                    <select className="select form-control">
                                        <option selected="selected">15 May 2016</option>
                                        <option>15/05/2016</option>
                                        <option>15.05.2016</option>
                                        <option>15-05-2016</option>
                                        <option>05/15/2016</option>
                                        <option>2016/05/15</option>
                                        <option>2016-05-15</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Time Format</label>
                                    <select className="select form-control">
                                        <option selected="selected">12 Hours</option>
                                        <option>24 Hours</option>
                                        <option>36 Hours</option>
                                        <option>48 Hours</option>
                                        <option>60 Hours</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Currency Symbol</label>
                                    <select className="select form-control">
                                        <option selected="selected">$</option>
                                        <option>₹</option>
                                        <option>£</option>
                                        <option>€</option>
                                    </select>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="settings-btns">
                                        <button type="submit" className="btn btn-orange">Update</button>
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