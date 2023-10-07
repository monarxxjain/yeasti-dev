import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSubPageBarContext } from "./MySubPageBarContext"; 

import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
        
        <Typography style={{fontSize: "17px", fontWeight: "590"}}>{title}</Typography>
    </MenuItem>
  );
};

const SubPageBar = ({subPages}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSubPageBarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const pages = subPages;
  return (
    <Box
      sx={{
        display: "flex",
        zIndex: 10000,
        "& .sidebar": {
        //   width: "70%",
          border: "none",
          background: "linear-gradient(270deg, #27294A 0%, rgba(42, 46, 80, 0.00) 89.84%)",
          boxShadow: "inset -50px -10px 60px -40px rgba(59, 38, 123, 0.70)",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          backgroundColor: "transparent !important",
          transition: "all 0.4"
        },
        "& .menu-item.active": {
        },
      }}
    >
      <Sidebar
        backgroundColor={"background: linear-gradient(168deg, rgba(46, 51, 90, 0.50) 1.62%, rgba(28, 27, 51, 0.50) 95.72%)"}
        width="83vmax"
      >
        <Menu iconshape="square">
          <Box marginX={!collapsed ? "16px" : undefined} display={"flex"} overflow={"scroll"}>
            {pages.map((page, id)=>{
              return <Item 
                key={id}
                title={page.title}
                to={page.to}
                selected={selected}
                setSelected={setSelected}
              />
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SubPageBar;
