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

import PersonalOverview from "./pages/personal/Overview";
import PersonalPerformance from "./pages/personal/Performance";
import PersonalCommunications from "./pages/personal/Communications";
import PersonalSchedule from "./pages/personal/Schedule";
import PersonalTasks from "./pages/personal/Tasks";
import PersonalTraining from "./pages/personal/Training";
import PersonalOther from "./pages/personal/Other";

import InventoryOverview from "./pages/inventory/Overview";

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
    {title: "Overview", to: "/personal/overview"},
    {title: "Performance", to: "/personal/performance"},
    {title: "Communications", to: "/personal/communications"},
    {title: "Schedule", to: "/personal/schedule"},
    {title: "Tasks", to: "/personal/tasks"},
    {title: "Training", to: "/personal/training"}, 
    {title: "Others", to: "/personal/others"}
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
        setSubPages(dashboardSubPages)
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
                    <Route path="/dashboard/overview" element={<DashboardOverview/>} />
                    <Route path="/dashboard/operational-snapshot" element={<DashboardOperationalSnapshot/>} />
                    <Route path="/dashboard/sales-insights" element={<DashboardSalesInsights/>} />
                    <Route path="/dashboard/marketing" element={<DashboardMarketing/>} />
                    <Route path="/dashboard/supply-chain" element={<DashboardSupplyChain/>} />
                    <Route path="/dashboard/employee-productivity" element={<DashboardEmployeeProductivity/>} />
                    <Route path="/dashboard/customer-interactions" element={<DashboardCustomerInteractions/>} />
                    <Route path="/dashboard/financials" element={<DashboardFinancials/>} />
                    <Route path="/dashboard/others" element={<DashboardOthers/>} />

                    {/* Personal Paths */}
                    <Route path="/personal/overview" element={<PersonalOverview/>} />
                    <Route path="/personal/performance" element={<PersonalPerformance/>} />
                    <Route path="/personal/communications" element={<PersonalCommunications/>} />
                    <Route path="/personal/schedule" element={<PersonalSchedule/>} />
                    <Route path="/personal/tasks" element={<PersonalTasks/>} />
                    <Route path="/personal/training" element={<PersonalTraining/>} />
                    <Route path="/personal/others" element={<PersonalOther/>} />

                    <Route path="/inventory/overview" element={<InventoryOverview />} />
                    
                    
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
