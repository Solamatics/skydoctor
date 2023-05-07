import { useState } from "react";
import ToggleBtn from "../../../components/ToggleBtn";
import { Box, Grid, Paper, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const cards = [
  {
    title: "Lite",
    detail: "Perefect to get Started",
    price: "$11",
    packages: [
      "CMS integration",
      "Enroll & SMS reminders",
      "Customer Suppoert 24/7",
    ],
  },

  {
    title: "Pro",
    detail: "Best for professionals",
    price: "$19",
    packages: [
      "CMS integration",
      "Enroll & SMS reminders",
      "Customer Suppoert 24/7",
    ],
  },

  {
    title: "Ultimate",
    detail: "Toolset for hard players",
    price: "$35",
    packages: [
      "CMS integration",
      "Enroll & SMS reminders",
      "Customer Suppoert 24/7",
    ],
  },
];

const Plans = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
      <div>
        <h3>Ready to get Started?</h3>
        <p>Choose a plan tailored to your need</p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div>Monthly </div>
          <ToggleBtn />
          <div>Yearly</div>
        </div>

        <Grid sx={{ flexGrow: 1, mt: "2rem" }} container spacing={4}>
          {cards.map((card, index) => (
            <Grid key={index} item>
              <Paper
                sx={{
                  minheight: 140,
                  width: 300,
                  padding: "1.5rem 2rem",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
                <p>
                  <span style={{ fontSize: "3rem" }}>{card.price}</span>
                  <span>per seat/month</span>
                </p>
                <Button
                  sx={{
                    background: "blue",
                    width: "100%",
                    color: "#fff",
                    mb: "1.5rem",
                    "&:hover": { background: "blue", color: "#fff" },
                  }}
                >
                  {card.title === "Lite"
                    ? "Try 7 days for free"
                    : "Get Started"}
                </Button>

                <p>
                  {card.title === "Lite"
                    ? `${card.title} includes:`
                    : card.title === "Pro"
                    ? `Everything in Lite plus:`
                    : `Everything in Pro plus:`}
                </p>

                <div>
                  <ul>
                    {card.packages.map((list, index) => (
                      <li key={index}>
                        <CheckIcon />
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  sx={{
                    width: "100%",
                    mt: "2rem",
                    color: "#fff",
                    background: "blue",
                    "&:hover": { background: "blue", color: "#fff" },
                  }}
                >
                  See all features
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Plans;
