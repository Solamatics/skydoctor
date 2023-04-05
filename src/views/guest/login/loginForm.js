import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { LoginUser, updateUserCredentials } from "../../../store/authStore";
import toast from "react-hot-toast";
import { capitalize } from "../../../hooks/capitalize";
import { SuccessToast, ErrorToast } from "../../../hooks/ToastMessages";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import SocialLinks from "../socialLinks";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [regMode, setRegMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [togglePass, setTogglePass] = useState(false);

  //login form validator
  const validationSchema = yup.object({
    emailMode: yup.boolean(),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .when("emailMode", {
        is: (val) => regMode === false,
        then: yup.string().required("Email is required"),
      }),
    password: yup
      .string("Enter your password")
      .required("Password is required"),
    phone: yup.string().when("emailMode", {
      is: (val) => regMode === true,
      then: yup.string().required("Mobile number is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = !regMode
        ? { email: values.email, password: values.password }
        : {
            phone: values.phone,
            password: values.password,
          };

      return login(data);
    },
  });

  //login user
  const login = async (payload) => {
    setLoading(true);
    await LoginUser({ ...payload })
      .then((response) => response?.data)
      .then(async (response) => {
        if (response.status) {
          SuccessToast(capitalize(response?.message));

          setTimeout(async () => {
            await dispatch(
              updateUserCredentials({
                ...response.data,
              })
            );
            localStorage.setItem("token", response.data.access_token);

            navigate("/doctor/onboarding");
          }, 2000);

          return;
        }
        setLoading(false);

        return ErrorToast(
          capitalize(response?.message) || "Error occurred, kindly try again"
        );
      });
  };

  return (
    <Box>
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
        onSubmit={formik.handleSubmit}
      >
        {!regMode ? (
          <TextField
            type={"email"}
            margin={"normal"}
            id={"email"}
            label={"Email"}
            variant={"outlined"}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />
        ) : (
          <TextField
            type={"string"}
            margin={"normal"}
            required
            label={"Mobile Number"}
            id={"phone"}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            variant={"outlined"}
            fullWidth
          />
        )}

        <br />
        <TextField
          id={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
          margin={"normal"}
          label={"Password"}
          type={togglePass ? "text" : "password"}
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

        <Box>
          <br />
          <div className={"w3-text-right"} style={{ textAlign: "right" }}>
            <Typography
              to={"/forgot-password"}
              component={Link}
              sx={{ fontSize: "12px", mt: 1 }}
            >
              Forgot Password ?
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
            Sign in
          </LoadingButton>

          <br />
          <br />
          <Divider>
            <span style={{ color: "#d4d4d4", fontSize: "12px" }}>Or</span>
          </Divider>
          <br />

          <SocialLinks />
          <br />
          <Box sx={{ textAlign: "center" }}>
            <Typography component={"span"}>Don't have an account?</Typography>
            <Link to={"/signup"} style={{ color: "#00329B" }}>
              {" "}
              Sign Up
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
