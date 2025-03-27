import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling
import { useDarkMode } from "../context/DarkModeContext"; 
import { FaSearch } from "react-icons/fa"; 

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-primary"} shadow`}
    >
      <div className="container">
        {/* Brand / Logo */}
        <Link 
          className="navbar-brand fw-bold" 
          to="/"
          style={{
            background: "linear-gradient(45deg, #FFC107, #FF5722)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "1.8rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease-in-out"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          📰 News<span style={{ color: "#fff" }}>App</span>
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white custom-hover" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white custom-hover" to="/category/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white custom-hover" to="/category/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white custom-hover" to="/category/business">
                Business
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Search Icon with Expanding Search Input */}
        <div 
          className="search-container"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* Search Icon */}
          <FaSearch 
            size={20} 
            color="white" 
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={() => setIsExpanded(!isExpanded)} // Toggle on click
          />

          {/* Expanding Search Input */}
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              width: isExpanded ? "180px" : "0px",
              opacity: isExpanded ? "1" : "0",
              padding: isExpanded ? "5px 10px" : "0",
              transition: "width 0.3s ease-in-out, opacity 0.2s ease-in-out",
              borderRadius: "20px",
              border: "1px solid white",
              outline: "none",
              background: "white",
              color: "black",
            }}
          />
        </div>

        {/* ✅ Dark Mode Toggle Button */}
        <button
          className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-dark"} ms-3 shadow-sm`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
