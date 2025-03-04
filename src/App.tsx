
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import Production from "./pages/Production";
import Inventory from "./pages/Inventory";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import DataManagement from "./pages/DataManagement";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// Import production nested routes
import ProductionPlanning from "./pages/production/ProductionPlanning";
import ProductionProcess from "./pages/production/ProductionProcess";
import MaterialPlanning from "./pages/production/planning/MaterialPlanning";
import CuttingPlanning from "./pages/production/planning/CuttingPlanning";
import SewingPlanning from "./pages/production/planning/SewingPlanning";
import FinishingPlanning from "./pages/production/planning/FinishingPlanning";
import CuttingProcess from "./pages/production/process/CuttingProcess";
import SewingProcess from "./pages/production/process/SewingProcess";
import QCProcess from "./pages/production/process/QCProcess";
import FinishingProcess from "./pages/production/process/FinishingProcess";
import PackagingProcess from "./pages/production/process/PackagingProcess";

// Import inventory nested routes
import InventoryStock from "./pages/inventory/InventoryStock";
import InventoryMovement from "./pages/inventory/InventoryMovement";
import InventoryMonitoring from "./pages/inventory/InventoryMonitoring";

// Import reports nested routes
import ProductionReports from "./pages/reports/ProductionReports";
import SalesReports from "./pages/reports/SalesReports";
import CuttingReport from "./pages/reports/production/CuttingReport";
import SewingReport from "./pages/reports/production/SewingReport";
import QCReport from "./pages/reports/production/QCReport";
import FinishingReport from "./pages/reports/production/FinishingReport";
import FinishComparison from "./pages/reports/production/FinishComparison";
import SalesData from "./pages/reports/sales/SalesData";
import ProductPerformance from "./pages/reports/sales/ProductPerformance";

// Import data management nested routes
import MasterData from "./pages/data/MasterData";
import MaterialsMaster from "./pages/data/master/MaterialsMaster";
import ProductsMaster from "./pages/data/master/ProductsMaster";
import SizesMaster from "./pages/data/master/SizesMaster";
import POTypesMaster from "./pages/data/master/POTypesMaster";
import TailorTypesMaster from "./pages/data/master/TailorTypesMaster";
import TailorsMaster from "./pages/data/master/TailorsMaster";
import TailorRatesMaster from "./pages/data/master/TailorRatesMaster";
import EmployeesMaster from "./pages/data/master/EmployeesMaster";

// Import admin nested routes
import AccessControl from "./pages/admin/AccessControl";
import MenuCreator from "./pages/admin/access/MenuCreator";
import DivisionManagement from "./pages/admin/access/DivisionManagement";
import UserManagement from "./pages/admin/access/UserManagement";
import ActivityLog from "./pages/admin/access/ActivityLog";

// Import finance nested routes
import PaymentManagement from "./pages/finance/PaymentManagement";
import FinancialReports from "./pages/finance/FinancialReports";
import RCAAdmin from "./pages/finance/payment/RCAAdmin";
import AdjustmentManagement from "./pages/finance/payment/AdjustmentManagement";
import RCAReports from "./pages/finance/reports/RCAReports";
import ProductionExpenseReports from "./pages/finance/reports/ProductionExpenseReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              
              {/* Production routes */}
              <Route path="/production" element={<Production />} />
              <Route path="/production/planning" element={<ProductionPlanning />} />
              <Route path="/production/planning/materials" element={<MaterialPlanning />} />
              <Route path="/production/planning/cutting" element={<CuttingPlanning />} />
              <Route path="/production/planning/sewing" element={<SewingPlanning />} />
              <Route path="/production/planning/finishing" element={<FinishingPlanning />} />
              
              <Route path="/production/process" element={<ProductionProcess />} />
              <Route path="/production/process/cutting" element={<CuttingProcess />} />
              <Route path="/production/process/sewing" element={<SewingProcess />} />
              <Route path="/production/process/qc" element={<QCProcess />} />
              <Route path="/production/process/finishing" element={<FinishingProcess />} />
              <Route path="/production/process/packaging" element={<PackagingProcess />} />
              
              {/* Inventory routes */}
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/stock" element={<InventoryStock />} />
              <Route path="/inventory/movement" element={<InventoryMovement />} />
              <Route path="/inventory/monitoring" element={<InventoryMonitoring />} />
              
              {/* Finance routes */}
              <Route path="/finance" element={<Finance />} />
              <Route path="/finance/payment" element={<PaymentManagement />} />
              <Route path="/finance/payment/rca" element={<RCAAdmin />} />
              <Route path="/finance/payment/adjustments" element={<AdjustmentManagement />} />
              <Route path="/finance/reports" element={<FinancialReports />} />
              <Route path="/finance/reports/rca" element={<RCAReports />} />
              <Route path="/finance/reports/expenses" element={<ProductionExpenseReports />} />
              
              {/* Reports section with nested routes */}
              <Route path="/reports" element={<Reports />} />
              <Route path="/reports/production" element={<ProductionReports />} />
              <Route path="/reports/production/cutting" element={<CuttingReport />} />
              <Route path="/reports/production/sewing" element={<SewingReport />} />
              <Route path="/reports/production/qc" element={<QCReport />} />
              <Route path="/reports/production/finishing" element={<FinishingReport />} />
              <Route path="/reports/production/comparison" element={<FinishComparison />} />
              
              <Route path="/reports/sales" element={<SalesReports />} />
              <Route path="/reports/sales/data" element={<SalesData />} />
              <Route path="/reports/sales/performance" element={<ProductPerformance />} />
              
              {/* Data Management section with nested routes */}
              <Route path="/data" element={<DataManagement />} />
              <Route path="/data/master" element={<MasterData />} />
              <Route path="/data/master/materials" element={<MaterialsMaster />} />
              <Route path="/data/master/products" element={<ProductsMaster />} />
              <Route path="/data/master/sizes" element={<SizesMaster />} />
              <Route path="/data/master/potypes" element={<POTypesMaster />} />
              <Route path="/data/master/tailortypes" element={<TailorTypesMaster />} />
              <Route path="/data/master/tailors" element={<TailorsMaster />} />
              <Route path="/data/master/tailorrates" element={<TailorRatesMaster />} />
              <Route path="/data/master/employees" element={<EmployeesMaster />} />
              
              {/* Admin section with nested routes */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/access" element={<AccessControl />} />
              <Route path="/admin/access/menu" element={<MenuCreator />} />
              <Route path="/admin/access/divisions" element={<DivisionManagement />} />
              <Route path="/admin/access/users" element={<UserManagement />} />
              <Route path="/admin/access/logs" element={<ActivityLog />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
