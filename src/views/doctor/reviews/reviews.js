import { Grid, Box, Avatar, Rating, Button } from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import { Reply, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function Reviews() {
  const [rating, setRating] = useState(2);
  const ratingList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box component={"main"} sx={{ mt: 2, pa: 1 }}>
      <Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          spacing={3}
          sx={{ pa: 5 }}
        >
          <Grid
            item
            xs={12}
            sm={3}
            lg={3}
            md={3}
            sx={{
              pa: 5,
              display: { xs: "none", sm: "block" },
            }}
          >
            <DashboardSideBar />
          </Grid>
          <Grid item xs={12} sm={9} lg={9} md={9} sx={{ px: 2 }}>
            {
                ratingList.map(item=>(
                    <Box key={item} className={"card"} sx={{ padding: "1rem 1.5rem" }}>
                        <Box className={"flex-row"}>
                        <div>
                            <Avatar
                            src={require("../../../assets/img/patient2.jpg")}
                            sx={{ width: "3rem", height: "3rem" }}
                            />
                        </div>
                        <div style={{ marginLeft: "16px" }} className={"flex-column"}>
                            <div
                            className={"flex-row"}
                            style={{ justifyContent: "space-between" }}
                            >
                            <div className={"flex-column"}>
                                <span
                                style={{
                                    fontWeight: "600",
                                    color: "#272b41",
                                    fontSize: "15px",
                                }}
                                >
                                Travis Timber
                                </span>
        
                                <span
                                style={{
                                    fontSize: "13px",
                                    color: "#757575",
                                }}
                                >
                                Reviewed 3 Days ago
                                </span>
                            </div>
        
                            <div>
                                <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => setRating(newValue)}
                                />
                            </div>
                            </div>
        
                            <div>
                            <p className={"comment-content"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam. Curabitur non nulla sit
                                amet nisl tempus
                            </p>
                            </div>
        
                            <div
                            className={"flex-row"}
                            style={{ justifyContent: "space-between" }}
                            >
                            <div>
                                <Button
                                sx={{ color: "#20c0f3", textTransform: "none" }}
                                startIcon={<Reply />}
                                variant={"text"}
                                >
                                <span>Reply</span>
                                </Button>
                            </div>
        
                            <div>
                                <div className={"flex-row"}>
                                <div style={{ marginRight: "5px" }}>
                                    <span style={{ color: "#757575", fontSize: "14px" }}>
                                    Recommended?
                                    </span>
                                </div>
        
                                <div style={{ marginRight: "5px", marginTop:'-4px' }}>
                                    <Button
                                    sx={{ 
                                        color: "#757575",
                                        textTransform: "none" ,
                                        border:'1px solid rgba(128,137,150,0.4)'
        
                                        }}
                                    startIcon={<ThumbUpOutlined />}
                                    size={'small'}
                                    variant={"outlined"}
                                    >
                                    Yes
                                    </Button>
                                </div>
        
                                <div style={{  marginTop:'-4px' }}>
                                    <Button
                                    sx={{ 
                                        color: "#757575",
                                        textTransform: "none" ,
                                        border:'1px solid rgba(128,137,150,0.4)'
        
                                        }}
                                    startIcon={<ThumbDownOutlined />}
                                    size={'small'}
                                    variant={"outlined"}
                                    >
                                    No
                                    </Button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Box>
                  </Box>
                ))
            }
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
