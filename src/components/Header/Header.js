import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, newUser, logOut } = useAuth();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
      className="header"
    >
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link className="btn-book" to="/book">
              Book
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li style={{ position: "relative" }}>
            <span
              style={{ color: "white", fontWeight: "700", fontSize: "larger" }}
            >
              {user.displayName}
            </span>
          </li>
          {user.displayName ? (
            <li>
              <button onClick={logOut} style={{ padding: "8px" }}>
                logout
              </button>
            </li>
          ) : (
            <li></li>
          )}
        </ul>
      </nav>
      {/* <div className="title-container">
        <h2>Burj Al Arab</h2>
        <h4>A global icon of Arabian luxury</h4>
      </div> */}
    </div>
  );
};

export default Header;
