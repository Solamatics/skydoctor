import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Drawer from "@mui/material/Drawer";
import { Icon, List, ListItem, ListItemIcon } from "@mui/material";
import { routes } from "./routes";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";

export default function MobileSidebar({
  window,
  mobileNav,
  toggleNav,
  location,
}) {
  const drawerWidth = 280;

  const drawer = (
    <div className={"doctor-lg-nav-holder"}>
      <Box className={"doctor-lg-nav"}>
        <Box className={"widget-profile"}>
          <Box className={"booking-doc-img"}>
            <img src={require("../../assets/img/avatar.jpg")} alt={"profile"} />
          </Box>

          <h5 className={"profile-det-info"}>Dr. Darren Elder</h5>
          <h5 className={"patient-details"}>
            BDS, MDS - Oral & Maxillofacial Surgery
          </h5>
        </Box>
        <Box>
          <List sx={{ fontSize: "11px!important" }}>
            {routes.map((item) => (
              <ListItem
                className={"sidebar-nav-list sidebar-nav"}
                key={item.title}
              >
                <ListItemButton
                  onClick={() => toggleNav(false)}
                  component={Link}
                  to={item.route}
                >
                  <ListItemIcon className={"sidebar-nav-icon"}>
                    <Icon
                      sx={{
                        color: item.route === location ? "#0de0fe" : "#757575",
                      }}
                    >
                      {item.icon}{" "}
                    </Icon>
                  </ListItemIcon>
                  <ListItemText>
                    <span
                      style={{
                        fontSize: "11px!important",
                        color: item.route === location ? "#0de0fe" : "#757575",
                      }}
                    >
                      {item.title}
                    </span>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
