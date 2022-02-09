import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import background from "../image/background.jpg";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import BreakComp from "./BreakComp";

const ImgSection = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <img className="backGroundimg" src={background} alt="background" />
          {isMatch ? (
            <>
              <Grid
                sx={{
                  position: "absolute",
                  display: "none",
                  top: "50%",
                  left: "30px",
                  color: "white",
                }}
              >
                {/* <h3>XPS 13 LAPTOP</h3>
           <h1>Masterfully Designed</h1>
           <p>Precision cut for a flawless finish in a minimal footprint.</p>
           <Button variant='outlined' color='inherit' size="large">Learn more</Button> */}
              </Grid>
              <BreakComp />
            </>
          ) : (
            <Grid
              sx={{
                position: "absolute",
                display: "block",
                top: "35%",
                left: "30px",
                color: "white",
              }}
            >
              <h3>XPS 13 LAPTOP</h3>
              <h1>Masterfully Designed</h1>
              <div style={{ fontSize: "25px" }}>
                <p>
                  Precision cut for a flawless finish in a minimal footprint.
                </p>
                <Button variant="outlined" color="inherit" size="large">
                  Learn more
                </Button>
              </div>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ImgSection;
