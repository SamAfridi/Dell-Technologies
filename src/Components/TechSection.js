import React from 'react';
import Grid from "@mui/material/Grid";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { style } from '@mui/system';

function TechSection() {
  return (
      <>
         <Grid container m={3}>
             <Grid>
               <h1>Explore Dell Technologies</h1>
      {itemData.map((item) => (
         
        <ImageListItem className='TechHover' sx={{ margin:"10px", width: 400, }} key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 1.54)' }}
                aria-label={` ${item.title}`}
              >
                <ArrowForwardIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
   
             </Grid>
        </Grid> 
      </>
  );

  
}
const itemData = [
    {
      img: '../img/edge solution.jpg',
      title: 'Edge Solution',
      
    },
    {
      img: '../img/could-services.jpg',
      title: 'APEX Cloud Services',
      
    },
    {
      img: '../img/telecoms.jpg',
      title: 'Telecom Solution',
      
    },
];

export default TechSection;
