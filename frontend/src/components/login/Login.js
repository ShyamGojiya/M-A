import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { loginUser, registerUser } from "../../features/User/userSlice";
import ProfileImage from "../../Images/human_icon.png";
import usericon from "../../Images/userup.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    navigate("/profile");
  }, []);

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
    // console.log(user);
    dispatch(registerUser(user));
    // history.push("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(loginEmail, loginPassword);
    dispatch(loginUser({ email: loginEmail, password: loginPassword }));
    navigate("/");
  };

  return (
    <div className="div1">
      <div className="divbtn">
        <div className="btnsign">
          <button
            className={`signup-btn ${formType === "signup" ? "active" : ""}`}
            onClick={() => toggleForm("signup")}
          >
            Sign up
          </button>
        </div>
        <div className="btnlogin">
          <button
            className={`login-btn ${formType === "login" ? "active" : ""}`}
            onClick={() => toggleForm("login")}
          >
            Sign In
          </button>
        </div>
      </div>
      {formType === "login" && (
        <form onSubmit={handleLogin}>
          <div className="div2">
            <img src={usericon} width="80px" height="80px" alt="" />
            <h1>Login</h1>
            <div className="div3">
              <label for="username">EMail</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email id"
                required
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="btn">Login</button>
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </form>
      )}

      {formType === "signup" && (
        <form onSubmit={handleLogin}>
          <div className="div2">
            <img src={usericon} width="80px" height="80px" alt="" />

            <div className="div3">
              <label for="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />

              <label for="username">EMail</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email id"
                required
                onChange={handleChange}
              />

              <label for="password">Mobile No.</label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Mobile No."
                required
                onChange={handleChange}
              />

              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
                onChange={handleChange}
              />

              <label for="password">Confirm Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="btn">Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
