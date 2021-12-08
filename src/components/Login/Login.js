import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, googleSignIn, logOut } = useAuth();
  return (
    <div>
      <div className="login-form App">
        <h2>Please Login</h2>
        <form onSubmit="">
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
        <button onClick={googleSignIn} className="sign-in-btn">
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
