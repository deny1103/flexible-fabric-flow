
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

// Import nested routes
import ProductionReports from "./pages/reports/ProductionReports";
import SalesReports from "./pages/reports/SalesReports";
import MasterData from "./pages/data/MasterData";

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
              <Route path="/production" element={<Production />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/finance" element={<Finance />} />
              
              {/* Reports section with nested routes */}
              <Route path="/reports" element={<Reports />} />
              <Route path="/reports/production" element={<ProductionReports />} />
              <Route path="/reports/sales" element={<SalesReports />} />
              
              {/* Data Management section with nested routes */}
              <Route path="/data" element={<DataManagement />} />
              <Route path="/data/master" element={<MasterData />} />
              
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
