import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../features/User/userSlice";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
  });
  const [image, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      // Update formData when a file is selected
      console.log(e.target.files);
      setFormData({
        ...formData,
        avatar: e.target.files[0], // Set the selected file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const createProductImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    const compressedImages = [];

    setImagesPreview([]);

    for (const file of files) {
      try {
        // Compress the image
        const options = {
          maxSizeMB: 0.5, // Set the maximum size in MB
          useWebWorker: true, // Use a web worker for better performance
        };
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesPreview((old) => [...old, reader.result]);
            compressedImages.push(reader.result);
            setImages(compressedImages);
          }
        };

        reader.readAsDataURL(compressedFile);
      } catch (error) {
        toast.error("Error compressing image: ", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("avatar", image);

    const result = await dispatch(updateProfile(data));
    console.log(result);

    if (updateProfile.fulfilled.match(result)) {
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } else {
      toast.error(result.payload || "Error updating profile");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Mobile */}
          <div>
            <label className="block text-gray-700">Mobile</label>
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Avatar Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="thumbnail">
              Upload Profile Image
            </label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              accept="image/*"
              onChange={createProductImagesChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
