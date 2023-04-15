import { Outlet, useLocation } from "react-router-dom";
import { Box, Grid, Toolbar } from "@mui/material";
import TopBar from "../../components/patient/topbar";
import Sidebar from "../../components/patient/sidebar";
import { useEffect, useState } from "react";
import MobileSidebar from "../../components/patient/mobileSidebar";
import Footer from "../../components/guest/footer";

export default function Index() {
  let { pathname } = useLocation();
  const [location, setLocation] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [sidePath, setSidePath] = useState("");
  useEffect(() => {
    setLocation(pathname.replaceAll("/patient/", "").replaceAll("-", " "));
    setSidePath(pathname);
    // window.localStorage.setItem('location', pathname)
  }, [pathname]);

  const hideSidebar = [
    "/patient/doctor-profile",
    "/patient/booking",
    "/patient/checkout",
    "/patient/booking-success",
    "/patient/chat",
    "/patient/invoice-details",
  ];

  const checkPath = (path) => {
    return hideSidebar.includes(path, 0);
  };
  return (
    <Box className={"main-wrapper"}>
      <TopBar location={location} toggleNav={setMobileNav} />
      <MobileSidebar
        location={location}
        toggleNav={setMobileNav}
        mobileNav={mobileNav}
      />
      {/* <Toolbar sx={{mt: 2}}/> */}
      <Grid container spacing={3} className={"content container-fluid"}>
        <Grid
          item
          xs={12}
          sm={3}
          lg={3}
          md={3}
          sx={{
            display: {
              xs: "none",
              sm: !checkPath(sidePath) ? "block" : "none",
            },
          }}
        >
          <Sidebar
            location={pathname}
            mobileNav={mobileNav}
            toggleNav={setMobileNav}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={!checkPath(sidePath) ? 9 : 12}
          lg={!checkPath(sidePath) ? 9 : 12}
          md={!checkPath(sidePath) ? 9 : 12}
        >
          <Outlet />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
