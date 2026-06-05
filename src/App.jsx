import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import TheTech from "./pages/TheTech";
import Performance from "./pages/Performance";
import Results from "./pages/Results";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OrderForms from "./pages/OrderForms";
import TechnicalData from "./pages/TechnicalData";
import Marketing from "./pages/Marketing";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/the-tech" element={<TheTech />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/results" element={<Results />} />
          <Route path="/support" element={<Support />} />
          <Route path="/order-forms" element={<OrderForms />} />
          <Route path="/technical-data" element={<TechnicalData />} />
          <Route path="/marketing" element={<Marketing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
