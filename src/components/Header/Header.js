import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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
            <img
              width="40px"
              style={{
                borderRadius: "50%",
                position: "absolute",
                top: "-10px",
              }}
              src={user.photoURL}
              alt=""
            />
          </li>
          {user.email && (
            <li>
              <button onClick={logOut} style={{ padding: "4px" }}>
                logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className="title-container">
        <h2>Burj Al Arab</h2>
        <h4>A global icon of Arabian luxury</h4>
      </div>
    </div>
  );
};

export default Header;
