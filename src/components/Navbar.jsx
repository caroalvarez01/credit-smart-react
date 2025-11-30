// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="logo">
        <img src="/recursos/logo1.png" alt="Logo CreditSmart" />
        <span className="logo-title">
          <img
            src="/recursos/logo-span.png"
            alt="CreditSmart"
            style={{ width: "180px", height: "auto" }}
          />
        </span>
      </div>

      <nav className="site-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/simulator"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Simula tu Crédito
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apply"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Solicita tu Crédito
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
