import { useEffect, useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import { Navigate } from "react-router-dom";
import { MySubPageSidebarProvider } from "./components/subpagebar/MySubPageBarContext";

import Topbar from "./pages/global/Topbar";

import DashboardOverview from "./pages/dashboard/Overview";
import DashboardOperationalSnapshot from "./pages/dashboard/OperationalSnapshot";
import DashboardSalesInsights from "./pages/dashboard/SalesInsights";
import DashboardMarketing from "./pages/dashboard/Marketing";
import DashboardSupplyChain from "./pages/dashboard/SupplyChain";
import DashboardEmployeeProductivity from "./pages/dashboard/EmployeeProductivity";
import DashboardCustomerInteractions from "./pages/dashboard/CustomerInteractions";
import DashboardFinancials from "./pages/dashboard/Financials";
import DashboardOthers from "./pages/dashboard/Others";

import PersonalSub1 from "./pages/personal/PersonalSub1";
import PersonalSub2 from "./pages/personal/PersonalSub2";
import PersonalSub3 from "./pages/personal/PersonalSub3";
import PersonalSub4 from "./pages/personal/PersonalSub4";
import PersonalSub5 from "./pages/personal/PersonalSub5";
import PersonalSub6 from "./pages/personal/PersonalSub6";
import PersonalSub7 from "./pages/personal/PersonalSub7";

const App = () => {
  const [theme, colorMode] = useMode();
  const dashboardSubPages = [
    {title: "Overview", to: "/dashboard/overview"},
    {title: "Operational Snapshot", to: "/dashboard/operational-snapshot"},
    {title: "Sales Insights", to: "/dashboard/sales-insights"},
    {title: "Customer Interactions", to: "/dashboard/customer-interactions"},
    {title: "Employee Productivity", to: "/dashboard/employee-productivity"},
    {title: "Marketing", to: "/dashboard/marketing"},
    {title: "Supply Chain", to: "/dashboard/supply-chain"},
    {title: "Financials", to: "/dashboard/financials"},
    {title: "Others", to: "/dashboard/others"}
  ]
  const personalSubPages = [
    {title: "PersonalSub1", to: "/personal/sub1"},
    {title: "PersonalSub2", to: "/personal/sub2"},
    {title: "PersonalSub3", to: "/personal/sub3"},
    {title: "PersonalSub4", to: "/personal/sub4"},
    {title: "PersonalSub5", to: "/personal/sub5"},
    {title: "PersonalSub6", to: "/personal/sub6"}, 
    {title: "PersonalSub7", to: "/personal/sub7"}
  ]
  window.addEventListener("orientationchange", ()=>{
    window.location.reload()
  })
  
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  console.log(selectedTab)
  
  const [subPages, setSubPages] = useState(dashboardSubPages)
  useEffect(()=>{
    switch (selectedTab) {
      case "Dashboard":
        setSubPages(dashboardSubPages)
        break;
    
      case "Personal":
        setSubPages(personalSubPages)
        break;
    
      default:
        break;
    }
  },[selectedTab])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider setSelectedTab={setSelectedTab}>
          <div id="rightBody" style={{ height: "100%", width: "100%" }}>
            <main style={{display: "block", width: "min-content !important"}}>
              <Topbar />
              <MySubPageSidebarProvider subPages={subPages}>
                <Routes>

                  {/* Dashboard Paths */}
                  <Route path="/" element={<Navigate to="/dashboard/overview"/>}/>
                  <Route path="/dashboard/overview" element={<><DashboardOverview/></>} />
                  <Route path="/dashboard/operational-snapshot" element={<><DashboardOperationalSnapshot/></>} />
                  <Route path="/dashboard/sales-insights" element={<><DashboardSalesInsights/></>} />
                  <Route path="/dashboard/marketing" element={<><DashboardMarketing/></>} />
                  <Route path="/dashboard/supply-chain" element={<><DashboardSupplyChain/></>} />
                  <Route path="/dashboard/employee-productivity" element={<><DashboardEmployeeProductivity/></>} />
                  <Route path="/dashboard/customer-interactions" element={<><DashboardCustomerInteractions/></>} />
                  <Route path="/dashboard/financials" element={<><DashboardFinancials/></>} />
                  <Route path="/dashboard/others" element={<><DashboardOthers/></>} />

                  {/* Personal Paths */}
                  <Route path="/personal/sub1" element={<><PersonalSub1/></>} />
                  <Route path="/personal/sub2" element={<><PersonalSub2/></>} />
                  <Route path="/personal/sub3" element={<><PersonalSub3/></>} />
                  <Route path="/personal/sub4" element={<><PersonalSub4/></>} />
                  <Route path="/personal/sub5" element={<><PersonalSub5/></>} />
                  <Route path="/personal/sub6" element={<><PersonalSub6/></>} />
                  <Route path="/personal/sub7" element={<><PersonalSub7/></>} />

                  
                </Routes>
              </MySubPageSidebarProvider>

            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
