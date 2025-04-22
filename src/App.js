import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SchemaMarkup from "./components/common/SchemaMarkup";
import MetaTags from "./components/common/MetaTags";
import AboutUs from "./components/screens/about-us/AboutUs";
import ContactUs from "./components/screens/contact-us/ContactUs";
import Services from "./components/screens/services/Services";
import Technologies from "./components/screens/technologies/Technologies";
import Careers from "./components/screens/careers/Careers";
import Partners from "./components/screens/partners/Partners";
import Clients from "./components/screens/clients/Clients";
import StockExchange from "./components/screens/industries/stock-exchange/StockExchange";
import ECommerce from "./components/screens/industries/ecommerce/ECommerce";
import Transportation from "./components/screens/industries/transportation/Transportation";
import NotFound from "./components/pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';
import Industries from "./components/screens/industries/Industries";

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Global default meta tags */}
        <MetaTags />
        <SchemaMarkup />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/stock-exchange" element={<StockExchange />} />
          <Route path="/industries/ecommerce" element={<ECommerce />} />
          <Route path="/industries/transportation" element={<Transportation />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
