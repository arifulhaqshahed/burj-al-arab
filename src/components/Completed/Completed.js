import React from "react";
import { Link } from "react-router-dom";

const Completed = () => {
  return (
    <div>
      <h2 className="App">Registration Completed</h2>
      <p className="App">
        Go to login page <Link to="/login">Login</Link>{" "}
      </p>
    </div>
  );
};

export default Completed;
