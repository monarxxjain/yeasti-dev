import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";
import { Navigate } from "react-router-dom";
import { MySubPageSidebarProvider } from "./components/subpagebar/MySubPageBarContext";
import DashboardOverview from "./pages/dashboard/Overview";
import DashboardOperationalSnapshot from "./pages/dashboard/OperationalSnapshot";
import DashboardSalesInsights from "./pages/dashboard/SalesInsights";
import DashboardMarketing from "./pages/dashboard/Marketing";
import DashboardSupplyChain from "./pages/dashboard/SupplyChain";
import DashboardEmployeeProductivity from "./pages/dashboard/EmployeeProductivity";
import DashboardCustomerInteractions from "./pages/dashboard/CustomerInteractions";

const App = () => {
  const [theme, colorMode] = useMode();
  const dashboardSubPages = [
    {title: "Overview", to: "/dashboard/overview"},
    {title: "Operational Snapshot", to: "/dashboard/operational-snapshot"},
    {title: "Sales Insights", to: "/dashboard/sales-insights"},
    {title: "Customer Interactions", to: "/dashboard/customer-interactions"},
    {title: "Employee Productivity", to: "/dashboard/employee-productivity"},
    {title: "Marketing", to: "/dashboard/marketing"},
    {title: "Supply Chain", to: "/dashboard/supply-chain"}
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
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div id="rightBody" style={{ height: "100%", width: "100%" }}>
            <main style={{display: "block", width: "min-content !important"}}>
              <Topbar />
              <MySubPageSidebarProvider subPages={dashboardSubPages}>
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
                </Routes>
              </MySubPageSidebarProvider>

              {/* <MySubPageSidebarProvider subPages={personalSubPages}>
                <Routes>
                  <Route path="/personal/sub1" element={<><DashboardOverview/></>} />
                  <Route path="/personal/sub2" element={<><DashboardOperationalSnapshot/></>} />
                  <Route path="/personal/sub3" element={<><DashboardSalesInsights/></>} />
                  <Route path="/personal/sub4" element={<><DashboardMarketing/></>} />
                  <Route path="/personal/sub5" element={<><DashboardSupplyChain/></>} />
                  <Route path="/personal/sub6" element={<><DashboardEmployeeProductivity/></>} />
                  <Route path="/personal/sub7" element={<><DashboardCustomerInteractions/></>} />
                </Routes>
              </MySubPageSidebarProvider> */}

            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
