import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import VansDetails from "./pages/Vans/VansDetails.jsx";
import startMirage from "./server.js";
import Layout from "./components/Layout.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostLayout from "./components/HostLayout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanImage from "./pages/Host/HostVanImage.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";

function App() {
  startMirage();
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path='vans/:id' element={<VansDetails />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />}/>
                <Route path="photos" element={<HostVanImage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
