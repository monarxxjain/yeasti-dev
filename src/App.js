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

import YeastiAskYeasti from "./pages/yeastiAI/AskYeasti";
import YeastiHepAndguidance from "./pages/yeastiAI/HelpAndGuidance";
import YeastiSavedQueries from "./pages/yeastiAI/SavedQueries";
import YeastiFAQs from "./pages/yeastiAI/FAQ's";

import CustomerCustomerList from "./pages/customers/CustomerList";
import CustomerNewCustomer from "./pages/customers/NewCustomer";
import CustomerFeedbackAndReviews from "./pages/customers/FeedbackAndReviews";
import CustomerCustomerInsightsAndAnalytics from "./pages/customers/CustomerInsightsAndAnalytics";
import CustomerOngoingCustomerInquiries from "./pages/customers/OngoingCustomerInquiries";
import CustomerOther from "./pages/customers/Otehr";

import SupplierSupplierList from "./pages/suppliers/SupplierList";
import SupplierNewSupplier from "./pages/suppliers/NewSupplier";
import SupplierSupplierInteraction from "./pages/suppliers/SupplierInteraction";
import SupplierContractManagement from "./pages/suppliers/ContractManagement";
import SupplierOngoingSupplierInquiries from "./pages/suppliers/OngoingSupplierInquiries";
import SupplierOther from "./pages/suppliers/Other";

import LogisticsTransportationManagement from "./pages/logistics/TransportationManagement";
import LogisticsWarehouseManagement from "./pages/logistics/WarehouseManagement";
import LogisticsInventoryTracking from "./pages/logistics/InventoryTracking";
import LogisticsDeliveryScheduling from "./pages/logistics/DeliveryScheduling";
import LogisticsRouteOptimization from "./pages/logistics/RouteOptimisation";
import LogisticsLogisticsAnalytics from "./pages/logistics/LogisticsAnalytics";
import LogisticsLogisticSupport from "./pages/logistics/LogisticSupport";

import MarketingCampaignManagement from "./pages/marketing/CampaignManagement";
import MarketingContentCreation from "./pages/marketing/ContentCreation";
import MarketingCustomerEngagement from "./pages/marketing/CustomerEngagement";
import MarketingSEOAndSEMManagement from "./pages/marketing/SEO_SEM_Management";
import MarketingSocialMediaManagement from "./pages/marketing/SocialMediaManagement";
import MarketingEmailMarketing from "./pages/marketing/EmailMarketing";
import MarketingMarketingAnalytics from "./pages/marketing/MarketingAnalytics";
import MarketingPromotionsAndEvents from "./pages/marketing/PromotionsAndEvents";

import FinancialsBudgetManagement from "./pages/financials/BudgetManagement";
import FinancialsInvoicing from "./pages/financials/Invoicing";
import FinancialsExpenseTracking from "./pages/financials/ExpenseTracking";
import FinancialsRevenueTracking from "./pages/financials/RevenueTracking";
import FinancialsFinancialReporting from "./pages/financials/FinancialReporting";
import FinancialsPayrollManagement from "./pages/financials/PayrollManagement";
import FinancialsAssetManagement from "./pages/financials/AssetManagement";
import FinancialsTaxManagement from "./pages/financials/TaxManagement";

