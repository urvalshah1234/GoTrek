import React, { useState } from "react";
import "./styles/Navbar.css";
import logo from "./assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBars, FaSearch } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = searchQuery.toLowerCase();

    const routes = {
      goa: "/goa",
      hampta: "/hamta",
      himachal: "/himachal",
      kerala: "/kerala",
      ladakh: "/ladakh",
      maharashtra: "/mh",
      meghalaya: "/meghalaya",
    };

    if (routes[formattedQuery]) {
      navigate(routes[formattedQuery]);
    } else {
      alert("No items match your search.");
    }

    setSearchQuery(""); // Clear search input after submission
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.clear();
      navigate("/register"); // Navigate to the register page if user confirms
    }
  };

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="navbar-logo-container">
        <button className="logo-container">
          <img
            onClick={() => {
              navigate("/home");
            }}
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
        </button>
      </div>
      <div className="navbar-links-container">
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <FaBars />
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="navbar-tag-button"
                onClick={() => {
                  navigate("/home");
                  setIsOpen(false);
                }}
              >
                Home <FaHome />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="navbar-tag-button"
                onClick={() => {
                  navigate("/dashboard");
                  setIsOpen(false);
                }}
              >
                Dashboard <LuLayoutDashboard />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="navbar-tag-button"
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
              >
                Contact Us <IoMdContact />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="navbar-tag-button"
                onClick={() => {
                  navigate("/about");
                  setIsOpen(false);
                }}
              >
                About Us <FaInfoCircle />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="navbar-tag-button"
                onClick={handleLogout} // Add logout handler here
              >
                Logout <IoIosLogOut />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-search-container">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
