import Container from "@mui/material/Container";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const Footer = () => {

    return(
        <>
             
             <Box sx={{ background:"rgb(231, 231, 231);" ,width: '100%' }}>
      <Grid className="Footer" container rowSpacing={1} >
        <Grid className="FooterBox" item xs={6} lg={3}>
            <ul>
               <li><h4>PK/EN</h4></li> 
              <li>Site Map</li>
            </ul>
              
        </Grid>
        <Grid item xs={6} lg={3}>
        <ul>
               <li><h4>Supports</h4></li> 
              <li>Support Home</li>
              <li>Contect Us</li>
            </ul>
        </Grid>
        <Grid item xs={6} lg={3}>
        <ul>
               <li><h4>Contact With us</h4></li> 
              <li>Community</li>
            </ul>
        </Grid>
        <Grid item xs={6} lg={3}>
        
        </Grid>
        <Grid item xs={6} lg={3}>
            <ul>
              <li><h4>Our Offering</h4></li> 
              <li>APAX</li>
              <li>products</li>
              <li>Solutions</li>
              <li>Services</li>
            </ul>
        </Grid>
        <Grid item xs={6} lg={3}>
        <ul>
              <li><h4>Our Company</h4></li> 
              <li>Who we are</li>
              <li>careers</li>
              <li>Dell Technologies Capital</li>
              <li>Investor</li>
              <li>NewsRooms</li>
              <li>Prespective</li>
              <li>Recycling</li>
              <li>Social Impact</li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={3}>
          <ul>
              <li><h4>Our Partner</h4></li> 
              <li>Find A Partner</li>
              <li>OEM Solution</li>
              <li>Partner Program</li>
            </ul>
          </Grid>
          <Grid item xs={6}lg={3}>
          <ul>
              <li><h4>Resources</h4></li> 
              <li>Event</li>
              <li>Glossary</li>
              <li>Resources Library</li>
              <li>Software Download</li>
            </ul>
          </Grid>
          <ul>
          <li><h4>Dell.com</h4></li> 
              <li>2022 Dell</li>
          </ul>
          <ul>
          <li><h4>Dell Technologoies</h4></li> 
              <li>Term for sale</li>
          </ul>
          <ul>
          <li><h4>Premier</h4></li> 
              <li>Privacy Statmen</li>
          </ul>
      </Grid>
    </Box>
            
        </>
    );
}

export default Footer;