import React, { useState } from "react";
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
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import GridViewIcon from "@mui/icons-material/GridView";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TocIcon from "@mui/icons-material/Toc";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LogoutIcon from "@mui/icons-material/Logout";

const icons = [
  <GridViewIcon />,
  <BookmarkIcon />,
  <PeopleIcon />,
  <ForumIcon />,
  <ContactPageIcon />,
  <TocIcon />,
  <ReceiptLongIcon />,
  <InfoIcon />,
  <SettingsIcon />,
  <SettingsSuggestIcon />,
  <LogoutIcon />,
];

export default function Sidebar({ location, toggleNav, mobileNav }) {
  const [dropdown, setDropdown] = useState({
    communication: false,
    transaction: false,
    company: false,
    setting: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  const handleListItemClick = (event, index, path) => {
    // event.preventDefault();
    setSelectedIndex(index);
    navigate(path);
    console.log(index);
  };

  const dropdownHandler = (prop) => () => {
    setDropdown((prev) => (prev = { ...dropdown, [prop]: !prev[prop] }));
  };

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
        <List
          component="nav"
          className="dashboard-menu"
          aria-label="main mailbox folders"
        >
          {routes.map((item, index) => (
            <div key={index}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) =>
                  handleListItemClick(event, index, item.route)
                }
                sx={{
                  "&.Mui-selected": {
                    color: "#0DE0FE",
                  },
                }}
              >
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
              <Divider sx={{ width: "100%" }} />
            </div>

            // <div key={index}>
            //   <ListItemButton
            //     component="a"
            //     onClick={dropdownHandler(item.name)}
            //     href={!item.subMenu && item.route}
            //   >
            //     <ListItemText
            //       primary={`${item.title}`}
            //       onClick={() => setActive(item)}
            //       sx={{
            //         color: active === item ? "blue" : "grey",
            //         "&:hover": { color: "black" },
            //       }}
            //     />
            //     {item.subMenu ? (
            //       dropdown.communication ||
            //       dropdown.transaction ||
            //       dropdown.company ||
            //       dropdown.setting ? (
            //         <ExpandLessIcon />
            //       ) : (
            //         <ExpandMoreIcon />
            //       )
            //     ) : null}
            //   </ListItemButton>
            //   <Divider sx={{ width: "100%" }} />
            //   {item.subMenu &&
            //     item.subMenu.map((menu, index) => (
            //       <div key={index}>
            //         <Collapse
            //           in={
            //             item.name === "communication"
            //               ? dropdown.communication
            //               : item.name === "transaction"
            //               ? dropdown.transaction
            //               : item.name === "company"
            //               ? dropdown.company
            //               : item.name === "setting"
            //               ? dropdown.setting
            //               : null
            //           }
            //           timeout="auto"
            //           unmountOnExit
            //         >
            //           <List component="div" disablePadding>
            //             <ListItemButton
            //               sx={{ pl: 4 }}
            //               onClick={() => {
            //                 navigate(menu.route);
            //               }}
            //             >
            //               <ListItemText
            //                 sx={{ color: "black" }}
            //                 primary={menu.title}
            //               />
            //             </ListItemButton>
            //           </List>
            //         </Collapse>
            //       </div>
            //     ))}
            // </div>
          ))}
        </List>
      </div>
    </div>
  );
}
