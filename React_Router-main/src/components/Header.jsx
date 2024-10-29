// src/components/Header.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-name">Air Ticket Booking</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-list"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Users
            </NavLink> {/* Added Users NavLink */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
