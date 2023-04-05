import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";



import Drawer from "@mui/material/Drawer";
import {Icon, List, ListItem, ListItemIcon} from "@mui/material";
import {routes} from "./routes";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import {useEffect, useState} from "react";



export  default  function MobileSidebar({window, mobileNav, toggleNav, location}) {
    const drawerWidth = 280;



    const drawer = (
        <div className="">
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
                                <li key={index} className={item.route=== `/patient/${location}` ? "active":''}>
                                    <Link to={item.route} onClick={()=>toggleNav(false)}>
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
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileNav}
                onClose={() => toggleNav()}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}