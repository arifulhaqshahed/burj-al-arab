import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { user, error, createNewUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createNewUser(data.email, data.password, data.fullname);
    navigate("/registration-completed");
  };

  const location = useLocation();
  const navigate2 = useNavigate();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      navigate2(redirect_uri);
    });
  };

  return (
    <div className="registraion-form">
      <h2 className="App">Create Account</h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Your Name" {...register("fullname")} />
        <input
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          placeholder="Password"
          {...register("password", { required: true, pattern: /^[A-Za-z]/i })}
        />
        <span>{error}</span>
        {errors.password && (
          <span>
            password should contain two Uppercase letter and one special
            character
          </span>
        )}
        {/* <input
          placeholder="Re-enter your password"
          {...register("password", { required: true })}
        />
 */}
        <input type="submit" value="Sign Up" />
        <p>
          Already have an account? <Link to="/login">Sign In</Link>{" "}
        </p>
      </form>
      <div className="App">------Or------</div>
      <button onClick={handleGoogleSignIn} className="sign-in-btn">
        Sign In with Google
      </button>
    </div>
  );
};

export default Register;
