import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import SocialLinks from "../socialLinks";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";

import { register, reset } from "../../../store/auth/authSlice";

export default function RegistrationForm({ updateReg }) {
  const [togglePass, setTogglePass] = useState(false);
  const [toggleCPass, setToggleCPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [regMode, setRegMode] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
    user_type: "",
  });

  const {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    phone_number,
    user_type,
  } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const country = "Nigeria";
  const categoryList = ["Doctor", "Merchant", "Patient"];

  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth,
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (isSuccess) {
    //   navigate("/");
    // }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      alert("Passwords do not match!");
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        phone_number,
        user_type,
      };

      dispatch(register(userData));
    }
  };

  useEffect(() => {
    dispatch(register());
  }, []);

  return (
    <Box>
      <Box sx={{ display: "block" }}>
        <Box sx={{ display: "flex" }}>
          <Button
            disableElevation
            variant={!regMode ? "contained" : "outlined"}
            sx={{
              backgroundColor: !regMode ? "#00329B" : "white",
              color: !regMode ? "white" : "#00329B",
              borderColor: !regMode ? "#00329B" : "white",
              mr: 1,
              flexGrow: 1,
              textTransform: "none",
            }}
            onClick={() => setRegMode(false)}
          >
            With Email Address
          </Button>
          <Button
            disableElevation
            variant={regMode ? "contained" : "outlined"}
            sx={{
              backgroundColor: regMode ? "#00329B" : "white",
              color: regMode ? "white" : "#00329B",
              flexGrow: 1,
              ml: 1,
              borderColor: regMode ? "#00329B" : "white",
              textTransform: "none",
            }}
            onClick={() => setRegMode(true)}
          >
            With Mobile Number
          </Button>
        </Box>
        <br />
        <form
          noValidate
          aria-autocomplete={"none"}
          autoComplete={"off"}
          onSubmit={handleSubmit}
        >
          <TextField
            type={"text"}
            margin={"normal"}
            id={"firstname"}
            required
            label={"First name"}
            variant={"outlined"}
            name="first_name"
            value={first_name}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            type={"text"}
            margin={"normal"}
            id={"lastname"}
            required
            label={"Last Name"}
            variant={"outlined"}
            name="last_name"
            value={last_name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            sx={{ display: !regMode ? "block" : "none" }}
            type={"email"}
            margin={"normal"}
            required
            id={"email"}
            label={"Email"}
            variant={"outlined"}
            name="email"
            value={email}
            onChange={handleChange}
            fullWidth
          />

          <MuiTelInput
            sx={{ display: regMode ? "block" : "none" }}
            placeholder={"+234 080XXXXXXXXX"}
            margin={"normal"}
            name="phone_number"
            value={phone_number}
            onChange={handleChange}
            fullWidth
          />

          <Autocomplete
            fullWidth
            sx={{ mt: "12px" }}
            renderInput={(params) => (
              <TextField {...params} label={"Select Country"} />
            )}
            options={country}
            getOptionLabel={(option) => option.name || ""}
            margin={"normal"}
            id={"country"}
            isOptionEqualToValue={(option, stateInput) =>
              option.id === stateInput.id
            }
          />

          <Autocomplete
            fullWidth
            sx={{ mt: "18px", mb: "5px" }}
            renderInput={(params) => (
              <TextField {...params} label={"Select Category"} />
            )}
            options={categoryList}
            margin={"dense"}
            getOptionLabel={(option) => option.name || ""}
            id={"category"}
            isOptionEqualToValue={(option, stateInput) =>
              option.id === stateInput.id
            }
          />

          <TextField
            required
            id={"password"}
            margin={"normal"}
            label={"Password"}
            type={togglePass ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setTogglePass(!togglePass)}
                  position="end"
                  sx={{ cursor: "pointer" }}
                >
                  {togglePass ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
            variant={"outlined"}
            fullWidth
          />

          <TextField
            required
            id={"cpass"}
            margin={"dense"}
            label={"Confirm Password"}
            type={toggleCPass ? "text" : "password"}
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setToggleCPass(!toggleCPass)}
                  position="end"
                  sx={{ cursor: "pointer" }}
                >
                  {toggleCPass ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
            variant={"outlined"}
            fullWidth
          />

          <Box>
            <br />
            <div className={"w3-text-right"} style={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: "12px", mt: 1 }}>
                Already have an account?
                <Link to={"/"} style={{ color: "#00329B" }}>
                  {" "}
                  Sign In
                </Link>
              </Typography>
            </div>
            <br />
            <LoadingButton
              loading={loading}
              type={"submit"}
              fullWidth
              sx={{ backgroundColor: "#00329B", mr: 1 }}
              disableElevation
              variant={"contained"}
              className={"guest-login"}
            >
              Sign Up
            </LoadingButton>

            <br />
            <br />
            <Divider>
              <span style={{ color: "#d4d4d4", fontSize: "12px" }}>Or</span>
            </Divider>
            <br />

            <SocialLinks />

            <br />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
