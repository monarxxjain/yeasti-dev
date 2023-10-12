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
    <Box display="flex" justifyContent="space-between" gap={1} p={1}>
      <div style={{visibility: "hidden"}}>Hi</div>
      <Box display="flex">
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.8}
          style={{
            borderRadius: "40px",
            height: "min-content",
            border: "1px solid rgba(255, 255, 255, 0.20)",
            background: "linear-gradient(135deg, rgba(15, 85, 232, 0.10) 0%, rgba(157, 223, 243, 0.10) 100%)",
            zIndex: "11000"
          }}
          className="!ms-[40px] xxs:!ms-0"
        >
          <SearchIcon style={{margin: "auto 10px", marginLeft: "10px", height: "20px"}}/>
          <InputBase sx={{ ml: 1, mr: 1, flex: 1}} className="lg:w-[300px] xl:w-[400px]"/>
          <IconButton type="button" style={{position:"relative", padding: "-5px 3px"}}>
            <svg style={{position:"absolute", left: "-3px", top: "-1px"}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
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
        <IconButton type="button" className="!hidden md:block !pt-0 !pe-[15px] !pb-[6px] !ps-[13px]">
          <VideoCamIcon/>
        </IconButton>
        <IconButton type="button" className="md:!pt-[5px] md:!pe-[18px] md:!pb-[6px] md:!ps-[18px]">
          <NotificationIcon />
        </IconButton>
        <IconButton type="button" className="md:!pt-[5px] md:!pe-[4px] md:!pb-[6px] md:!ps-[4px]">
          <div style={{backgroundColor: "#22D7FF", borderRadius: "50%"}} className="px-[8px] md:!py-[7px] md:!px-[15px]">A</div>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
