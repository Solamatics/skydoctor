import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import {
  EmailOutlined,
  PhoneEnabledOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { MuiOtpInput } from "mui-one-time-password-input";

export default function Registration({ userDetails, userReg, updatePage }) {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [stage, setStage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    return setStage(2);
  };
  const matchIsNumeric = (text) => {
    const isNumber = typeof text === "number";
    const isString = typeof text === "string";
    return (isNumber || (isString && text !== "")) && !isNaN(Number(text));
  };
  const theme = useTheme();
  const [gap, setGap] = useState(useMediaQuery(theme.breakpoints.up("sm")));
  return (
    <Box
      sx={{
        mt: { xs: 2, sm: 10 },
        minHeight: { xs: "90vh", sm: "580px" },
        padding: { xs: "20px", sm: "50px" },
      }}
      className={"onboarding-content-box"}
    >
      {stage === 1 ? (
        <Box>
          <h6 className={"onboarding-title"}>
            Whats your Primary email?{" "}
            <span style={{ color: "#FF0202" }}>*</span>
          </h6>
          <h6 className={"onboarding-subtitle"}>
            We will only use it to advise you for any important changes.
          </h6>

          <br />

          <form noValidate autoFocus={false} onSubmit={handleSubmit}>
            <Box className={"onboarding-box-wrap"}>
              <div>
                {userReg === "email" ? (
                  <TextField
                    label={"Email"}
                    sx={{ backgroundColor: "#F4F4F4" }}
                    variant={"outlined"}
                    fullWidth
                    value={userDetails?.doctor?.email}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailOutlined />
                        </InputAdornment>
                      ),
                    }}
                  />
                ) : (
                  <TextField
                    label={"Mobile Phone"}
                    sx={{ backgroundColor: "#F4F4F4" }}
                    variant={"outlined"}
                    fullWidth
                    value={userDetails?.doctor?.phone}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneEnabledOutlined />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              </div>
              <Box sx={{ marginTop: { xs: "25%", sm: "38%" } }}>
                <Button
                  disableElevation
                  type={"submit"}
                  sx={{ padding: "13px 45px", textTransform: "none" }}
                  variant={"contained"}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      ) : (
        <Box>
          <h6 className={"onboarding-title"}>
            Enter 4-digit code sent to your email.
          </h6>
          <h6 className={"onboarding-subtitle"}>
            {" "}
            We’ve sent it to {userDetails?.email || ""}
          </h6>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "400px" },
              textAlign: "left",
              justifyContent: "start",
              margin: "0 auto",
            }}
          >
            <MuiOtpInput
              gap={gap ? 3 : 1}
              sx={{ mt: 4 }}
              length={4}
              validateChar={(value, index) => matchIsNumeric(value)}
              value={otp}
              onChange={(value) => setOTP(value)}
            />
          </Box>
          <Box sx={{ marginTop: { xs: "25%", sm: "38%" } }}>
            <Button
              onClick={() => updatePage(2)}
              disableElevation
              type={"submit"}
              sx={{ padding: "13px 45px", textTransform: "none" }}
              variant={"contained"}
            >
              Continue
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
