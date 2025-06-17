import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth"
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import FilterSidebar from "./components/FilterSidebar";
import ProductModal from "./components/ProductModal";
import KidsProduct from './Pages/KidsProduct';
import Camera from "./Pages/Camera";
import ProductRecommendations from "./components/ProductRecommendations";
import MeasurementResults from "./components/MeasurementResults";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/productModal" element={<ProductModal />} />
        <Route path="/FilterSidebar" element={<FilterSidebar />} />
        <Route path="/KidsProduct" element={<KidsProduct />} />
          <Route path="/Camera" element={<Camera />} />
            <Route path="/ProductRecommendations" element={<ProductRecommendations />} />
            <Route path="/MeasurementResults" element={<MeasurementResults />} />
      </Routes>
    </Router>
  );
};

export default App;
