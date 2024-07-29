import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formType, setFormType] = useState("login");
  const [Name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleForm = (type) => {
    setFormType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        Name,
        lastName,
        address,
        mobileNumber,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "Ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./userDetails";
        }
      });
  };

  return (
    <div className="form-body">
      <div className="ls-cont">
        <div className="ls-buttons">
          <button
            className={`signup-btn ${formType === "signup" ? "active" : ""}`}
            onClick={() => toggleForm("signup")}
          >
            Sign up
          </button>
          <button
            className={`login-btn ${formType === "login" ? "active" : ""}`}
            onClick={() => toggleForm("login")}
          >
            Log in
          </button>
        </div>

        {formType === "signup" && (
          <div className="signup-form">
            <form>
              <div className="form-row">
                <label className="label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact-name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <label className="label">Mobile :</label>
                <input
                  type="text"
                  className="form-control"
                  required=""
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label className="label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label className="label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label className="label">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  required=""
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-row-btn">
                <div className="button-area">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Sign Up
                  </button>
                  <button className="btn btn-danger">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        )}

        {formType === "login" && (
          <div className="login-form">
            <div className="form-row">
              <label className="label">User name :</label>
              <input
                type="text"
                className="form-control"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label className="label">Password :</label>
              <input
                type="password"
                className="form-control"
                required=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-row-btn">
              <div className="button-area">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
