import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import Details from "./details";
import UploadIdentity from "./uploadIdentity";
import Registration from "./registration";
import Verification from "./verification";
import Preference from "./preference";
import Topbar from "../../../components/doctor/topbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRedirect,
  fetchUserDetails,
  updateOnboardingPage,
} from "../../../store/doctorStore";
import Sidebar from "../../../components/doctor/sidebar";

export default function Onboarding() {
  const carousel = [
    {
      id: 1,
      title: "Welcome to Skydoctor",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    },
    {
      id: 2,
      title: "Welcome to Skydoctor",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    },
    {
      id: 3,
      title: "Welcome to Skydoctor",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    },
  ];

  // const userDetails = useSelector((state) => state.doctorStore.userDetails);
  // const redirect = useSelector((state) => state.doctorStore.redirect);

  const userDetails = "";
  const redirect = "";

  const options = [
    { key: 1, title: "Registration", content: "Enter Details for Register " },
    {
      key: 2,
      title: "Upload Identity",
      content: "Upload your Identity for Verification",
    },
    {
      key: 3,
      title: "Personal Details",
      content: "Enter your Personal Details",
    },
    {
      key: 4,
      title: "Doctor Verification",
      content: "Upload Documents for the Verification",
    },
    {
      key: 5,
      title: "Preferences",
      content: "Setup Your Preferences for your Account",
    },
  ];

  //   const activeOption = useSelector(
  //     (state) => state.doctorStore.onboardingPage || 1,
  //   );

  const setActiveOption = (value) => {
    // dispatch(updateOnboardingPage(value));
    // dispatch(fetchUserDetails());
    console.log("click");
  };

  const dispatch = useDispatch();

  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    // dispatch(fetchRedirect());
    // dispatch(fetchUserDetails()).then((response) => setOpen(false));
    // await setOpen(false)
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Topbar toggleNav={handleNav} />
      <Sidebar
        show={showNav}
        options={options}
        setActiveOption={setActiveOption}
        toggleNav={handleNav}
        activeOption={activeOption}
      />
      <Toolbar sx={{ display: { sm: "none", xs: "block" } }}></Toolbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          sx={{ display: { sm: "block", xs: "none" } }}
        >
          <Box className={"left-panel"}>
            <Box sx={{ textAlign: "center" }}>
              <img
                style={{ height: "80px" }}
                className={"w3-image"}
                src={require("../../../assets/img/logo.png")}
                alt={"logo"}
              />
            </Box>

            <Box className={"onboard-img "}>
              <img
                src={require("../../../assets/img/onboarding-side.png")}
                alt={"Onboarding img"}
                className={"w3-image"}
              />
            </Box>

            <Box>
              <Carousel showArrows={false} itemsToShow={1} isRTL={false}>
                {carousel.map((item) => (
                  <Box sx={{ textAlign: "center" }} key={item.id}>
                    <p className={"onboard-title"}>{item.title}</p>
                    <p className={"onboard-content"}>{item.content}</p>
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          sx={{ display: { sm: "block", xs: "none" } }}
        >
          <Box className={"on-board-wizard"}>
            {options.map((item) => (
              <Box
                onClick={() => setActiveOption(item.key)}
                className={"on-board-cards"}
                key={item.key}
              >
                <div
                  className={"onboarding-progress"}
                  style={{
                    color: item.key <= activeOption ? "#fff" : "#000000",
                    backgroundColor:
                      item.key <= activeOption ? "#10916F" : "#F4F4F4",
                  }}
                >
                  <span>{item.key}</span>
                </div>
                <div>
                  <h6>{item.title}</h6>

                  <p>{item.content}</p>
                </div>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            px: { xs: 0, sm: 3 },
            mt: { xs: 3, sm: 0 },
          }}
        >
          {activeOption === 1 && (
            <Registration
              updatePage={setActiveOption}
              userDetails={userDetails}
              userReg={redirect?.regType || ""}
            />
          )}
          {activeOption === 2 && (
            <UploadIdentity
              updatePage={setActiveOption}
              userDetails={userDetails}
            />
          )}
          {activeOption === 3 && (
            <Details updatePage={setActiveOption} userDetails={userDetails} />
          )}
          {activeOption === 4 && (
            <Verification
              updatePage={setActiveOption}
              userDetails={userDetails}
            />
          )}
          {activeOption === 5 && <Preference />}
        </Grid>
      </Grid>
    </Box>
  );
}
