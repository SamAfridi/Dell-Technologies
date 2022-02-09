import Container from "@mui/material/Container";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const data = [
  {
    name: "What We Do",
    image: "../img/could-services.jpg",
    title:
      "Our end-to-end solutions help and support you build a better tomorrow.",
  },
  {
    name: "McLaren Customer Story",
    image: "../img/edge solution.jpg",
    title: "Powering racing and innovation with high-performance technology.",
  },
  {
    name: "New Trailblazers Podcast",
    image: "../img/telecoms.jpg",
    title:
      "We love our pets and the technology we've developed  of their value.",
  },
  {
    name: "Advancing Sustainability",
    image: "../img/dell-emc.png",
    title: "We are committed to driving sustainable innovation for the planet.",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function TechnologiesGrid() {
  return (
    <Container>
      <Box sx={{}}>
        <h1 style={{ float: "left", fontWeight: "200" }}>
          We Are Dell Technologies
        </h1>
        <Grid marginBottom={10} container spacing={1}>
          {data.map((item) => {
            return (
              <Grid item xs={12} lg={6}>
                <Item sx={{ height: "200px", boxShadow: 4 }}>
                  <div className="heading">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="imgSection">
                    <img src={item.image} alt="img" />
                  </div>
                  <div className="textArea">
                    <p>{item.title}</p>
                    <Button variant="text" size="large">
                      Learn More
                    </Button>
                  </div>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
