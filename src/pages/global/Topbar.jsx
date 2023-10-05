import React from "react";
import { tokens } from "../../theme";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "../../assets/sidebar/MicIcon";
import VideoCamIcon from "../../assets/sidebar/VideoCamIcon";
import NotificationIcon from "../../assets/sidebar/NotificationIcon";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={1}>
      <div style={{visibility: "hidden"}}>Hi</div>
      <Box display="flex">
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.8}
          style={{
            borderRadius: "40px",
            border: "1px solid rgba(255, 255, 255, 0.50)",
            background: "linear-gradient(135deg, rgba(15, 85, 232, 0.10) 0%, rgba(157, 223, 243, 0.10) 100%)"
          }}
        >
          <SearchIcon style={{margin: "auto", marginLeft: "10px"}}/>
          <InputBase sx={{ ml: 1, mr: 1, flex: 1, width: 400 }} />
          <IconButton type="button" style={{position:"relative", padding: "0 14px"}}>
            <svg style={{position:"absolute", left: "-1px", top: "-1px"}} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 34 34" fill="none">
              <path id="Polygon 7" d="M6 6C12.0751 -0.0751297 21.9249 -0.0751297 28 6V6C34.0751 12.0751 34.0751 21.9249 28 28V28C21.9249 34.0751 12.0751 34.0751 6 28V28C-0.0751297 21.9249 -0.0751297 12.0751 6 6V6Z" stroke="url(#paint0_linear_2116_14497)"/>
              <defs>
              <linearGradient id="paint0_linear_2116_14497" x1="2.15" y1="0.5" x2="34.05" y2="29.1" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A73EE7"/>
              <stop offset="1" stop-color="#00EBFF"/>
              </linearGradient>
              </defs>
            </svg>
            <MicIcon/>
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" >
        <IconButton type="button" style={{padding: "0 15px 6px 13px"}}>
          <VideoCamIcon/>
        </IconButton>
        <IconButton type="button" style={{padding: "5px 18px 6px 18px"}}>
          <NotificationIcon />
        </IconButton>
        <IconButton type="button" style={{padding: "5px 4px 6px 4px", marginLeft: "5px"}}>
          <div style={{backgroundColor: "#22D7FF", padding: "10px 15px", borderRadius: "50%"}}>A</div>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
