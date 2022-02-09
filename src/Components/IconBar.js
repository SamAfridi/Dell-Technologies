import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LaptopIcon from "@mui/icons-material/Laptop";
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import TocIcon from "@mui/icons-material/Toc";


const IconBar = () => {
  return (
    <>
      <Container maxWidth="md">

      <Grid spacing={1} container item xs={10}  sx={{ marginTop:"50px" ,width:"700px", marginLeft:"30px",fontSize:"20px", color:"#414345", }}>
      <Grid item xs={6} md={3}>
      <div className="iconHover">
           <div className="iconAnimation">
               <LaptopIcon />
                <h5 style={{ margin: "0px" }}>Laptop</h5>
                 <div className="bottomTax">
                  <p>For Home</p>
                  <p>For Business</p>
              </div>
              </div>
           </div>
                
             
      </Grid>
        <Grid item xs={6} md={3}>
        <div className="iconHover">
                <DevicesIcon />
                <h5 style={{ margin: "0px" }}>Desktops</h5>
                <div className="bottomTax">
                  <p>For Home</p>
                  <p>For Business</p>
              </div>
              </div>
        </Grid>
        <Grid item xs={6} md={3}>
        <div className="iconHover">
                <TocIcon />
                <h5 style={{ marginTop: "0px" }}>WorkStations</h5>
              </div>
        </Grid>
        <Grid item xs={6} md={3}>
             <div className="iconHover">
                <StorageIcon />
                <h5 style={{ margin: "0px" }}>Servers & Storages</h5>
                <div className="bottomTax">
                  <p>Servers</p>
                  <p>Storages</p>
              </div>
              </div>
        </Grid>
        </Grid>
        {/* <Grid container>
          <Grid  item xs={6} lg={10}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div
                style={{
                  border: "1px solid red",
                  width: "100px",
                  padding: "15px",
                }}
              >
                <LaptopIcon />
                <h5 style={{ marginTop: "0px" }}>Laptop</h5>
              </div>
           
              <div
                style={{
                  border: "1px solid red",
                  width: "100px",
                  padding: "15px",
                }}
              >
                <DevicesIcon />
                <h5 style={{ marginTop: "0px" }}>Desktops</h5>
              </div>
           
              <div
                style={{
                  border: "1px solid red",
                  width: "100px",
                  padding: "15px",
                }}
              >
                <TocIcon />
                <h5 style={{ marginTop: "0px" }}>WorkStations</h5>
              </div>
           
              <div
                style={{
                  border: "1px solid red",
                  width: "100px",
                  padding: "15px",
                }}
              >
                <StorageIcon />
                <h5 style={{ marginTop: "0px" }}>Servers & Storages</h5>
              </div>
              
            
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
};
export default IconBar;
