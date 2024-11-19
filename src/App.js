// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import MetaTags from "./components/common/MetaTags";
// import AboutUs from "./components/screens/about-us/AboutUs";
// import ContactUs from "./components/screens/contact-us/ContactUs";
// import Services from "./components/screens/services/Services";
// import Technologies from "./components/screens/technologies/Technologies";
// import Careers from "./components/screens/careers/Careers";
// import Partners from "./components/screens/partners/Partners";
// import Clients from "./components/screens/clients/Clients";
// import StockExchange from "./components/screens/industries/stock-exchange/StockExchange";
// import ECommerce from "./components/screens/industries/ecommerce/ECommerce";
// import Transportation from "./components/screens/industries/transportation/Transportation";
// import PageNotFound from "./components/PageNotFound";
// function App() {
//   return (
//     <Router>
//       <MetaTags />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="*" element={<Navigate to="/404" replace />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/partners" element={<Partners />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/technologies" element={<Technologies />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/clients" element={<Clients />} />
//         <Route path="/industries/stock-exchange" element={<StockExchange />} />
//         <Route path="/industries/ecommerce" element={<ECommerce />} />
//         <Route path="/industries/transportation" element={<Transportation />} />
//         <Route path="/404" element={<PageNotFound />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;









import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
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
import PageNotFound from "./components/PageNotFound";
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <MetaTags />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/industries/stock-exchange" element={<StockExchange />} />
          <Route path="/industries/ecommerce" element={<ECommerce />} />
          <Route path="/industries/transportation" element={<Transportation />} />
          <Route path="/404" element={<PageNotFound />} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
