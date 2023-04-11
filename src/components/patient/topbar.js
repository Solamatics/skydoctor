import { AppBar, Box, Toolbar, Button, Typography, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PatientImg from "../../assets/img/patients/patient.jpg";

export default function TopBar({ location, toggleNav }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#fff", boxShadow: "none" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" style={{ height: "80px" }} />
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ color: "#D1D7D7" }}
          >
            <Box>
              <LocationCityIcon color="#808080" sx={{ fontSize: "40px" }} />
            </Box>
            <Box>
              <Typography>Contact</Typography>
              <Typography sx={{ color: "#000" }}>+1 315 369 5943</Typography>
            </Box>
            <Box>
              <img
                src={PatientImg}
                alt="avatar"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
