import React from "react";
import Grid from "@mui/material/Grid";
import image from "../image/image2.png";
import image2 from "../image/image1.png";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <>
      <Grid container id="about">
        <Grid item xs={12} sm={6}>
          <div className="About-img">
            <img src={image} alt="img" />
          </div>
        </Grid>
        <Grid
          style={{ marginTop: "70px" }}
          className="About-text"
          item
          xs={12}
          sm={6}
        >
          <div>
            <h5>FOR HOME</h5>
            <h1>Connect To Your World</h1>
            <p>
              Easy-to-use and thoughtfully designed, the new Inspiron keeps you
              connected to what matters most.
            </p>
            <Button variant="text" size="large">
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid
          style={{ marginTop: "70px" }}
          className="About-text"
          item
          xs={12}
          sm={6}
        >
          <div>
            <h5>FOR BUSINESS</h5>
            <p>
              Laptops and 2-in-1s with built-in AI for unprecedented
              connectivity, collaboration and productivity.
            </p>
            <Button variant="text" size="large">
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="About-img">
            <img src={image2} alt="img" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
