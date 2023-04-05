import {Link} from "react-router-dom";

export default function VideoCall() {
    return (
        <div className="content">
            <div className="container-fluid">

                <div className="call-wrapper">
                    <div className="call-main-row">
                        <div className="call-main-wrapper">
                            <div className="call-view">
                                <div className="call-window">

                                    <div className="fixed-header">
                                        <div className="navbar">
                                            <div className="user-details">
                                                <div className="float-start user-img">
                                                    <Link to={'/doctor/patient-details'}
                                                          className="avatar avatar-sm me-2"
                                                          title="Charlene Reed">
                                                        <img src={require("../../../assets/img/patients/patient1.jpg")} alt="User Image"
                                                             className="rounded-circle"/>
                                                        <span className="status online"></span>
                                                    </Link>
                                                </div>
                                                <div className="user-info float-start">
                                                    <Link to={'/doctor/patient-details'}><span>Charlene Reed</span></Link>
                                                    <span className="last-seen">Online</span>
                                                </div>
                                            </div>
                                            <ul className="nav float-end custom-menu">
                                                <li className="nav-item dropdown dropdown-action">
                                                    <a href="#" className="nav-link dropdown-toggle"
                                                       data-bs-toggle="dropdown"
                                                       aria-expanded="false"><i className="fa fa-cog"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="javascript:void(0)"
                                                           className="dropdown-item">Settings</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="call-contents">
                                        <div className="call-content-wrap">
                                            <div className="user-video">
                                                <img src={require("../../../assets/img/video-call.jpg")} alt="User Image"/>
                                            </div>
                                            <div className="my-video">
                                                <ul>
                                                    <li>
                                                        <img src={require("../../../assets/img/patients/patient1.jpg")}
                                                             className="img-fluid"
                                                             alt="User Image"/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="call-footer">
                                        <div className="call-icons">
                                            <span className="call-duration">00:59</span>
                                            <ul className="call-items">
                                                <li className="call-item">
                                                    <a href="#" title="Enable Video" data-placement="top"
                                                       data-bs-toggle="tooltip">
                                                        <i className="fas fa-video camera"></i>
                                                    </a>
                                                </li>
                                                <li className="call-item">
                                                    <a href="#" title="Mute Audio" data-placement="top"
                                                       data-bs-toggle="tooltip">
                                                        <i className="fa fa-microphone microphone"></i>
                                                    </a>
                                                </li>
                                                <li className="call-item">
                                                    <a href="#" title="Add User" data-placement="top"
                                                       data-bs-toggle="tooltip">
                                                        <i className="fa fa-user-plus"></i>
                                                    </a>
                                                </li>
                                                <li className="call-item">
                                                    <a href="#" title="Full Screen" data-placement="top"
                                                       data-bs-toggle="tooltip">
                                                        <i className="fas fa-arrows-alt-v full-screen"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="end-call">
                                                <a href="javascript:void(0);">
                                                    <i className="material-icons">call_end</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}