import React, { useState } from "react";
import { tokens } from "../../theme";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "../../assets/sidebar/MicIcon";
import VideoCamIcon from "../../assets/sidebar/VideoCamIcon";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationIcon from "../../assets/sidebar/NotificationIcon";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './userMenu.css'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box display="flex" justifyContent="space-between" gap={1} p={1}>
      <div style={{ visibility: "hidden" }}>Hi</div>
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
          <SearchIcon style={{ margin: "auto 10px", marginLeft: "10px", height: "20px" }} />
          <InputBase sx={{ ml: 1, mr: 1, flex: 1 }} className="lg:w-[300px] xl:w-[400px]" />
          <IconButton type="button" style={{ position: "relative", padding: "-5px 3px" }}>
            <svg style={{ position: "absolute", left: "-3px", top: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path id="Polygon 7" d="M6 6C12.0751 -0.0751297 21.9249 -0.0751297 28 6V6C34.0751 12.0751 34.0751 21.9249 28 28V28C21.9249 34.0751 12.0751 34.0751 6 28V28C-0.0751297 21.9249 -0.0751297 12.0751 6 6V6Z" stroke="url(#paint0_linear_2116_14497)" />
              <defs>
                <linearGradient id="paint0_linear_2116_14497" x1="2.15" y1="0.5" x2="34.05" y2="29.1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A73EE7" />
                  <stop offset="1" stopColor="#00EBFF" />
                </linearGradient>
              </defs>
            </svg>
            <MicIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" >
        <IconButton type="button" className="!hidden md:!block !pt-0 !pe-[15px] !pb-[6px] !ps-[13px]">
          <VideoCamIcon />
        </IconButton>
        <IconButton type="button" className="md:!pt-[5px] md:!pe-[18px] md:!pb-[6px] md:!ps-[18px]">
          <NotificationIcon />
        </IconButton>
        <IconButton type="button" className="md:!pt-[5px] md:!pe-[4px] md:!pb-[6px] md:!ps-[4px]" onClick={toggleMenu}>
          <div style={{ backgroundColor: "#22D7FF", borderRadius: "50%" }} className="px-[8px] md:!py-[7px] md:!px-[15px]">A</div>
        </IconButton>
      </Box>
      <UserMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
    </Box>
  );
};

const UserMenu = ({isOpen, toggleMenu}) => {

  const userMenus = {
    account: [
      {
        name: "My Profile",
        icon: <PersonOutlinedIcon/>
      },
      {
        name: "Settings",
        icon: <SettingsOutlinedIcon/>
      },
      {
        name: "Notifications",
        icon: <NotificationsNoneOutlinedIcon/>
      }
    ],

    appearance: [
      {
        name: "Apparance: Device theme",
        icon: <DarkModeOutlinedIcon />,
        arrow: <ArrowForwardIosOutlinedIcon/>
      },
      {
        name: "Language: English",
        icon: <GTranslateOutlinedIcon />
      },
      {
        name: "Location: USA",
        icon: <LanguageOutlinedIcon />,
        arrow: <ArrowForwardIosOutlinedIcon/>
      }
    ],
    help: [
      {
        name: "Help",
        icon: <HelpOutlineOutlinedIcon />
      },
      {
        name: "Send Feedback",
        icon: <FeedbackOutlinedIcon/>
      }
    ],
    signOut: {
      name: "Sign Out",
      icon: <LogoutOutlinedIcon />
    }
  }

  const [active, setActive] = useState("My Profile")

  return (
    <div className={`side-menu  z-[12000] ${isOpen ? 'open' : ''}`} style={{background: "linear-gradient(173deg, rgba(123, 99, 151, 0.85) 1.18%, rgba(28, 27, 51, 0.85) 95.88%)"}}>
      <div className="menu-content flex flex-col gap-4">
        <div className="flex gap-4 px-4">
          <IconButton type="button" className="!pt-[5px] !pe-[4px] !pb-[6px] !ps-[4px] !h-min" onClick={toggleMenu}>
            <div style={{ backgroundColor: "#22D7FF", borderRadius: "50%" }} className="!py-[7px] !px-[15px]">A</div>
          </IconButton>
          <div>
            <div className="text-xl">Amarita</div>
            <div className="">@Amarita</div>
            <div className="text-[#4BF4FF]">Manage your Yeasti Account</div>
          </div>
        </div>
        <div className="text-lg">

          <div className="py-4 menu-items">
            {userMenus.account.map((menu, id)=>{
              return(
                <div key={id} 
                  className={`flex justify-between items-center py-2 px-4 cursor-pointer ${active===menu.name ? "opacity-100 font-semibold" : "opacity-60 hover:opacity-100"}`}
                  style={{background: active===menu.name ? "linear-gradient(90deg, rgba(72, 49, 157, 0.50) 6.09%, rgba(72, 49, 157, 0.17) 100%)": ""}}
                >
                  <div className={`flex gap-4 `} onClick={()=>setActive(menu.name)}>
                    <div>{menu.icon}</div>
                    <div>{menu.name}</div>
                  </div>
                  <div>{menu?.arrow}</div>
                </div>
              )
            })}
          </div>

          <div className="py-4 menu-items">
            {userMenus.appearance.map((menu, id)=>{
              return(
                <div key={id} 
                  className={`flex justify-between items-center py-2 px-4 cursor-pointer ${active===menu.name ? "opacity-100 font-semibold" : "opacity-60 hover:opacity-100"}`}
                  style={{background: active===menu.name ? "linear-gradient(90deg, rgba(72, 49, 157, 0.50) 6.09%, rgba(72, 49, 157, 0.17) 100%)": ""}}
                >
                  <div className={`flex gap-4 `} onClick={()=>setActive(menu.name)}>
                    <div>{menu.icon}</div>
                    <div>{menu.name}</div>
                  </div>
                  <div>{menu?.arrow}</div>
                </div>
              )
            })}
          </div>

          <div className="py-4 menu-items">
            {userMenus.help.map((menu, id)=>{
              return(
                <div key={id} 
                  className={`flex justify-between items-center py-2 px-4 cursor-pointer ${active===menu.name ? "opacity-100 font-semibold" : "opacity-60 hover:opacity-100"}`}
                  style={{background: active===menu.name ? "linear-gradient(90deg, rgba(72, 49, 157, 0.50) 6.09%, rgba(72, 49, 157, 0.17) 100%)": ""}}
                >
                  <div className={`flex gap-4 `} onClick={()=>setActive(menu.name)}>
                    <div>{menu.icon}</div>
                    <div>{menu.name}</div>
                  </div>
                  <div>{menu?.arrow}</div>
                </div>
              )
            })}
          </div>

          <div className="py-4">
            <div className={`flex gap-4 py-2 px-4 cursor-pointer ${active===userMenus.signOut.name ? "opacity-100 font-semibold" : "opacity-60 hover:opacity-100"}`} onClick={()=>setActive(userMenus.signOut.name)} 
              style={{background: active===userMenus.signOut.name ? "linear-gradient(90deg, rgba(72, 49, 157, 0.50) 6.09%, rgba(72, 49, 157, 0.17) 100%)": ""}} >
              <div>{userMenus.signOut.icon}</div>
              <div>{userMenus.signOut.name}</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Topbar;
