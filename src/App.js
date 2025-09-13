import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import TechBlog from "./components/TechBlog";
import HireMe from "./components/HireMe";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
   return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Resume />
              <TechBlog />
              <HireMe />
            </>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}