// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useEffect, useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography, IconButton, collapseClasses } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import MacButtonsIcon from "../../../assets/sidebar/MacButtonsIcon";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100], borderBottom: "1px solid transparent",
        borderImage: selected === title ? "linear-gradient(to right, transparent, rgba(196, 39, 251, 0.3), transparent)" : "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
        borderImageSlice: 1,
        borderTop: selected === title ? "1px solid transparent" : "none",
        position: "relative"
        }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
        {selected === title && <svg style={{position:"absolute", left: "20px", top: "7px"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path id="Polygon 7" d="M6 6C12.0751 -0.0751297 21.9249 -0.0751297 28 6V6C34.0751 12.0751 34.0751 21.9249 28 28V28C21.9249 34.0751 12.0751 34.0751 6 28V28C-0.0751297 21.9249 -0.0751297 12.0751 6 6V6Z" stroke="url(#paint0_linear_2116_14497)"/>
          <defs>
          <linearGradient id="paint0_linear_2116_14497" x1="2.15" y1="0.5" x2="34.05" y2="29.1" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A73EE7"/>
          <stop offset="1" stop-color="#00EBFF"/>
          </linearGradient>
          </defs>
        </svg>}
        <Typography style={{fontSize: "17px", fontWeight: "590"}}>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const [mobileView, setMobileView] = useState(false)
  const [initalHide, setInitialHide] = useState(false)
  const pages = [
    {
      title: "Dashboard",
      to: "/",
      icon: <HomeOutlinedIcon />
    },
    {
      title: "Personal",
      to: "/personal/sub1",
      icon: <SmartDisplayOutlinedIcon />
    },
    {
      title: "inventory",
      to: "/",
      icon: <SubscriptionsOutlinedIcon />
    },
    {
      title: "Sales",
      to: "/",
      icon: <MusicVideoIcon />
    },
    {
      title: "Orders",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Reports",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Administration",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Yeasti Ai",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Customers",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Suppliers",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Logistics",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Marketing",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Financials",
      to: "/",
      icon: <SlideshowIcon />
    },
    {
      title: "Compliance",
      to: "/",
      icon: <SlideshowIcon />
    },

  ]
  // useEffect(()=>{
  //   if(window.innerWidth<768){
  //     collapseSidebar()
  //   }
  // },[])
  useEffect(()=>{
    if(window.innerWidth<500 && !collapsed){
      setMobileView(true)
      document.body.style.overflowX="hidden"
      document.getElementById("myProSidebar").style.backdropFilter="blur(20px)"
    }
    else if(window.innerWidth<768 && !collapsed){
      document.body.style.overflowX="hidden"
      document.getElementById("rightBody").style.marginLeft="-155px"
      document.getElementById("myProSidebar").style.backdropFilter="blur(20px)"
    }
    else if(window.innerWidth<768 && collapsed){
      document.getElementById("rightBody").style.marginLeft="0px"
    }
  },[collapsed])

  return (
    <Box
      sx={[{
        position: (!mobileView || !collapsed) ? "sticky" : "absolute xxs:!sticky",
        display: "flex",
        height: (!mobileView || !collapsed) ? "100vh" : "min-content",
        top: 0,
        width: mobileView ? "1px" : "min-content",
        bottom: 0,
        zIndex: collapsed ?  10000 : 12000,
        "& .sidebar": {
          border: "none",
          background:  (!mobileView || !collapsed) ? "linear-gradient(168deg, rgba(46, 51, 90, 0.50) 1.62%, rgba(28, 27, 51, 0.50) 95.72%)" : "",
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
          transform: "scale(1.1)",
          transition: "all 0.4"
        },
        "& .menu-item.active": {
          background: "linear-gradient(to bottom, rgba(196, 39, 251, 0.3) 50%, transparent) !important",
        },
      }, collapsed ? {
        "& .sidebar": {
          borderRadius: "15px !important",
          margin: "5px"
        },
      } : {}]}
    >
      <Sidebar id="myProSidebar"
        defaultCollapsed={mobileView ? true : false}
        rtl={sidebarRTL}
        backgroundColor={"background: linear-gradient(168deg, rgba(46, 51, 90, 0.50) 1.62%, rgba(28, 27, 51, 0.50) 95.72%)"}
        image={sidebarImage}
        
      >
        <Menu iconshape="square">
          {!mobileView && <MenuItem
            icon={
              <MacButtonsIcon/>
            }
            style={!collapsed ? {marginLeft: "20px", marginTop: "10px"} : {marginLeft: "2px", marginTop: "10px"}}
          >
          </MenuItem>}
          <MenuItem
            style={{
              margin: (!mobileView || !collapsed) ? "10px 0 0 0" : "0",
              color: colors.grey[100],
            }}
          >
            {collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                style={{marginLeft: (!mobileView || !collapsed) ? "7px" : ""}}
              >
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              </Box>
            )}
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
                <Typography variant="h2" color={colors.grey[100]} style={{margin: "0 20px 0 0"}}>
                  logoHere
                </Typography>

              </Box>
            )}
          </MenuItem>
          
          {(!mobileView || !collapsed) && <Box marginX={!collapsed ? "16px" : undefined}>
            {pages.map((page, id)=>{
              return <Item 
                key={id}
                title={page.title}
                to={page.to}
                icon={page.icon}
                selected={selected}
                setSelected={setSelected}
              />
            })}
          </Box>}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
