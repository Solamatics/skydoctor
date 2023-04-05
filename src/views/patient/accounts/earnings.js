import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Close, ControlPoint, Delete } from "@mui/icons-material";
import { useState } from "react";

export default function Earnings() {
  const earnings = [
    {
      title: "Earned",
      value: "$90.98",
      color: "rgb(38, 175, 72)",
      background: "rgba(15, 183, 107, 0.12)",
    },
    {
      title: "Requested",
      value: "$0.0",
      color: "rgb(243, 156, 18)",
      background: "rgba(255, 152, 0, 0.12)",
    },
    {
      title: "Balance",
      value: "$90.98",
      color: "rgb(197, 128, 255)",
      background: "rgba(197, 128, 255, 0.12)",
    },
  ];

  const [dialog, setDialog] = useState(false);
  return (
    <Box>
      <Box className={"card"} sx={{ padding: "1rem 1.5rem" }}>
        <Grid container spacing={3} rowSpacing={3}>
          {earnings.map((item) => (
            <Grid key={item.title} item xs={12} sm={6} md={6} lg={6}>
              <Box
                className={"account-card"}
                sx={{
                  color: item.color,
                  textAlign: "center",
                  backgroundColor: item.background,
                }}
              >
                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {item.title}
                </h2>
                <h6
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {item.value}
                </h6>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 0.3, padding: 0.5 }} className={"text-center"}>
          <Button
            variant={"contained"}
            disableElevation
            sx={{
              fontSize: "0.885rem",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.2rem",
              backgroundColor: "#09e5ab",
              textTransform: "none",
              mt: 1,
            }}
            onClick={() => setDialog(true)}
          >
            Refund Request
          </Button>
        </Box>
      </Box>
      <Dialog
        open={dialog}
        onClose={() => setDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
        fullWidth
      >
        <DialogTitle
          component={"div"}
          className={"flex-row"}
          sx={{
            textAlign: "center",
            borderBottom: "1px solid rgb(222, 226, 230)",
            justifyContent: "space-between",
          }}
          id="alert-dialog-title"
        >
          <h6 style={{ color: "rgb(39, 43, 65)", fontWeight: "500" }}>
            Payment Request
          </h6>
          <div>
            <IconButton onClick={() => setDialog(false)}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            component={"div"}
            id="alert-dialog-description"
            sx={{ padding: "1.25rem" }}
          >
            <form>
              <div style={{ marginBottom: "10px" }}>
                <label style={{ color: "#272b41", fontSize: "0.9375rem" }}>
                  Request Amount
                </label>
                <TextField
                  fullWidth
                  variant={"outlined"}
                  size={"small"}
                  margin={"dense"}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label style={{ color: "#272b41", fontSize: "0.9375rem" }}>
                  Description (Optional)
                </label>
                <TextField
                  fullWidth
                  variant={"outlined"}
                  size={"small"}
                  margin={"dense"}
                  multiline
                  rows={4}
                  sx={{
                    resize: "none",
                    fontSize: "13px",
                  }}
                />
              </div>

              <br />
              <div className={"w3-center"}>
                <Button type={"submit"} className={"slot-buttons"}>
                  Request
                </Button>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
