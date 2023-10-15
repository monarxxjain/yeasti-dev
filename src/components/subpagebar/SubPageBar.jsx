import { useEffect, useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";


import { Link, useLocation } from "react-router-dom";
import {  Box, Typography } from "@mui/material";
const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const [pathName, setPathName] = useState  (null);

  // Check if this item is currently selected based on the 'selected' prop
  const isActive = selected === title;

  // Determine whether to apply the 'glowing-semicircle' class
  const className = isActive ? 'glowing-semicircle' : '';
  

  useEffect(() => {
    if(pathName===null){
      setSelected("Overview")
    }
    setPathName(location.pathname);
    // eslint-disable-next-line
  }, [pathName]);

  return (
    <MenuItem
      active={isActive} // Set active based on whether this item is selected
      className={className}
      onClick={() => {
        setSelected(title);
        setPathName(location.pathname);
      }}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography style={{ fontSize: "17px", fontWeight: "590", textAlign: "center" }}>{title}</Typography>
    </MenuItem>
  );
};


const SubPageBar = ({subPages}) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  // const { sidebarRTL, setSidebarRTL, sidebarImage } = useSubPageBarContext();
  const { collapsed } = useProSidebar();
  const pages = subPages;
  const [dashWidth, setDashWidth] = useState((window.innerWidth-260))
  window.addEventListener("resize",()=>{
    subPageBarWidth()
  })
  function subPageBarWidth(){
    if(window.innerWidth>=768 && !collapsed){
      const calcValue = window.innerWidth - 260
      setDashWidth(calcValue)
    }
    else if(window.innerWidth<500){
      const calcValue = window.innerWidth
      setDashWidth(calcValue)
      document.getElementById("rightBody").style.width=`${calcValue}px`
    }
    else{
      const calcValue = window.innerWidth - 100
      setDashWidth(calcValue)
      document.getElementById("rightBody").style.width=`${calcValue}px`
    }
  }
  useEffect(()=>{
    subPageBarWidth()
// eslint-disable-next-line
  },[])
  return (
    <Box
      sx={{
        display: "flex",
        height: "50px",
        overflowY: "hidden",
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
          background: "linear-gradient(270deg, #27294A 0%, rgba(42, 46, 80, 0.00) 89.84%)",
          boxShadow: "inset -10px -50px 60px -40px rgba(59, 38, 123, 0.70)",
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
        className="!overflow-y-hidden"        
        width={`${dashWidth}px`}
      >
        <Menu iconshape="square" className="!overflow-y-hidden">
          <Box marginX={!collapsed ? "16px" : undefined} display={"flex"} overflow={"scroll"} className="!overflow-y-hidden">
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
