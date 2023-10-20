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
import InventoryProductList from "./pages/inventory/ProductList";
import InventoryAddNewProduct from "./pages/inventory/AddNewProduct";
import InventoryEditProduct from "./pages/inventory/EditProduct";
import InventoryStockManagement from "./pages/inventory/StockManagement";
import InventoryAnalytics from "./pages/inventory/Analytics";
import InventoryAuditing from "./pages/inventory/Auditing";
import InventoryOther from "./pages/inventory/Other";

import SalesOverview from "./pages/sales/Overview";
import SalesTargets from "./pages/sales/SalesTargets";
import SalesByRegion from "./pages/sales/SalesByRegion";
import SalesTrends from "./pages/sales/SalesTrends";
import SalesForecasting from "./pages/sales/Sales.Forecasting";
import SalesRevenueAnalysis from "./pages/sales/RevenueAnalysis";
import SalesInvoices from "./pages/sales/SalesInvoices";
import SalesRefundsAndReturns from "./pages/sales/RefundsAndReturns";
import SalesPerformance from "./pages/sales/Performance";

import OrdersOverview from "./pages/orders/Overview";
import OrdersNewOrder from "./pages/orders/NewOrder";
import OrdersPendingOrders from "./pages/orders/PendingOrders";
import OrdersHistory from "./pages/orders/OrderHistory";
import OrdersTracking from "./pages/orders/OrderTracking";
import OrdersDeliveryManagement from "./pages/orders/DeliveryManagement";
import OrdersOther from "./pages/orders/Other";

