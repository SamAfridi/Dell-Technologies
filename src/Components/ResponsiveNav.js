import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { IconButton, ListItemButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Logo from "./Logo";

const page = [
  "APAX",
  "Products",
  "Services",
  "Solutions",
  "Supports",
  "Abouts US",
];
function ResponsiveNav() {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Drawer open={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        <Logo />
        <List sx={{ width: "250px", marginTop: "50px" }}>
          {page.map((page, index) => (
            <ListItemButton onClick={() => setDrawerOpen(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ width: "200px" }}>{page}</ListItemText>
                <ArrowForwardIosIcon sx={{ margin: "8px", fontSize: "14px" }} />
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setDrawerOpen(!DrawerOpen)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default ResponsiveNav;
