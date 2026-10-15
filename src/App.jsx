import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="left-section">
          <div className="brand">
            <img src={logo} alt="AuthEx logo" />
          </div>
          <h3>Secure. Reliable. Effortless.</h3>
          <h1>Everything you need, right where you need it.</h1>
          <p>
            Access your account securely and continue your work without
            unnecessary distractions.
          </p>
        </div>
        <div className="right-section">
          <div className="preview-container">
            <p className="preview-label">PREVIEW STATE</p>

            <div className="nav nav-pills state-options">
              <span className="nav-link active">Default</span>
              <span className="nav-link">Invalid</span>
              <span className="nav-link">Loading</span>
              <span className="nav-link">Error</span>
              <span className="nav-link">Success</span>
            </div>
          </div>
          <hr className="divider" />
          <div classsName="login-container">
            <p className="welcome-message">WELCOME BACK TO YOUR WORKSPACE</p>
            <p className="intro-message">
              Good to have you back. Let’s continue.
            </p>

            <div className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <span className="forgot-password">Forgot Password?</span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <div className="checkbox-container">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
                <button className="btn btn-primary login-button">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
