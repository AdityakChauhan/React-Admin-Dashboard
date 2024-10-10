import { useState } from "react";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import SalesPage from "./pages/SalesPage";
import UsersPage from "./pages/UsersPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen bg-slate-500 text-white overflow-hidden ">
      
      {/* BG */ }
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to bg-slate-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
