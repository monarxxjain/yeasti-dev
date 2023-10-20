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


export {dashboardSubPages, personalSubPages, inventorySubPages, salesSubPages, ordersSubPages, reportsSubPages, administrationSubPages, yeastiAISubPages, customersSubPages, suppliersSubPages, logisticsSubPages, marketingSubPages, financialsSubPages, complianceSubPages}