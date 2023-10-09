import {
    Box,
    Button,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import Grid from "@mui/material/Unstable_Grid2";
  import { tokens } from "../../theme";
  import LineChart from "../../components/echarts/LineChart";
  import Card6Image from '../../assets/dashboardOverview/Card6Person.svg'
  import Card6Profile from '../../assets/dashboardOverview/Card6Profile.svg'
  import ChatProfile from '../../assets/dashboardOverview/chatProfile.png'
  import DeleteIcon from '../../assets/dashboardOverview/DeleteIcon.svg'
  import Edge from "../../assets/dashboardOverview/Edge";
  import Chrome from "../../assets/dashboardOverview/Chrome";
  import Firefox from "../../assets/dashboardOverview/Firefox";
  import MessageDeliveredIcon from "../../assets/dashboardOverview/MessageDeliveredIcon";
import Area1 from "../../assets/dashboardOverview/Area1";
import Area2 from "../../assets/dashboardOverview/Area2";
import Area3 from "../../assets/dashboardOverview/Area3";
import Arrow from "../../assets/dashboardOverview/Arrow";
  const DashboardOverview = () => {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const colors = tokens(theme.palette.mode);
    const chats = [
      {
        name: "Jane Cooper",
        profileAvatar: ChatProfile,
        onlineStatus: "yellow",
        lastMessage: "Hello friend, how are you, we have a project for you",
        time: "04:26 PM",
        lastMessageStatus: {
          status: "Delivered",
          icon: <MessageDeliveredIcon />
        } 
      },
      {
        name: "Jane Cooper",
        profileAvatar: ChatProfile,
        onlineStatus: "green",
        lastMessage: "Hello friend, how are you, we have a project for you",
        time: "04:26 PM",
        lastMessageStatus: {
          status: "Delivered",
          icon: <MessageDeliveredIcon />
        } 
      },
      {
        name: "Jane Cooper",
        profileAvatar: ChatProfile,
        onlineStatus: "red",
        lastMessage: "Hello friend, how are you, we have a project for you",
        time: "04:26 PM",
        lastMessageStatus: {
          status: "Delivered",
          icon: <MessageDeliveredIcon />
        } 
      },
      {
        name: "Jane Cooper",
        profileAvatar: ChatProfile,
        onlineStatus: "red",
        lastMessage: "Hello friend, how are you, we have a project for you",
        time: "04:26 PM",
        lastMessageStatus: {
          status: "Delivered",
          icon: <MessageDeliveredIcon />
        } 
      },
      {
        name: "Jane Cooper",
        profileAvatar: ChatProfile,
        onlineStatus: "grey",
        lastMessage: "Hello friend, how are you, we have a project for you",
        time: "04:26 PM",
        lastMessageStatus: {
          status: "Delivered",
          icon: <MessageDeliveredIcon />
        } 
      },
    ]

    const inventoryAlerts = [
      {
        icon: <Edge/>,
        title: "Tripping",
        description: "Low Inventory",
        graph: <Area1/>,
        value: "345.00",
        percentage: "72.06%"
      },
      {
        icon: <Chrome/>,
        title: "Ellipsis",
        description: "Low Inventory",
        graph: <Area2/>,
        value: "165.60",
        percentage: "82.15%"
      },
      {
        icon: <Firefox/>,
        title: "450n",
        description: "Low Inventory",
        graph: <Area3/>,
        value: "741.00",
        percentage: "65.77%"
      },
    ]
    return (
      <Box m="34px" className="!mx-[42px] max-w-[20rem] xxs:max-w-[30rem] md:max-w-[35rem] nr:!max-w-full ">

  
        <Grid container rowSpacing={"60px"} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          
          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
                width="100%"
                alignItems="center"
                justifyContent="center"
                borderRadius={"16px"}
                border={"1px solid rgba(72, 49, 157, 0.20)"}
                borderBottom={0}
                className="hover:scale-x-105 hover:scale-y-110 transition-all max-h-[370px] h-full"
            >
              <LineChart/>
              <div className="!z-10" style={{background: "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 0%, rgba(72, 49, 157, 0.00) 100%)"}}>
                
                {/* <div style={{display: "flex", justifyContent: "space-around", borderBottom: "1px solid #333045",paddingTop:"14px", paddingBottom: "14px", margin: "-60px 5px 10px", color: "grey"}}>
                  <div className="hover:text-white cursor-pointer z-10">Daily</div>
                  <div className="hover:text-white cursor-pointer z-10">Weekly</div>
                  <div className="hover:text-white cursor-pointer z-10">Monthly</div>
                </div> */}

                <div className="px-16 py-[40px] mt-[-61px]">
                  <div className="" style={{color: "grey"}}>Revenue</div>
                  <div className="flex justify-between items-center text-3xl">
                    <div>$3,650.00</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
              </div>

            </Box>
          </Grid>
          {/* <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box
                width="100%"
                alignItems="center"
                justifyContent="center"
                borderRadius={"16px"}
                border={"1px solid rgba(72, 49, 157, 0.20)"}
                borderBottom={0}
                className="hover:scale-x-105 hover:scale-y-110 transition-all"
            >
              <LineChart/>
              <div className="!z-10" style={{background: "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 0%, rgba(72, 49, 157, 0.00) 100%)"}}>
                
                <div className="px-16 py-[40px] mt-[-60px]">
                  <div className="" style={{color: "grey"}}>Product Sales</div>
                  <div className="flex justify-between items-center text-3xl">
                    <div>1,340</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
              </div>

            </Box>
          </Grid> */}

          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            Grid 2
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            Grid 3
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
                width="100%"
                alignItems="center"
                justifyContent="center"
                borderRadius={"16px"}
                border={"1px solid rgba(72, 49, 157, 0.20)"}
                borderBottom={0}
                className="hover:scale-x-105 hover:scale-y-110 transition-all max-h-[370px] h-full"
            >
              <div className="flex flex-col gap-[10px] p-3 overflow-y-scroll h-fit removeScrollBar">
                {inventoryAlerts.map((alert, id)=> {
                  return (
                  <div className="px-3 flex justify-between items-center" key={id}>
                    <div className="flex gap-3 items-center">
                      <div className="p-3 rounded-full border border-[#332f41]">
                        {alert.icon}
                      </div>
                      <div>
                        <div className="font-bold ">{alert.title}</div>
                        <div className="text-xs leading-4 text-white opacity-40">{alert.description}</div>
                      </div>
                    </div>
                    <div>{alert.graph}</div>
                    <div className="flex flex-col">
                      <div className="text-sm font-bold">{alert.value}</div>
                      <div className="rounded text-[#00AF85] flex items-center justify-center gap-1 font-semibold">
                        <div>
                          <Arrow />
                        </div>
                        <div>{alert.percentage}</div>
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>

              <div className="z-10" style={{background: "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 0%, rgba(72, 49, 157, 0.00) 100%)"}}>
                <div className="px-16 py-[40px]">
                  <div className="" style={{color: "grey"}}>Low Inventory Alerts</div>
                  
                </div>
              </div>
            </Box>
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
                  width="100%"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={"16px"}
                  border={"1px solid rgba(72, 49, 157, 0.20)"}
                  borderBottom={0}
                  className="hover:scale-x-105 hover:scale-y-110 transition-all relative px- py-2 h-full overflow-x-hidden max-h-[370px]"
              >
                <div className="flex flex-col justify-between h-full  px-4">
                  {chats.map((chat, id)=> {
                    return(
                      <div className="relative group" key={id}>
                        <div className="flex justify-between gap-3 items-center bg-[#2F3134] rounded-xl cursor-pointer py-1 hover:bg-[#4F5153] transition-all group-hover:translate-x-[-70px]">
                          <div className="flex gap-3 ">
                            <div className="relative">
                              <img src={chat.profileAvatar} className="rounded-full"/>
                              {chat.onlineStatus==="yellow" && <div className="absolute rounded-full bottom-0 right-0 w-3.5 h-3.5 bg-[#EEE84E] border-[3px] border-[#2F3134]"></div>}
                              {chat.onlineStatus==="green" && <div className="absolute rounded-full bottom-0 right-0 w-3.5 h-3.5 bg-[#65D60D] border-[3px] border-[#2F3134]"></div>}
                              {chat.onlineStatus==="red" && <div className="absolute rounded-full bottom-0 right-0 w-3.5 h-3.5 bg-[#D60D3D] border-[3px] border-[#2F3134]"></div>}
                              {chat.onlineStatus==="grey" && <div className="absolute rounded-full bottom-0 right-0 w-3.5 h-3.5 bg-[#BFBFBF] border-[3px] border-[#2F3134]"></div>}
                            </div>
                            <div className="flex flex-col justify-center gap-1">
                              <div className="text-sm font-bold leading-5">{chat.name}</div>
                              <div className="text-xs leading-4 line-clamp-1 opacity-25">{chat.lastMessage}</div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center gap-2 pe-1">
                            <div className="text-[#7D7D7D] text-[10px] leading-3 w-max">{chat.time}</div>
                            {chat.lastMessageStatus.icon}
                          </div>
                        </div>
                        <div className="absolute top-0 z-[-1] rounded-xl flex justify-between items-center h-full px-6 w-full" style={{background: "rgba(255, 37, 37, 0.15)"}}>
                          <p>Hidden</p>
                          <IconButton>
                            <img className="cursor-pointer !z-10" src={DeleteIcon}/>
                          </IconButton>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div style={{background: "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 0%, rgba(72, 49, 157, 0.00) 100%)"}} className="absolute h-[142px] z-[-1] w-full bottom-0"></div>
              </Box>
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
                width="100%"
                alignItems="center"
                justifyContent="center"
                borderRadius={"16px"}
                border={"1px solid rgba(72, 49, 157, 0.20)"}
                borderBottom={0}
                className="hover:scale-x-105 hover:scale-y-110 transition-all relative max-h-[370px] h-full"
            >
              <img src={Card6Image} className="rounded-lg w-full max-h-[370px] object-cover" />
              <div className="w-full px-4 absolute bottom-0">
                <div className="p-4 rounded-3xl flex flex-col gap-[10px] " style={{background: "rgba(0, 0, 0, 0.42)", backdropFilter: "blur(9.5px)"}}>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-4 items-center">
                      <img src={Card6Profile} />
                      <div className="text-[18px] font-bold leading-7">
                        Jhon
                      </div>
                    </div>
                    <div className="text-[#fff] opacity-40 text-xs leading-4">Employee of the day</div>
                  </div>
                  <div className="flex justify-around items-center">
                    <div>
                      <p>87</p>
                      <p>Tasks</p>
                    </div>
                    <div className="w-0.5 h-3 bg-[#fff]/[.4]"></div>
                    <div>
                      <p>95%</p>
                      <p>Completion Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
        
                 
          
{/*   
          <Grid
            xs={12}
            sm={12}
            md={8}
            lg={8}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12}>
              <Box backgroundColor={colors.primary[400]}>
                <Box
                  mt="25px"
                  p="0 30px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.grey[100]}
                    >
                      Revenue Generated
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[500]}
                    >
                      $58,373,698
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <DownloadOutlinedIcon
                        sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                  <LineChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor={colors.primary[400]} p="30px">
                <Typography variant="h5" fontWeight="600">
                  Campaign
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
                >
                  <ProgressCircle size="125" />
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{ mt: "15px" }}
                  >
                    $48,352 revenue generated
                  </Typography>
                  <Typography>
                    Includes extra misc expenditures and costs
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box backgroundColor={colors.primary[400]}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                  <BarChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box backgroundColor={colors.primary[400]} padding="30px">
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ marginBottom: "15px" }}
                >
                  Geography Based Traffic
                </Typography>
                <Box height="200px">
                  <GeographyChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              backgroundColor={colors.primary[400]}
              maxHeight="100vh"
              overflow="auto"
              m="25px 0 0 0"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[100]}
                p="15px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Resent Transaction
                </Typography>
              </Box>
              {mockTransactions.map((transaction, i) => {
                return (
                  <Box
                    key={`${transaction}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.greenAccent[100]}
                      >
                        {transaction.txId}
                      </Typography>
                      <Typography color={colors.grey[100]}>
                        {transaction.user}
                      </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box
                      color={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                    >
                      ${transaction.cost}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    );
  };
  
  export default DashboardOverview;
  