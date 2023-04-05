import { Box, Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Appointments from "./appointments";

import MedicalRecords from "./medicalRecords";
import Billing from "./billing";
import Prescription from "./prescription";
import Heart from "../../../assets/pt-dashboard-01.png";
import Thermometre from "../../../assets/img/specialities/pt-dashboard-02.png";
import Glucose from "../../../assets/img/specialities/pt-dashboard-03.png";
import Pressure from "../../../assets/img/specialities/pt-dashboard-04.png";

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
  },
];

export default function Dashboard() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} className={"patient-dashboard-top"}>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img
                  src={require("../../../assets/img/specialities/pt-dashboard-01.png")}
                  alt=""
                  width="55"
                />
              </div>
              <h5>Heart Rate</h5>
              <h6>
                12 <sub>bpm</sub>
              </h6>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sm={4}
          lg={4}
          className={"patient-dashboard-top"}
        >
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img
                  src={require("../../../assets/img/specialities/pt-dashboard-02.png")}
                  alt=""
                  width="55"
                />
              </div>
              <h5>Body Temperature</h5>
              <h6>
                18 <sub>C</sub>
              </h6>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sm={4}
          lg={4}
          className={"patient-dashboard-top"}
        >
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img
                  src={require("../../../assets/img/specialities/pt-dashboard-03.png")}
                  alt=""
                  width="55"
                />
              </div>
              <h5>Glucose Level</h5>
              <h6>70 - 90</h6>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sm={4}
          lg={4}
          className={"patient-dashboard-top"}
        >
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img
                  src={require("../../../assets/img/specialities/pt-dashboard-04.png")}
                  alt=""
                  width="55"
                />
              </div>
              <h5>Blood Pressure</h5>
              <h6>
                202/90 <sub>mg/dl</sub>
              </h6>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
          lg={12}
          className={"patient-graph-col"}
        >
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Graph Status</h4>
            </div>
            <div className="card-body pt-2 pb-2 mt-1 mb-1">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                  <a
                    href="#"
                    className="graph-box text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#graph1"
                  >
                    <div>
                      <h4>BMI Status</h4>
                    </div>
                    <div className="graph-img">
                      <img
                        src={require("../../../assets/img/shapes/graph-01.png")}
                        alt=""
                      />
                    </div>
                    <div className="graph-status-result mt-3">
                      <span className="graph-update-date">Last Update 6d</span>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                  <a
                    href="#"
                    className="graph-box pink-graph text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#graph2"
                  >
                    <div>
                      <h4>Heart Rate Status</h4>
                    </div>
                    <div className="graph-img">
                      <img
                        src={require("../../../assets/img/shapes/graph-02.png")}
                        alt=""
                      />
                    </div>
                    <div className="graph-status-result mt-3">
                      <span className="graph-update-date">Last Update 2d</span>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                  <a
                    href="#"
                    className="graph-box sky-blue-graph text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#graph3"
                  >
                    <div>
                      <h4>FBC Status</h4>
                    </div>
                    <div className="graph-img">
                      <img
                        src={require("../../../assets/img/shapes/graph-03.png")}
                        alt=""
                      />
                    </div>
                    <div className="graph-status-result mt-3">
                      <span className="graph-update-date">Last Update 5d</span>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                  <a
                    href="#"
                    className="graph-box orange-graph text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#graph4"
                  >
                    <div>
                      <h4>Weight Status</h4>
                    </div>
                    <div className="graph-img">
                      <img
                        src={require("../../../assets/img/shapes/graph-04.png")}
                        alt=""
                      />
                    </div>
                    <div className="graph-status-result mt-3">
                      <span className="graph-update-date">Last Update 3d</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
          lg={12}
          className={"patient-graph-col"}
        >
          <div className="card">
            <div className="card-body pt-0">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    sx={{ py: 0 }}
                    variant={"fullWidth"}
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      sx={{ fontWeight: "600", py: 0, textTransform: "none" }}
                      label="Appointments"
                      value="1"
                    />
                    <Tab
                      sx={{ fontWeight: "600", textTransform: "none" }}
                      label="Prescriptions"
                      value="2"
                    />
                    <Tab
                      sx={{ fontWeight: "600", textTransform: "none" }}
                      label="Medical Records"
                      value="3"
                    />
                    <Tab
                      sx={{ fontWeight: "600", textTransform: "none" }}
                      label="Billing"
                      value="4"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Appointments />
                </TabPanel>
                <TabPanel value="2">
                  <Prescription />
                </TabPanel>
                <TabPanel value="3">
                  <MedicalRecords />
                </TabPanel>
                <TabPanel value="4">
                  <Billing />
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
