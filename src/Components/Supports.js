import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChatIcon from "@mui/icons-material/Chat";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
}));

function Supports() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#EAEAEA" }} padding={10}>
        <Grid item xs={10} lg={6}>
          <div
            style={{
              marginTop: "130px",
              fontSize: "20px",
              display: "inline-block",
              marginLeft: "20px",
            }}
          >
            <h1 style={{ fontWeight: "200" }}>DELL SUPPORT</h1>
            <p>Get your questions answered</p>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Stack>
            <Item className="itmeBorder">
              <div>
                <HomeIcon className="supportIcon" />
                <h3 style={{ display: "flex" }}>Support Home</h3>
              </div>
              <p>Browse all support-related information</p>
            </Item>
            <Item className="itmeBorder">
              <div>
                <SettingsIcon className="supportIcon" />
                <h3 style={{ display: "flex" }}>Drivers and Download</h3>
              </div>
              <p>Get the latest drivers and softwares </p>
            </Item>
            <Item className="itmeBorder">
              <div>
                <CheckCircleOutlineIcon className="supportIcon" />
                <h3 style={{ display: "flex" }}>Warranty and Contracts</h3>
              </div>
              <p>Check warranty of products</p>
            </Item>
            <Item className="itmeBorder">
              <div>
                <ChatIcon className="supportIcon" />
                <h3 style={{ display: "flex" }}>
                  Chat with a Business Advisor
                </h3>
              </div>
              <p>Chat with one of our agents</p>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Supports;
