import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {
  ChevronRight,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const social = [
  { icon: <Facebook />, link: "", id: 1 },
  { icon: <Twitter />, link: "", id: 2 },
  { icon: <LinkedIn />, link: "", id: 3 },
  { icon: <Instagram />, link: "", id: 4 },
];

const footerLinks = [
  {
    header: "services",
    items: [
      { title: "E-Stores", route: "" },
      { title: "Plans", route: "" },
      { title: "Appointment", route: "" },
      { title: "DOM", route: "" },
      { title: "Search", route: "" },
      { title: "Doctors", route: "" },
      { title: "Pharma Stores", route: "" },
      { title: "Hospital/Clinics", route: "" },
    ],
  },
  {
    header: "statutory",
    items: [
      { title: "Refund Policy", route: "" },
      { title: "Grievance Policy", route: "" },
      { title: "Cookie Policy", route: "" },
      { title: "Security Info", route: "" },
      { title: "Whistle Blower", route: "" },
      { title: "GDPR", route: "" },
      { title: "Sign Up", route: "" },
      { title: "Sign In", route: "" },
    ],
  },
  {
    header: "company",
    items: [
      { title: "About Us", route: "" },
      { title: "Careers", route: "" },
      { title: "Contact Us", route: "" },
      { title: "Support", route: "" },
      { title: "Events & News", route: "" },
      { title: "FAQ", route: "" },
      { title: "Offers & Coupons", route: "" },
      { title: "Success Stories", route: "" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        padding: "20px 0 0",
        backgroundColor: "rgb(13,79,138)",
        margin: "0",
      }}
    >
      <Grid container spacing={2} sx={{ py: 2, px: 3 }}>
        <Grid item xs={12} sm={6} lg={5} md={5}>
          <div style={{ textAlign: "left" }}>
            <img
              src={require("../../assets/img/logo.png")}
              alt={"logo"}
              style={{ width: "150px" }}
            />
            <br />
            <br />
            <Typography
              sx={{ color: "white", fontSize: "14px", lineHeight: 2 }}
              component={"p"}
            >
              TheSkyDoctors is one of the leading and premium Platform and
              Software as a Service Brand of Nextsoft Company that offers
              Full-Stack Quick and Secure Online Payment for Doctors, Patients,
              Pharmacy Stores, Manufacturers and other Health Service Providers
              across the Health Value chain, Booking and consultation Services
              for Doctors and Patients, ecommerce and Marketplace Solutions to
              consumers and wholesalers.
            </Typography>
            <br />
            {social.map((item) => (
              <IconButton key={item.id} sx={{ color: "white" }} size={"25px"}>
                {item.icon}
              </IconButton>
            ))}
          </div>
        </Grid>
        {footerLinks.map((link) => (
          <Grid item xs={6} sm={6} lg={2} md={2} key={link.header}>
            <Typography
              className={"footer-title"}
              sx={{ color: "white", mt: { xs: 0, sm: 8 } }}
              variant={"h6"}
            >
              {link.header}
            </Typography>
            <List>
              {link.items.map((item) => (
                <ListItem
                  key={item.title}
                  sx={{ px: 0, py: 0 }}
                  to={item.route}
                  component={Link}
                >
                  <ListItemIcon>
                    <ChevronRight sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ ml: -3 }}>
                    <Typography
                      className={"footer-sub-link"}
                      variant={"caption"}
                    >
                      {item.title}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ padding: "5px 20px" }}>
        <Box
          sx={{
            borderTop: "1px solid #1663a6",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            py: 2,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              lineHeight: 2,
              flexGrow: 1,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} TheSkyDoctors. All rights reserved.
          </Typography>

          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Button sx={{ color: "white", textTransform: "none" }}>
              Terms and Conditions
            </Button>
            <span className={"w3-text-white"}> | </span>
            <Button sx={{ color: "white", textTransform: "none" }}>
              Privacy Policy
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
