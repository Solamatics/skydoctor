import { useState } from "react";
import { routes } from "./routes";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Collapse,
  Link,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Sidebar({ location, toggleNav, mobileNav }) {
  const [dropdown, setDropdown] = useState({
    communication: false,
    transaction: false,
    company: false,
    setting: false,
  });
  const dropdownHandler = (prop) => () =>
    setDropdown((prev) => (prev = { ...dropdown, [prop]: !prev[prop] }));

  let navigate = useNavigate();

  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <a href="#" className="booking-doc-img">
            <img
              src={require("../../assets/img/patients/patient.jpg")}
              alt="User Image"
            />
          </a>
          <div className="profile-det-info">
            <h3>Richard Wilson</h3>
            <div className="patient-details">
              <h5>
                <i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years
              </h5>
              <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i> Newyork, USA
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <Link passHref>
            {routes.map((item, index) => (
              <div key={index}>
                <ListItemButton onClick={dropdownHandler(item.name)}>
                  <ListItemText
                    primary={item.title}
                    sx={{ color: "black", "&:hover": { color: "black" } }}
                  />
                  {item.subMenu ? (
                    dropdown.communication ||
                    dropdown.transaction ||
                    dropdown.company ||
                    dropdown.setting ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  ) : null}
                </ListItemButton>
                <Divider sx={{ width: "100%" }} />
                {item.subMenu &&
                  item.subMenu.map((menu, index) => (
                    <div key={index}>
                      <Collapse
                        in={
                          item.name === "communication"
                            ? dropdown.communication
                            : item.name === "transaction"
                            ? dropdown.transaction
                            : item.name === "company"
                            ? dropdown.company
                            : item.name === "setting"
                            ? dropdown.setting
                            : null
                        }
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => {
                              navigate.push(menu.route);
                            }}
                          >
                            <ListItemText
                              sx={{ color: "black" }}
                              primary={menu.title}
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                  ))}
              </div>
            ))}
          </Link>
        </nav>
      </div>
    </div>
  );
}
