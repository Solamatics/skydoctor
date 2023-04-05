export default function Overview() {
    return (
        <div>
            <h4 className="mb-3">Overview</h4>
            <div className="row">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-primary">
                    <i className="feather-dollar-sign"></i>
                    </span>
                                <div className="dash-count">
                                    <h5 className="dash-title">Sales Today</h5>
                                    <div className="dash-counts">
                                        <p>$50.00</p>
                                    </div>
                                </div>
                            </div>
                            <p className="trade-level mb-0"><span className="text-danger me-1"><i
                                className="fas fa-caret-down me-1"></i>2.05%</span> last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-blue">
                                    <i className="feather-credit-card"></i>
                                    </span>
                                <div className="dash-count">
                                    <h5 className="dash-title">Expense Today</h5>
                                    <div className="dash-counts">
                                        <p>$5.22</p>
                                    </div>
                                </div>
                            </div>
                            <p className="trade-level mb-0"><span className="text-success me-1"><i
                                className="fas fa-caret-up me-1"></i>4.5%</span> last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="dash-widget-header">
                                <span className="dash-widget-icon bg-warning">
                                <i className="feather-folder-plus"></i>
                                </span>
                                <div className="dash-count">
                                    <h5 className="dash-title">Medicine</h5>
                                    <div className="dash-counts">
                                        <p>485</p>
                                    </div>
                                </div>
                            </div>
                            <p className="trade-level mb-0"><span className="text-success me-1"><i
                                className="fas fa-caret-up me-1"></i>9.65%</span> last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="dash-widget-header">
                                <span className="dash-widget-icon bg-danger">
                                <i className="feather-users"></i>
                                </span>
                                <div className="dash-count">
                                    <h5 className="dash-title">Staff</h5>
                                    <div className="dash-counts">
                                        <p>50</p>
                                    </div>
                                </div>
                            </div>
                            <p className="trade-level mb-0"><span className="text-danger me-1"><i
                                className="fas fa-caret-up me-1"></i>40.5%</span> last week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}