import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  EditOffRounded,
  EmailOutlined,
  ImageSearch,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import * as yup from "yup";
import { useFormik } from "formik";
import { FileSize } from "../../../hooks/fileSize";
import { updatePersonaDetails } from "../../../store/doctorStore";
import { ErrorToast, SuccessToast } from "../../../hooks/ToastMessages";
import { LoadingButton } from "@mui/lab";
import { capitalize } from "../../../hooks/capitalize";

export default function Details({ userDetails, updatePage }) {
  const validationSchema = yup.object({
    avatar: yup.mixed().required("File is required"),

    name: yup.string().required("Enter your name"),
    gender: yup.object().required("Select a gender"),
    address: yup.string().required("Enter a valid address"),
    city: yup.string().required("Enter your city"),
    state: yup.object().required("Enter a valid address"),

    aboutme: yup
      .string()
      .required("Enter a valid address")
      .min(10, "Details is too short"),
    dob: yup.date().required("Select a date"),
  });
  const formik = useFormik({
    initialValues: {
      avatar: "",
      name: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      aboutme: "",
      dob: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      return updateDoctorDetails({
        gender: values.gender.value,
        avatar: values.avatar,
        name: values.name,
        address: values.address,
        city: values.city,
        aboutme: values.aboutme,
        dob: values.dob,
        state: values.state.value,
      });
    },
  });
  const genderOptions = [
    { title: "Male", value: "male" },
    { title: "Female", value: "female" },
  ];
  const stateOptions = [
    { id: 1, name: "Osun ", value: 1 },
    { id: 2, name: "Lagos", value: 2 },
  ];

  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState("");
  const preview = () => {
    if (!!!formik.values.avatar) return false;
    setLoading(true);
    let reader = new FileReader();
    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    setThumb(reader.readAsDataURL(thumb.file));
  };

  const updateDoctorDetails = async (payload) => {
    try {
      setLoading(true);
      await updatePersonaDetails(payload)
        .then((response) => response.data)
        .then((response) => {
          if (response.status) {
            SuccessToast(response.message || response.msg);

            setTimeout(async () => {
              await updatePage(4);
              setLoading(false);
            }, 1500);
            return;
          }

          setLoading(false);
          ErrorToast(response.message || response.msg);
        });
    } catch (e) {
      ErrorToast(e.message);
    }
  };
  return (
    <Box
      sx={{
        mt: { xs: 2, sm: 10 },
        padding: { xs: "20px", sm: "50px" },
        minHeight: { xs: "100%", sm: "580px" },
      }}
      className={"onboarding-content-box"}
    >
      <h6 className={"onboarding-title"}>
        Personalize Your Profile <span style={{ color: "#FF0202" }}>*</span>
      </h6>
      <form
        noValidate
        aria-autocomplete={"none"}
        autoComplete={"off"}
        onSubmit={formik.handleSubmit}
      >
        <Box className={"onboarding-box-wrap"}>
          <Grid container spacing={3} rowSpacing={{ xs: 1, sm: 1 }}>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <Button
                component={"label"}
                className={"file-option"}
                sx={{
                  height: "163px",
                  display: "flex",
                  flexDirection: "column",
                  mt: 1,
                  width: "183px!important",
                  textTransform: "none",
                }}
              >
                {!!formik.values.avatar ? (
                  <Typography
                    component={"div"}
                    sx={{ textTransform: "lowercase", mt: 2 }}
                  >
                    <span
                      style={{
                        padding: "5px 10px",
                        color: "#272b41",
                        fontWeight: "600",
                        fontSize: "11px",
                        backgroundColor: "darkgray",
                        borderRadius: "10px",
                      }}
                    >
                      {formik.values.avatar.name}
                    </span>
                    <div
                      className={"w3-text-center w3-center "}
                      style={{ marginTop: "5px" }}
                    >
                      <span
                        style={{
                          color: "#A8A8A8",
                          fontSize: "10px",
                        }}
                      >
                        {FileSize(formik.values.avatar.size)}
                      </span>
                    </div>
                  </Typography>
                ) : (
                  <div>
                    <div>
                      <ImageSearch fontSize={"large"} />
                    </div>
                    <div className={"upload-pic"}>
                      <h6>Upload Photo</h6>
                    </div>
                  </div>
                )}

                <input
                  hidden
                  accept=".png, .jpg, .jpeg, .svg"
                  id={"avatar"}
                  name={"avatar"}
                  onChange={(event) => {
                    formik.setFieldValue(
                      "avatar",
                      event.currentTarget.files[0],
                    );
                  }}
                  type="file"
                />
              </Button>
              <span
                className={"error-info"}
                style={{
                  display:
                    formik.touched.avatar && Boolean(formik.errors.avatar)
                      ? "block"
                      : "none",
                }}
              >
                {formik.touched.avatar && formik.errors.avatar}
              </span>
              <div className={"photo-norms"}>
                <h5>
                  Logo Should be minimum 152 * 152 Supported File format
                  JPG,PNG,SVG
                </h5>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div>
                <label className={"form-label"}>
                  Legal Name <span style={{ color: "#FF0202" }}>*</span>
                </label>
                <TextField
                  margin={"normal"}
                  type={"text"}
                  required
                  id={"name"}
                  placeholder={"Enter Name"}
                  variant={"outlined"}
                  sx={{ backgroundColor: "#F4F4F4" }}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} md={6}>
              <div>
                <label className={"form-label"}>
                  Gender<span style={{ color: "#FF0202" }}>*</span>
                </label>
                <Autocomplete
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder={"Select Gender"}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                      helperText={formik.touched.gender && formik.errors.gender}
                    />
                  )}
                  sx={{ backgroundColor: "#F4F4F4", mt: 2 }}
                  options={genderOptions}
                  getOptionLabel={(option) => option.title || ""}
                  margin={"normal"}
                  id={"gender"}
                  value={formik.values.gender}
                  onChange={(e, value) =>
                    formik.setFieldValue("gender", value || "")
                  }
                  isOptionEqualToValue={(option, stateInput) =>
                    option.value === stateInput.value
                  }
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} md={6}>
              <div>
                <label className={"form-label"}>
                  Date of Birth <span style={{ color: "#FF0202" }}>*</span>
                </label>
                <TextField
                  margin={"normal"}
                  type={"date"}
                  required
                  id={"dob"}
                  placeholder={"Select DOB"}
                  variant={"outlined"}
                  sx={{ backgroundColor: "#F4F4F4" }}
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div>
                <label className={"form-label"}>
                  Address <span style={{ color: "#FF0202" }}>*</span>
                </label>
                <TextField
                  margin={"normal"}
                  type={"text"}
                  required
                  id={"address"}
                  placeholder={"Enter Address"}
                  variant={"outlined"}
                  sx={{ backgroundColor: "#F4F4F4" }}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} md={6}>
              <div>
                <label className={"form-label"}>
                  City <span style={{ color: "#FF0202" }}>*</span>
                </label>
                <TextField
                  margin={"normal"}
                  type={"text"}
                  required
                  id={"city"}
                  placeholder={"Select City"}
                  variant={"outlined"}
                  sx={{ backgroundColor: "#F4F4F4" }}
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} md={6}>
              <div>
                <label className={"form-label"}>
                  State<span style={{ color: "#FF0202" }}>*</span>
                </label>
                <Autocomplete
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder={"Select State"}
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                      helperText={formik.touched.state && formik.errors.state}
                    />
                  )}
                  sx={{ backgroundColor: "#F4F4F4", mt: 2 }}
                  options={stateOptions}
                  getOptionLabel={(option) => option.name || ""}
                  margin={"normal"}
                  id={"state"}
                  value={formik.values.state}
                  onChange={(e, value) =>
                    formik.setFieldValue("state", value || "")
                  }
                  isOptionEqualToValue={(option, stateInput) =>
                    option.value === stateInput.value
                  }
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div>
                <label className={"form-label"}>
                  About you <span style={{ color: "#FF0202" }}>*</span>
                </label>
                <TextField
                  margin={"normal"}
                  type={"text"}
                  multiline
                  rows={5}
                  required
                  id={"aboutme"}
                  placeholder={"Tell us about you"}
                  variant={"outlined"}
                  sx={{ backgroundColor: "#F4F4F4", resize: "none" }}
                  value={formik.values.aboutme}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.aboutme && Boolean(formik.errors.aboutme)
                  }
                  helperText={formik.touched.aboutme && formik.errors.aboutme}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: { xs: "5%", sm: "5%" } }}>
            <LoadingButton
              loading={loading}
              disableElevation
              type={"submit"}
              sx={{ padding: "13px 45px", textTransform: "none" }}
              variant={"contained"}
            >
              Continue
            </LoadingButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
