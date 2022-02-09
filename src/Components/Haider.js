import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './Logo';
import { Tabs,Tab,useMediaQuery,useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from  'react';
import ResponsiveNav from './ResponsiveNav'




const Haider = () => {
   
  const [value,setValue] = useState();
 
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Logo />
      <AppBar
        sx={{ background: "transparent", boxShadow: 0 }}
        position="static"
      >
        <Toolbar>
          {isMatch ? (
            <>
              <ResponsiveNav />
            </>
          ) : (
            <Tabs
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            >
              <Tab label="APAX" />
              <ArrowDropDownIcon className="NavArrow" />
              <Tab label="Products" />
              <ArrowDropDownIcon className="NavArrow" />
              <Tab label="Solutions" />
              <ArrowDropDownIcon className="NavArrow" />
              <Tab label="Services" />
              <ArrowDropDownIcon className="NavArrow" />
              <Tab label="Support" />
              <ArrowDropDownIcon className="NavArrow" />
              <Tab label="About US" />
              <ArrowDropDownIcon className="NavArrow" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Haider;