import ComplianceLicensingAndPermits from "./pages/compliance/LicensingAndPermits";
import ComplianceRegulatoryReporting from "./pages/compliance/RegulatoryReporting";
import ComplianceStandardsAndCertifications from "./pages/compliance/StandardsAndCertifications";
import ComplianceAuditManagement from "./pages/compliance/AuditManagement";
import ComplianceTrainingAndWorkshops from "./pages/compliance/TrainingAndWorkshops";
import ComplianceViolationTracking from "./pages/compliance/ViolationTracking";
import CompliancePolicyManagement from "./pages/compliance/PolicyManagement";
import CompliancePartnerCompliance from "./pages/compliance/PartnerCompliance";

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
  const yeastiAISubPages = [
    {title: "Ask Yeasti", to: "/yeasti/ask-yeasti"},
    {title: "Saved Queries", to: "/yeasti/saved-queries"},
    {title: "Help And Guidance", to: "/yeasti/help-and-guidance"},
    {title: "FAQ's", to: "/yeasti/faqs"}
  ]
  const customersSubPages = [
    {title: "Customer List", to: "/customers/customer-list"},
    {title: "New Customer", to: "/customers/new-customer"},
    {title: "Feedback And Reviews", to: "/customers/feedback-and-reviews"},
    {title: "Customer Insights and Analytics", to: "/customers/customer-insights-and-analytics"},
    {title: "Ongoing Customer Inquiries ", to: "/customers/ongoing-customer-inquiries "},
    {title: "Other", to: "/customers/other"}, 
  ]
  const suppliersSubPages = [
    {title: "Supplier List", to: "/suppliers/supplier-list"},
    {title: "New Supplier", to: "/suppliers/new-supplier"},
    {title: "Supplier Interaction", to: "/suppliers/supplier-interaction"},
    {title: "Contract Management", to: "/suppliers/contract-management"},
    {title: "Ongoing Supplier Inquiries ", to: "/suppliers/ongoing-supplier-inquiries "},
    {title: "Other", to: "/suppliers/other"}, 
  ]
  const logisticsSubPages = [
    {title: "Transportation Management", to: "/logistics/transportation-management"},
    {title: "Warehouse Management", to: "/logistics/warehouse-management"},
    {title: "Inventory Tracking", to: "/logistics/inventory-tracking"},
    {title: "Delivery Scheduling", to: "/logistics/delivery-scheduling"},
    {title: "Route Optimization", to: "/logistics/route-optimization"},
    {title: "Logistics Analytics", to: "/logistics/logistics-analytics"}, 
    {title: "Logistic Support", to: "/logistics/logistic-support"}, 
  ]
  const marketingSubPages = [
    {title: "Campaign Management", to: "/marketing/campaign-management"},
    {title: "Content Creation", to: "/marketing/content-creation"},
    {title: "Customer Engagement", to: "/marketing/customer-engagement"},
    {title: "SEO and SEM Management", to: "/marketing/seo-and-sem-management"},
    {title: "Social Media Management", to: "/marketing/social-media-management"},
    {title: "Email Marketing", to: "/marketing/email-marketing"}, 
    {title: "Marketing Analytics", to: "/marketing/marketing-analytics"}, 
    {title: "Promotions and Events", to: "/marketing/promotions-and-events"}, 
  ]
  const financialsSubPages = [
    {title: "Budget Management", to: "/financials/budget-management"},
    {title: "Invoicing", to: "/financials/invoicing"},
    {title: "Expense Tracking", to: "/financials/expense-tracking"},
    {title: "Revenue Tracking", to: "/financials/revenue-tracking"},
    {title: "Financial Reporting", to: "/financials/financial-reporting"},
    {title: "Payroll Management", to: "/financials/payroll-management"}, 
    {title: "Asset Management", to: "/financials/asset-management"}, 
    {title: "Tax Management", to: "/financials/tax-management"}, 
  ]
  const complianceSubPages = [
    {title: "Licensing and Permits", to: "/compliance/licensing-and-permits"},
    {title: "Regulatory Reporting", to: "/compliance/regulatory-reporting"},
    {title: "Standards and Certifications", to: "/compliance/standards-and-certifications"},
    {title: "Audit Management", to: "/compliance/audit-management"},
    {title: "Training and Workshops", to: "/compliance/training-and-workshops"},
    {title: "Violation Tracking", to: "/compliance/violation-tracking"}, 
    {title: "Policy Management", to: "/compliance/policy-management"}, 
    {title: "Partner Compliance", to: "/compliance/partner-compliance"}, 
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
        setSubPages(yeastiAISubPages)
        break;
    
    
      case "Customers":
        setSubPages(customersSubPages)
        break;
    
    
      case "Suppliers":
        setSubPages(suppliersSubPages)
        break;
    
    
      case "Logistics":
        setSubPages(logisticsSubPages)
        break;
    
    
      case "Marketing":
        setSubPages(marketingSubPages)
        break;
    
    
      case "Financials":
        setSubPages(financialsSubPages)
        break;
    
    
      case "Compliance":
        setSubPages(complianceSubPages)
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

                    {/* YeastiAI Paths */}
                    <Route path="/yeasti/ask-yeasti" element={<YeastiAskYeasti />} />
                    <Route path="/yeasti/saved-queries" element={<YeastiSavedQueries />} />
                    <Route path="/yeasti/help-and-guidance" element={<YeastiHepAndguidance />} />
                    <Route path="/yeasti/faqs" element={<YeastiFAQs />} />

                    {/* Customers Paths */}
                    <Route path="/customers/customer-list" element={<CustomerCustomerList />} />
                    <Route path="/customers/new-customer" element={<CustomerNewCustomer />} />
                    <Route path="/customers/feedback-and-reviews" element={<CustomerFeedbackAndReviews />} />
                    <Route path="/customers/customer-insights-and-analytics" element={<CustomerCustomerInsightsAndAnalytics />} />
                    <Route path="/customers/ongoing-customer-inquiries" element={<CustomerOngoingCustomerInquiries />} />
                    <Route path="/customers/other" element={<CustomerOther />} />

                    {/* Suppliers Paths */}
                    <Route path="/suppliers/supplier-list" element={<SupplierSupplierList />} />
                    <Route path="/suppliers/new-supplier" element={<SupplierNewSupplier />} />
                    <Route path="/suppliers/supplier-interaction" element={<SupplierSupplierInteraction />} />
                    <Route path="/suppliers/contract-management" element={<SupplierContractManagement />} />
                    <Route path="/suppliers/ongoing-supplier-inquiries" element={<SupplierOngoingSupplierInquiries />} />
                    <Route path="/suppliers/other" element={<SupplierOther />} />

                    {/* Logistics Paths */}
                    <Route path="/logistics/transportation-management" element={<LogisticsTransportationManagement />} />
                    <Route path="/logistics/warehouse-management" element={<LogisticsWarehouseManagement />} />
                    <Route path="/logistics/inventory-tracking" element={<LogisticsInventoryTracking />} />
                    <Route path="/logistics/delivery-scheduling" element={<LogisticsDeliveryScheduling />} />
                    <Route path="/logistics/route-optimization" element={<LogisticsRouteOptimization />} />
                    <Route path="/logistics/logistics-analytics" element={<LogisticsLogisticsAnalytics />} />
                    <Route path="/logistics/logistic-support" element={<LogisticsLogisticSupport />} />

                    {/* Marketing Paths */}
                    <Route path="/marketing/campaign-management" element={<MarketingCampaignManagement />} />
                    <Route path="/marketing/content-creation" element={<MarketingContentCreation />} />
                    <Route path="/marketing/customer-engagement" element={<MarketingCustomerEngagement />} />
                    <Route path="/marketing/seo-and-sem-management" element={<MarketingSEOAndSEMManagement />} />
                    <Route path="/marketing/social-media-management" element={<MarketingSocialMediaManagement />} />
                    <Route path="/marketing/email-marketing" element={<MarketingEmailMarketing />} />
                    <Route path="/marketing/marketing-analytics" element={<MarketingMarketingAnalytics />} />
                    <Route path="/marketing/promotions-and-events" element={<MarketingPromotionsAndEvents />} />

                    {/* Financials Paths */}
                    <Route path="/financials/budget-management" element={<FinancialsBudgetManagement />} />
                    <Route path="/financials/invoicing" element={<FinancialsInvoicing />} />
                    <Route path="/financials/expense-tracking" element={<FinancialsExpenseTracking />} />
                    <Route path="/financials/revenue-tracking" element={<FinancialsRevenueTracking />} />
                    <Route path="/financials/financial-reporting" element={<FinancialsFinancialReporting />} />
                    <Route path="/financials/payroll-management" element={<FinancialsPayrollManagement />} />
                    <Route path="/financials/asset-management" element={<FinancialsAssetManagement />} />
                    <Route path="/financials/tax-management" element={<FinancialsTaxManagement />} />

                    {/* Compliance Paths */}
                    <Route path="/compliance/licensing-and-permits" element={<ComplianceLicensingAndPermits />} />
                    <Route path="/compliance/regulatory-reporting" element={<ComplianceRegulatoryReporting />} />
                    <Route path="/compliance/standards-and-certifications" element={<ComplianceStandardsAndCertifications />} />
                    <Route path="/compliance/audit-management" element={<ComplianceAuditManagement />} />
                    <Route path="/compliance/training-and-workshops" element={<ComplianceTrainingAndWorkshops />} />
                    <Route path="/compliance/violation-tracking" element={<ComplianceViolationTracking />} />
                    <Route path="/compliance/policy-management" element={<CompliancePolicyManagement />} />
                    <Route path="/compliance/partner-compliance" element={<CompliancePartnerCompliance />} />

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
