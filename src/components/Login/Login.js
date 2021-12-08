import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      navigate(redirect_uri);
    });
  };

  return (
    <div>
      <div className="login-form App">
        <h2>Please Login</h2>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to burj-al-arab? <Link to="/register">Register</Link>{" "}
        </p>
        <div>------OR------</div>
        <button onClick={handleGoogleSignIn} className="sign-in-btn">
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
