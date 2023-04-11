import { Box, Grid, Tab, Typography, Divider, Tabs } from "@mui/material";
// import { TabContext, TabList, Tabs } from "@mui/lab";
import { useState } from "react";
import Appointments from "./appointments";

import MedicalRecords from "./medicalRecords";
import Billing from "./billing";
import Prescription from "./prescription";
import Heart from "../../../assets/img/specialities/pt-dashboard-01.png";
import Thermometre from "../../../assets/img/specialities/pt-dashboard-02.png";
import Glucose from "../../../assets/img/specialities/pt-dashboard-03.png";
import Pressure from "../../../assets/img/specialities/pt-dashboard-04.png";
import BMI from "../../../assets/img/shapes/graph-01.png";
import HeartRate from "../../../assets/img/shapes/graph-02.png";
import FBC from "../../../assets/img/shapes/graph-03.png";
import Weight from "../../../assets/img/shapes/graph-04.png";
// import Logo from "../../../assets/img/sp";

const cards = [
  {
    title: "Heart Rate",
    image: Heart,
    rate: "12",
    unit: "bpm",
  },
  {
    title: "Body Temperature",
    image: Thermometre,
    rate: "18",
    unit: "c",
  },
  {
    title: "Glucose Level",
    image: Glucose,
    rate: "70-90",
  },
  {
    title: "Blood Pressure",
    image: Pressure,
    rate: "70-90",
    unit: "mg/dl",
  },
];

const statuses = [
  {
    title: "BMI Status",
    image: BMI,
    update: "Last Update 6d",
    background: "#7189DE",
    color: "#633CEA",
  },
  {
    title: "Heart Rate Status",
    image: HeartRate,
    update: "Last Update 2d",
    background: "#FEA79E",
    color: "#F44A30",
  },
  ,
  {
    title: "FBC Status",
    image: FBC,
    update: "Last Update 5d",
    background: "#A9D4FF",
    color: "#8DC4FF",
  },
  ,
  {
    title: "Weight Status",
    image: Weight,
    update: "Last Update 3d",
    background: "#ffcba4",
    color: "#FFA875",
  },
];

const tabTitles = [
  "Appointments",
  "Prescription",
  "Medical Records",
  "Billing",
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Dashboard() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = async (e) => {
    setActive(e);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={3}
            className={"patient-dashboard-top"}
            key={index}
          >
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-3">
                  <img src={card.image} alt="" width="55" />
                </div>
                <h5>{card.title}</h5>
                <h6>
                  {card.rate} <sub>{card.unit ? card.unit : null}</sub>
                </h6>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          border: "1px solid #D1D7D7",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ margin: "10px 0" }}>Graph Status</Typography>

        <Divider color="black" sx={{ width: "100%" }} />
        <Box sx={{ marginTop: "1.5rem" }}>
          <Grid container spacing={2}>
            {statuses.map((status, index) => (
              <Grid
                item
                xs={12}
                sm={3}
                className={"patient-dashboard-top"}
                key={index}
              >
                <div
                  className="card"
                  style={{
                    background: status.background,
                    minHeight: "200px",
                    color: "#fff",
                    borderBottom: `10px solid ${status.color}`,
                  }}
                >
                  <div className="card-body text-center mt-4">
                    <h5>{status.title}</h5>
                    <div className="mb-3">
                      <img src={status.image} alt="" width="55" />
                    </div>

                    <h6>{status.update}</h6>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ marginTop: "2rem" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#A9D4FF",
            },
          }}
        >
          {tabTitles.map((tabs, index) => (
            <LinkTab
              key={index}
              label={tabs}
              // className={classes.label}
              {...a11yProps(0)}
              style={{
                color: active == index ? "#A9D4FF" : "black",
                fontWeight: "bold",
              }}
              onClick={() => handleClick(index)}
            />
          ))}
        </Tabs>

        <TabPanel value={value} index={0}>
          <Appointments />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Prescription />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MedicalRecords />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Billing />
        </TabPanel>
      </Box>
    </Box>
  );
}