import AdministrationAddNewUser from "./pages/administration/AddNewuser";
import AdministrationEditUser from "./pages/administration/EditUser";
import AdministrationSystemSettings from "./pages/administration/SystemSettings";
import AdministrationBillingAndPayments from "./pages/administration/BillingAndPayments";
import AdministrationSupportAndHelpdesk from "./pages/administration/SupportAndHelpdesk";
import AdministrationVacationRequests from "./pages/administration/VacationRequests";
import AdministrationHRPolicies from "./pages/administration/HRPolicies";
import AdministrationEmployeeTrainingManagement from "./pages/administration/EmployeeTrainingManagement";
import AdministrationShiftScheduling from "./pages/administration/ShiftScheduling";
import ReportsOverview from "./pages/reports/Overview";
import ReportsSalesReports from "./pages/reports/SalesReports";
import ReportsInventoryReports from "./pages/reports/InventoryReports";
import ReportsOrderReports from "./pages/reports/OrderReports";
import ReportsEmployeePerformanceReports from "./pages/reports/EmployeePerformanceReports";
import ReportsCutomerFeedback from "./pages/reports/CustomerFeedback";
import ReportsFinancialReports from "./pages/reports/FinancialReports";
import ReportsMarketingAnalysis from "./pages/reports/MarketingAnalysis";
import ReportsSupplierAndContactReports from "./pages/reports/SupplierAndContactReports";

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
  const inventorySubPages = [
    {title: "Overview", to: "/inventory/overview"},
    {title: "Product List", to: "/inventory/product-list"},
    {title: "Add New Product", to: "/inventory/add-new-product"},
    {title: "Edit Product", to: "/inventory/edit-product"},
    {title: "Stock Management", to: "/inventory/stock-management"},
    {title: "Analytics", to: "/inventory/analytics"}, 
    {title: "Auditing", to: "/inventory/auditing"}, 
    {title: "Others", to: "/inventory/other"}
  ]
  const salesSubPages = [
    {title: "Overview", to: "/sales/overview"},
    {title: "Sales Targets", to: "/sales/sales-targets"},
    {title: "Sales By Region", to: "/sales/sales-by-region"},
    {title: "Sales Trends", to: "/sales/sales-trends"},
    {title: "Sales Forecasting", to: "/sales/sales-forecasting"},
    {title: "Revenue Analysis", to: "/sales/revenue-analysis"}, 
    {title: "Sales Invoices", to: "/sales/sales-invoices"}, 
    {title: "Refunds And Returns", to: "/sales/refunds-and-returns"},
    {title: "Performance", to: "/sales/performance"}
  ]
  const ordersSubPages = [
    {title: "Overview", to: "/orders/overview"},
    {title: "New Order", to: "/orders/new-order"},
    {title: "Pending Orders", to: "/orders/pending-orders"},
    {title: "Order History", to: "/orders/order-history"},
    {title: "Order Tracking", to: "/orders/order-tracking"},
    {title: "Delivery Management", to: "/orders/delivery-management"}, 
    {title: "Other", to: "/orders/other"}
  ]
  const reportsSubPages = [
    {title: "Overview", to: "/reports/overview"},
    {title: "Sales Reports", to: "/reports/sales-reports"},
    {title: "Inventory Reports", to: "/reports/inventory-reports"},
    {title: "Employee Performance Reports", to: "/reports/employee-performance-reports"},
    {title: "Customer Feedback", to: "/reports/customer-feedback"},
    {title: "Financial Reports", to: "/reports/financial-reports"}, 
    {title: "Marketing Analysis", to: "/reports/marketing-analysis"},
    {title: "Supplier And Contact Reports", to: "/reports/supplier-and-contact-reports"}
  ]
  const administrationSubPages = [
    {title: "Add New User", to: "/administration/add-new-user"},
    {title: "Edit User", to: "/administration/edit-user"},
    {title: "System Settings", to: "/administration/system-settings"},
    {title: "Billings And Payments", to: "/administration/billings-and-payments"},
    {title: "Support And Helpdesk", to: "/administration/support-and-helpdesk"},
    {title: "Shift Scheduling", to: "/administration/shift-scheduling"}, 
    {title: "Vacation Requests", to: "/administration/vacation-requests"},
    {title: "HR Policies", to: "/administration/hr-policies"},
    {title: "Employee Training Management", to: "/administration/employee-training-management"}
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
    
      case "Inventory":
        setSubPages(inventorySubPages)
        break;
    
      case "Sales":
        setSubPages(salesSubPages)
        break;
    
      case "Orders":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Reports":
        setSubPages(reportsSubPages)
        break;
    
    
      case "Administration":
        setSubPages(administrationSubPages)
        break;
    
    
      case "Yeasti Ai":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Customers":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Suppliers":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Logistics":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Marketing":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Financials":
        setSubPages(ordersSubPages)
        break;
    
    
      case "Compliance":
        setSubPages(ordersSubPages)
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

                    {/* Inventory Paths */}
                    <Route path="/inventory/overview" element={<InventoryOverview />} />
                    <Route path="/inventory/product-list" element={<InventoryProductList />} />
                    <Route path="/inventory/add-new-product" element={<InventoryAddNewProduct />} />
                    <Route path="/inventory/edit-product" element={<InventoryEditProduct />} />
                    <Route path="/inventory/stock-management" element={<InventoryStockManagement />} />
                    <Route path="/inventory/analytics" element={<InventoryAnalytics />} />
                    <Route path="/inventory/auditing" element={<InventoryAuditing />} />
                    <Route path="/inventory/other" element={<InventoryOther />} />
                    
                    {/* Sales Paths */}
                    <Route path="/sales/overview" element={<SalesOverview />} />
                    <Route path="/sales/sales-targets" element={<SalesTargets />} />
                    <Route path="/sales/sales-by-region" element={<SalesByRegion />} />
                    <Route path="/sales/sales-trends" element={<SalesTrends />} />
                    <Route path="/sales/sales-forecasting" element={<SalesForecasting />} />
                    <Route path="/sales/revenue-analysis" element={<SalesRevenueAnalysis />} />
                    <Route path="/sales/sales-invoices" element={<SalesInvoices />} />
                    <Route path="/sales/refunds-and-returns" element={<SalesRefundsAndReturns />} />
                    <Route path="/sales/performance" element={<SalesPerformance />} />

                    {/* Orders Paths */}
                    <Route path="/orders/overview" element={<OrdersOverview />} />
                    <Route path="/orders/new-order" element={<OrdersNewOrder />} />
                    <Route path="/orders/pending-orders" element={<OrdersPendingOrders />} />
                    <Route path="/orders/order-history" element={<OrdersHistory />} />
                    <Route path="/orders/order-tracking" element={<OrdersTracking />} />
                    <Route path="/orders/delivery-management" element={<OrdersDeliveryManagement />} />
                    <Route path="/orders/other" element={<OrdersOther />} />

                    {/* Reports Paths */}
                    <Route path="/reports/overview" element={<ReportsOverview />} />
                    <Route path="/reports/sales-reports" element={<ReportsSalesReports />} />
                    <Route path="/reports/inventory-reports" element={<ReportsInventoryReports />} />
                    <Route path="/reports/order-reports" element={<ReportsOrderReports />} />
                    <Route path="/reports/employee-performance-reports" element={<ReportsEmployeePerformanceReports />} />
                    <Route path="/reports/customer-feedback" element={<ReportsCutomerFeedback />} />  
                    <Route path="/reports/financial-reports" element={<ReportsFinancialReports />} />  
                    <Route path="/reports/marketing-analysis" element={<ReportsMarketingAnalysis />} />  
                    <Route path="/reports/supplier-and-contact-reports" element={<ReportsSupplierAndContactReports />} />  

                    {/* Administration Paths */}
                    <Route path="/administration/add-new-user" element={<AdministrationAddNewUser />} />
                    <Route path="/administration/edit-user" element={<AdministrationEditUser/>} />
                    <Route path="/administration/system-settings" element={<AdministrationSystemSettings/>} />
                    <Route path="/administration/billings-and-payments" element={<AdministrationBillingAndPayments/>} />
                    <Route path="/administration/support-and-helpdesk" element={<AdministrationSupportAndHelpdesk/>} />
                    <Route path="/administration/shift-scheduling" element={<AdministrationShiftScheduling/>} />
                    <Route path="/administration/vacation-requests" element={<AdministrationVacationRequests/>} />
                    <Route path="/administration/hr-policies" element={<AdministrationHRPolicies/>} />
                    <Route path="/administration/employee-training-management" element={<AdministrationEmployeeTrainingManagement/>} />

                    
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
