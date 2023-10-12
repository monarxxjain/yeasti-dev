import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";
import { Navigate } from "react-router-dom";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import { MySubPageSidebarProvider } from "./components/subpagebar/MySubPageBarContext";
import DashboardOverview from "./pages/dashboard/Overview";
import { useEffect } from "react";
import DashboardOperationalSnapshot from "./pages/dashboard/OperationalSnapshot";
import DashboardSalesInsights from "./pages/dashboard/SalesInsights";
import DashboardMarketing from "./pages/dashboard/Marketing";
import DashboardSupplyChain from "./pages/dashboard/SupplyChain";
import DashboardEmployeeProductivity from "./pages/dashboard/EmployeeProductivity";
import DashboardCustomerInteractions from "./pages/dashboard/CustomerInteractions";

const App = () => {
  const [theme, colorMode] = useMode();
  const dashboardSubPages = [
    {title: "Overview", to: "/dashboard"},
    {title: "Operational Snapshot", to: "/dashboard/operational-snapshot"},
    {title: "Sales Insights", to: "/dashboard/sales-insights"},
    {title: "Customer Interactions", to: "/dashboard/customer-interactions"},
    {title: "Employee Productivity", to: "/dashboard/employee-productivity"},
    {title: "Marketing", to: "/dashboard/marketing"},
    {title: "Supply Chain", to: "/dashboard/supply-chain"},
    {title: "Overview", to: "/dashboard/overview"},
    {title: "Overview", to: "/dashboard/overview"},
    {title: "Overview", to: "/dashboard/overview"},
    {title: "Overview", to: "/dashboard/overview"},
    {title: "Overview", to: "/dashboard/overview"},
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
                  <Route path="/" element={<Navigate to="/dashboard"/>}/>
                  <Route path="/dashboard" element={<><DashboardOverview/></>} />
                  <Route path="/dashboard/operational-snapshot" element={<><DashboardOperationalSnapshot/></>} />
                  <Route path="/dashboard/sales-insights" element={<><DashboardSalesInsights/></>} />
                  <Route path="/dashboard/marketing" element={<><DashboardMarketing/></>} />
                  <Route path="/dashboard/supply-chain" element={<><DashboardSupplyChain/></>} />
                  <Route path="/dashboard/employee-productivity" element={<><DashboardEmployeeProductivity/></>} />
                  <Route path="/dashboard/customer-interactions" element={<><DashboardCustomerInteractions/></>} />
                </Routes>
              </MySubPageSidebarProvider>



              <Routes>
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
