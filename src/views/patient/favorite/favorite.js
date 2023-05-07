import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Favorite() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          //   sx={{
          //     boxShadow:
          //       "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          //   }}
        >
          <div
            className="profile-widget"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            }}
          >
            <div className="doc-img">
              <Link to={"/patient/doctor-profile"}>
                <img
                  className="img-fluid"
                  alt="User Image"
                  src={require("../../../assets/img/doctors/doctor-01.jpg")}
                />
              </Link>
              <a href="javascript:void(0)" className="fav-btn">
                <i className="fas fa-bookmark"></i>
              </a>
            </div>
            <div className="pro-content">
              <h3 className="title">
                <Link to={"/patient/doctor-profile"}>Dr. Ruby Perrin</Link>
                <i className="fas fa-check-circle verified"></i>
              </h3>
              <p className="speciality">
                MDS - Periodontology and Oral Implantology, BDS
              </p>
              <div className="rating">
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <span className="d-inline-block average-rating">(17)</span>
              </div>
              <ul className="available-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Florida, USA
                </li>
                <li>
                  <i className="fas fa-clock"></i> Available on Fri, 22 Mar
                </li>
                <li>
                  <i className="fas fa-money-bill-alt"></i> $300 - $1000{" "}
                  <i
                    className="fas fa-info-circle"
                    data-bs-toggle="tooltip"
                    title="Lorem Ipsum"
                  ></i>
                </li>
              </ul>
              <div className="row row-sm">
                <div className="col-6">
                  <Link to={"/patient/doctor-profile"} className="btn view-btn">
                    View Profile
                  </Link>
                </div>
                <div className="col-6">
                  <Link to={"/patient/booking"} className="btn book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
