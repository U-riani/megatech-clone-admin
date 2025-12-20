import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import OrdersList from "./pages/OrdersList";
import OrderDetails from "./pages/OrderDetails";

export default function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
