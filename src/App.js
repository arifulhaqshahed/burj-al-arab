import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Navigate } from "react-router-dom";
import Completed from "./components/Completed/Completed";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/book/:bedType"
            element={
              <PrivateRoute>
                <Book />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <Navigate to="/home">
                <Home />
              </Navigate>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/registration-completed" element={<Completed />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
