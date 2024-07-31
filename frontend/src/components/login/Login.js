import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { registerUser } from "../../features/User/userSlice";
import ProfileImage from "../../Images/human_icon.png";

const Login = () => {
  const dispatch = useDispatch();
  const [formType, setFormType] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [avatar, setAvatar] = useState(ProfileImage);
  const [avatarPreview, setAvatarPreview] = useState(ProfileImage);

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const { name, mobile, email, password } = user;

  //login - signup change btn
  const toggleForm = (type) => {
    setFormType(type);
  };

  const handleChange = (e) => {
    //profile pick remain
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // const newUser = new FormData();
    // console.log(name, email, mobile, password);
    // newUser.set("name", name);
    // newUser.set("mobile", mobile);
    // newUser.set("email", email);
    // newUser.set("password", password);
    // newUser.append("confirmPassword", confirmPassword);
    // newUser.append("address", address);
    // newUser("avatar",avatar);
    console.log(user);
    dispatch(registerUser(user));
  };

  const handleLogin = () => {
    // window.location.href = "./login";
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
            <form onSubmit={handleSignup} encType="multipart/form-data">
              <div className="form-row">
                <label className="label">Name:</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label className="label">Mobile :</label>
                <input
                  required
                  type="number"
                  className="form-control"
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label className="label">Email:</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label className="label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row-btn">
                <div className="button-area">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        )}

        {formType === "login" && (
          <form onSubmit={handleLogin}>
            <div className="login-form">
              <div className="form-row">
                <label className="label">User name :</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label className="label">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <div className="form-row-btn">
                <div className="button-area">
                  <button className="btn btn-primary">Submit</button>
                  {/* <button className="btn btn-danger">Cancel</button> */}
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
