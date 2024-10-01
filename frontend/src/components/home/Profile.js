import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader.js";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { logout } from "../../features/User/userSlice.js";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("in logout useEffect");
      toast.success("Logout Success", { position: "top-right" });
      navigate("/login");
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    // console.log("in logout");
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
      toast.success("Logout successful!");
      navigate("/login");
    } else {
      toast.error(resultAction.payload);
    }
    // if (!isAuthenticated) {
    //   toast.success("Logout Success");
    //   navigate("/login");
    // }
  };
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {/* <img src={user.avatar.url} alt={user.name} /> */}
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                {user && <p>{user.name}</p>}
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
