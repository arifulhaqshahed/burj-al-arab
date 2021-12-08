import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUser(data.email, data.password);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <br />
          <input style={{ padding: "8px" }} type="submit" value="Login" />
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
