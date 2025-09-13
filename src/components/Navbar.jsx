// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-box">T</div>
        <div className="logo-box">S</div>
        <div className="logo-box">M</div>
        <span className="brand">TechStoriesOfManoj</span>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-right ${menuOpen ? "open" : ""}`}>
        {isHomePage ? (
          <>
            <li>
              <ScrollLink
                to="home"
                smooth
                duration={400}
                offset={-72}
                onClick={closeMenu}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="resume"
                smooth
                duration={400}
                offset={-72}
                onClick={closeMenu}
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="tech-blog"
                smooth
                duration={400}
                offset={-72}
                onClick={closeMenu}
              >
                TechBlog
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="hire-me"
                smooth
                duration={400}
                offset={-72}
                onClick={closeMenu}
              >
                Hire Me
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/admin" onClick={closeMenu}>
                AdminLogin
              </RouterLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <RouterLink to="/" onClick={closeMenu}>
                Back to Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/admin" onClick={closeMenu}>
                Admin Login
              </RouterLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}