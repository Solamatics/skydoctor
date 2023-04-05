import {AppBar} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import {Link} from "react-router-dom";

export default function TopBar({setNav, mobileNav}) {
    let drawerWidth = 280;
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: '#F8F8F8',
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >

            <div className="header">

                <div className="header-left">
                    <Link to={'/merchant/dashboard'} className="logo">
                        <img src={require("../../assets/img/logo.png")} alt="Logo"/>
                    </Link>
                    <Link to={'/merchant/dashboard'} className="logo logo-small">
                        <img src={require("../../assets/img/logo.png")} alt="Logo" width="30" height="30"/>
                    </Link>
                    <a href="javascript:void(0);" id="toggle_btn">
                        <i className="feather-chevrons-left"></i>
                    </a>
                </div>


                <div className="top-nav-search">
                    <div className="main">
                        <form className="search" method="post"
                              action="">
                            <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                            <input type="text" className="form-control" placeholder="Search here..."/>
                        </form>
                    </div>
                </div>


                <a onClick={() => setNav(!mobileNav)} className="mobile_btn" id="mobile_btn">
                    <i className="fas fa-bars"></i>
                </a>


                <ul className="nav nav-tabs user-menu">

                    <li className="nav-item">
                        <a href="#" id="dark-mode-toggle" className="dark-mode-toggle">
                            <i className="feather-sun light-mode"></i><i className="feather-moon dark-mode"></i>
                        </a>
                    </li>


                    <li className="nav-item dropdown noti-nav">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <i className="feather-bell"></i> <span className="badge"></span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    {
                                        [1, 2, 3, 4].map((item, index) => (
                                            <li key={index} className="notification-message">
                                                <a href="#">
                                                    <div className="media d-flex">
                                                            <span className="avatar">
                                                            <img className="avatar-img" alt="" src={require("../../assets/img/profiles/avatar-02.jpg")}/>
                                                            </span>
                                                        <div className="media-body">
                                                            <h6>Travis Tremble <span className="notification-time">18.30 PM</span>
                                                            </h6>
                                                            <p className="noti-details">Sent a amount of $210 for his
                                                                Appointment <span
                                                                    className="noti-title">Dr.Ruby perin </span></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        ))
                                    }


                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#">View all Notifications</a>
                            </div>
                        </div>
                    </li>


                    <li className="nav-item dropdown main-drop">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span className="user-img">
                        <img src={require("../../assets/img/profiles/avatar-01.jpg")} alt=""/>
                        <span className="status online"></span>
                        </span>
                        </a>
                        <div className="dropdown-menu ">
                            <div className="user-header">
                                <div className="avatar avatar-sm">
                                    <img src={require("../../assets/img/profiles/avatar-01.jpg")} alt="User Image"
                                         className="avatar-img rounded-circle"/>
                                </div>
                                <div className="user-text">
                                    <h6>Robert Haddin</h6>
                                    <p className="text-muted mb-0">Administrator</p>
                                </div>
                            </div>
                            <Link className="dropdown-item" to={'/merchant/profile'}><i
                                className="feather-user me-1"></i> My
                                Profile</Link>
                            <Link className="dropdown-item" to={"/merchant/settings"}><i
                                className="feather-sliders me-1"></i>Settings</Link>
                            <hr className="my-0 ms-2 me-2"/>
                            <Link className="dropdown-item" to={"/merchant/dashboard"}><i
                                className="feather-log-out me-1"></i> Logout</Link>
                        </div>
                    </li>

                </ul>

            </div>
        </AppBar>

    )
}