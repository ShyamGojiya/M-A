import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader.js";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { logout, myProfileDetails } from "../../features/User/userSlice.js";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(myProfileDetails());
  }, []);

  const handleLogout = async () => {
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
      toast.success("Logout successful!");
      navigate("/login");
    } else {
      toast.error(resultAction.payload);
    }
  };
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="profileContainer min-h-screen bg-slate-200 flex gap-3 p-6 flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-lg rounded-lg p-4 md:sticky top-6 h-auto flex-shrink-0 mb-6 md:mb-0">
              <h2 className="text-green-600 font-bold text-2xl mb-6">Navigation</h2>

              <div className="flex justify-center mb-4">
                <img
                  src={user.avatar.url}
                  alt={user.name}
                  className="bg-slate-400 w-32 h-32 rounded-full"
                />
              </div>

              <ul className="space-y-4">
                <li>
                  <Link
                    to="/me/update"
                    className="block font-semibold text-lg text-green-600 border-2 border-green-600 rounded-lg p-2 text-center hover:bg-green-100 transition duration-300"
                  >
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="block font-semibold text-lg text-green-600 border-2 border-green-600 rounded-lg p-2 text-center hover:bg-green-100 transition duration-300"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/password/update"
                    className="block font-semibold text-lg text-green-600 border-2 border-green-600 rounded-lg p-2 text-center hover:bg-green-100 transition duration-300"
                  >
                    Change Password
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full font-semibold text-lg text-red-600 hover:text-red-500 transition duration-300 border-2 border-red-600 rounded-lg p-2 text-center hover:bg-red-100"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white shadow-lg rounded-lg p-6 h-auto max-w-full">
              <div className="flex flex-col items-start transition-transform transform h-full">
                <h1 className="text-green-600 font-bold text-3xl mb-4">My Profile</h1>

                <div className="mb-4">
                  <h4 className="text-green-600 font-semibold text-lg">Full Name:</h4>
                  {user && (
                    <p className="text-slate-500 text-lg font-bold">{user.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-green-600 font-semibold text-lg">Email:</h4>
                  <p className="text-slate-500 text-lg font-bold">{user.email}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-green-600 font-semibold text-lg">Mobile No.:</h4>
                  <p className="text-slate-500 text-lg font-bold">+91 {user.mobile}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-green-600 font-semibold text-lg">Last Login:</h4>
                  <p className="text-slate-500 text-lg font-bold">{user.createdAt.slice(0, 25)}</p>
                </div>
              </div>
            </main>
          </div>
        </Fragment>
      )}
    </Fragment>


  );
};

export default Profile;
