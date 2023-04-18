import { Outlet, useLocation } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Appbar from "../../components/doctor/appbar";
import TopBar from "../../components/patient/topbar";
// import Footer from "./footer";
import { useEffect, useState } from "react";
import MobileSidebar from "../../components/doctor/mobileSidebar";
import Footer from "../../components/guest/footer";

export default function Index() {
  let { pathname } = useLocation();
  const [location, setLocation] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [sidePath, setSidePath] = useState("");

  useEffect(() => {
    setLocation(pathname.replaceAll("/doctor/", "").replaceAll("-", " "));
    setSidePath(pathname);
    // window.localStorage.setItem('location', pathname)
  }, [pathname]);

  return (
    <Box>
      {/* <Appbar location={location} toggleNav={setMobileNav} /> */}
      <TopBar location={location} toggleNav={setMobileNav} />
      <MobileSidebar
        location={pathname}
        mobileNav={mobileNav}
        toggleNav={setMobileNav}
      />
      <Toolbar sx={{ mt: 2 }} />
      <Box
        sx={{
          mr: {
            xs: -2.0,
            sm: 0,
          },

          padding: {
            xs: "0  8px 0 20px ",
            sm: "0",
          },
        }}
      >
        <Outlet context={[sidePath]} style={{ padding: "10px" }} />
      </Box>

      <Footer />
    </Box>
  );
}
