import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import MetaTags from "./components/common/MetaTags";
import AboutUs from "./components/screens/about-us/AboutUs";
import ContactUs from "./components/screens/contact-us/ContactUs";

function App() {
  return (
    <Router>
      <MetaTags />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
