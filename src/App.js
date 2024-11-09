import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import MetaTags from "./components/common/MetaTags";

function App() {
  return (
    <Router>
      <MetaTags />
      <Routes>
        <Route path="*" element={<Navigate to="/index" replace />} />
        <Route path="/index" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
