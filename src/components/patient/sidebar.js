import {routes} from "./routes";
import {Link} from "react-router-dom";

export default function Sidebar({location, toggleNav, mobileNav}) {
    return (
        <div className="profile-sidebar">
            <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                        <img src={require("../../assets/img/patients/patient.jpg")} alt="User Image"/>
                    </a>
                    <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                            <h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                            <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-widget">
                <nav className="dashboard-menu">
                    <ul>
                        {
                            routes.map((item, index) => (
                                <li key={index} className={item.route=== location ? "active":''}>
                                    <Link to={item.route}>
                                        <i className={item.icon}></i>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
            </div>
        </div>
    )
}