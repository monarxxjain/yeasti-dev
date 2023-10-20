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

import {dashboardSubPages, personalSubPages, inventorySubPages, salesSubPages, ordersSubPages, reportsSubPages, administrationSubPages, yeastiAISubPages, customersSubPages, suppliersSubPages, logisticsSubPages, marketingSubPages, financialsSubPages, complianceSubPages} from './SubPagePaths'
const App = () => {
  const [theme, colorMode] = useMode();
 

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
