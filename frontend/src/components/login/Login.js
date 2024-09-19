import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { loginUser, registerUser } from "../../features/User/userSlice";
import ProfileImage from "../../Images/human_icon.png";
import usericon from "../../Images/userup.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login Successfully!!", { position: "top-right" });
      navigate("/profile");
    }
  }, [isAuthenticated]);

  const [formType, setFormType] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    if (password !== confirmPassword) {
      toast.error("confirm password not match", { position: "top-right" });
      return;
    }
    dispatch(registerUser(user));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: loginEmail, password: loginPassword }));
    // if (isAuthenticated) {
    //   toast.success("Login Successfully!!");
    //   navigate("/profile");
    // }
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
        <form onSubmit={handleSignup}>
          <div className="div2">
            <img src={usericon} width="80px" height="80px" alt="" />

            <div className="div3">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name}
                required
                onChange={handleChange}
              />

              <label for="email">EMail</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email id"
                value={email}
                required
                onChange={handleChange}
              />

              <label for="mobile">Mobile No.</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                placeholder="Mobile No."
                value={mobile}
                required
                onChange={handleChange}
                maxLength={5}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
                // minLength={10}
                // min={1111111111}
                // max={9999999999}
              />

              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                required
                onChange={handleChange}
              />

              <label for="c_password">Confirm Password</label>
              <input
                type="password"
                id="c_password"
                name="c_password"
                placeholder="confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // onChange={handleChange}
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
