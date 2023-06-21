import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCategories,
  getCountries,
  RegisterUser,
  updateRegDetails,
} from "../../../store/authStore";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import SocialLinks from "../socialLinks";
import * as yup from "yup";
import { useFormik } from "formik";
import { ErrorToast, SuccessToast } from "../../../hooks/ToastMessages";
import { capitalize } from "../../../hooks/capitalize";
import LoadingButton from "@mui/lab/LoadingButton";
import { register } from "../../../store/auth/authSlice";

export default function RegistrationForm({ updateReg }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCategories());
  }, []);
  const country = useSelector((state) => state.authStore.country);
  const categoryList = useSelector((state) => state.authStore.categories);

  const [togglePass, setTogglePass] = useState(false);
  const [toggleCPass, setToggleCPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [regMode, setRegMode] = useState(false);

  //registration  form validator
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
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_()-+=])[A-Za-z\d@$!%*#?&_()-+=]{8,}$/,
        { message: "Invalid password format" },
      ),

    phone: yup.string().when("emailMode", {
      is: (val) => regMode === true,
      then: yup
        .string()
        .required("Mobile number is required")
        .min(11, "Invalid phone number"),
    }),

    fullname: yup.string().required("Name is required").min(3, "Invalid name"),

    cpass: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Your passwords do not match."),

    category: yup.object().required("Select a category"),

    country: yup.object().required("Select a country"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      fullname: "",
      country: "",
      cpass: "",
      subcategory: "",
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let payload = {
        name: values.fullname,
        category_id: values.category?.id,
        country_id: values.country?.id,
        password: values.password,
      };
      if (!regMode) payload.email = values.email;
      else payload.phone = values.phone.replaceAll(" ", "");

      return submitReg(payload);
    },
  });

  //submit registration

  const submitReg = async (payload) => {
    setLoading(true);

    await RegisterUser({ ...payload })
      .then((response) => response?.data)
      .then((response) => {
        setLoading(false);
        if (response.status) {
          dispatch(
            updateRegDetails({
              email: payload.email,
              phone: payload.phone,
              regMode: !regMode ? "email" : "phone",
            }),
          );

          updateReg(true);

          return SuccessToast(capitalize(response?.message));
        }

        return ErrorToast(
          capitalize(response?.message) || "Error occurred, kindly try again",
        );
      });
  };

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
          onSubmit={formik.handleSubmit}
        >
          <TextField
            type={"text"}
            margin={"none"}
            id={"fullname"}
            required
            value={formik.values.fullname}
            onChange={formik.handleChange}
            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            helperText={formik.touched.fullname && formik.errors.fullname}
            label={"Full Name"}
            variant={"outlined"}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />

          <MuiTelInput
            sx={{ display: regMode ? "block" : "none" }}
            placeholder={"+234 080XXXXXXXXX"}
            margin={"normal"}
            fullWidth
            value={formik.values.phone}
            onChange={(value) => formik.setFieldValue("phone", value)}
            label={"Mobile number"}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />

          <Autocomplete
            fullWidth
            sx={{ mt: "12px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={"Select Country"}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
            )}
            options={country}
            getOptionLabel={(option) => option.name || ""}
            margin={"normal"}
            id={"country"}
            value={formik.values.country}
            onChange={(e, value) =>
              formik.setFieldValue("country", value || "")
            }
            isOptionEqualToValue={(option, stateInput) =>
              option.id === stateInput.id
            }
          />

          <Autocomplete
            fullWidth
            sx={{ mt: "18px", mb: "5px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={"Select Category"}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              />
            )}
            options={categoryList}
            margin={"dense"}
            getOptionLabel={(option) => option.name || ""}
            id={"category"}
            onChange={(_, value) => formik.setFieldValue("category", value)}
            value={formik.values.category}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />

          <TextField
            required
            id={"cpass"}
            margin={"dense"}
            label={"Confirm Password"}
            type={toggleCPass ? "text" : "password"}
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
            value={formik.values.cpass}
            onChange={formik.handleChange}
            error={formik.touched.cpass && Boolean(formik.errors.cpass)}
            helperText={formik.touched.cpass && formik.errors.cpass}
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
