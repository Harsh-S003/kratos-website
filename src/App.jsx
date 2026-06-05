import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
import TermandConditions from "./pages/TermandConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NonCFInsole from "./pages/NonCFInsole";
import Register from "./pages/Register";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/the-tech" element={<TheTech />} /> */}
          {/* <Route path="/performance" element={<Performance />} /> */}
          {/* <Route path="/results" element={<Results />} /> */}
          {/* <Route path="/support" element={<Support />} /> */}
          <Route path="/order-forms" element={<OrderForms />} />
          <Route path="/technical-data" element={<TechnicalData />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/terms-and-conditions" element={<TermandConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/non-cf-insole" element={<NonCFInsole />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
