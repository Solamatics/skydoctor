export default function Profile() {
    return (
        <div className="content container-fluid">

            <div className="row">
                <div className="col-md-8 col-lg-8 col-xl-6">
                    <div className="profile-info">
                        <h4>Profile</h4>
                        <div className="profile-list">
                            <div className="profile-detail">
                                <label className="avatar profile-cover-avatar">
                                    <img className="avatar-img" src={require("../../../assets/img/profiles/avatar-02.jpg")}
                                         alt="Profile Image"/>
                                </label>
                                <div className="pro-name">
                                    <p>@ Johnson223</p>
                                    <h4>Johnson Samuel</h4>
                                </div>
                                <a href="#" className="edit-pro"><i className="feather-edit"></i> Edit</a>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h6 className="pro-title">Personal Information</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis adipiscing arcu
                                        praesent tellus aliquam quam volutpat. Etiam tincidunt habitant sit maecenas
                                        feugiat eget convallis. Aliquam non viverra accumsan vulputate id aliquam et
                                        enim vivamus. </p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Date of Birth</h5>
                                    <p>15/12/2022</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Gender</h5>
                                    <p>Male</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Age</h5>
                                    <p>46</p>
                                </div>
                                <div className="col-md-12">
                                    <h6 className="pro-title">Address & Location</h6>
                                </div>
                                <div className="col-md-4">
                                    <h5>Address</h5>
                                    <p>4663 Agriculture Lane, Miami,</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>Country</h5>
                                    <p>United States</p>
                                </div>
                                <div className="col-md-4">
                                    <h5>State</h5>
                                    <p>Florida</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile-list">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pro-title d-flex justify-content-between">
                                        <h6>Account Information</h6>
                                        <a href="#" className="edit-pro"><i className="feather-edit"></i> Edit</a>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h5>Email Address</h5>
                                    <p><a href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                          className="__cf_email__"
                                          data-cfemail="0d6762657e62637e6c607868613f3d3f3e4d6a606c6461236e6260">[email&#160;protected]</a>
                                    </p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h5>Phone Number</h5>
                                    <p>+1 534883 487843</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}