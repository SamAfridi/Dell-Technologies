import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function BreakComp() {

  return (
      <>
          <Grid container>
          <Grid xs={12} sx={{color:"black",padding:"20px",margin:'10px', boxShadow:5}} >
             <h3>XPS 13 LAPTOP</h3>
           <h1>Masterfully Designed</h1>
           <p>Precision cut for a flawless finish in a minimal footprint.</p>
           <Button variant='contained' color='inherit' size="large">Learn more</Button>
            </Grid>
          </Grid>
      </>
  );
}

export default BreakComp;
