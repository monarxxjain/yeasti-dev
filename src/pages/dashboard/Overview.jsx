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


  const DashboardOverview = () => {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const colors = tokens(theme.palette.mode);
    
    return (
      <Box m="34px" marginX={"42px"}>
        {/* HEADER */}

  
        {/* GRID & CHARTS */}
        <Grid container rowSpacing={"40px"} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="431,225"
                subtitle="Sales Obtained"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="32,441"
                subtitle="New Clients"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid> */}

          
          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
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
                
                <div style={{display: "flex", justifyContent: "space-around", borderBottom: "1px solid #333045",paddingTop:"14px", paddingBottom: "14px", margin: "-60px 5px 10px", color: "grey"}}>
                  <div className="hover:text-white cursor-pointer z-10">Daily</div>
                  <div className="hover:text-white cursor-pointer z-10">Weekly</div>
                  <div className="hover:text-white cursor-pointer z-10">Monthly</div>
                </div>

                <div className="px-16 py-4 pb-6">
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
          <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
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
                
                <div className="px-16 py-[48px] mt-[-60px]">
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
  