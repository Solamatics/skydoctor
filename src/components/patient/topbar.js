import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PatientImg from "../../assets/img/patients/patient.jpg";

export default function TopBar({ location, toggleNav }) {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            <Box>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                sx={{
                  paddingRight: 0,
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
              >
                <MenuItem value={10}>Dashboard</MenuItem>
                <MenuItem value={20}>Profile</MenuItem>
                <MenuItem value={30}>Settings</MenuItem>
              </Select>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
