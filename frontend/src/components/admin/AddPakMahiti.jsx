import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPakPadhati } from "../../Admin-features/PakPadhati/pakPadhatiSlice";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";
import { addPakMahiti } from "../../Admin-features/PakMahiti/pakMahitiSlice";

const AddPakMahiti = () => {
  const dispatch = useDispatch();
  const [plantData, setPlantData] = useState({
    plantName: "",
    thumbnail: "",
    image: [],
    uses: [],
  });
  const [plantName, setPlantName] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [c1, setC1] = useState("");
  const fileInputRef = useRef(null);

  const createProductImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    const compressedImages = [];

    setImagesPreview([]);

    for (const file of files) {
      try {
        // Compress the image
        const options = {
          maxSizeMB: 0.1, // Set the maximum size in MB
          // maxWidthOrHeight: 700, // Set the maximum width or height
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

  //handle add category btn
  const handleAddCategory = () => {
    //push category object to main data
    if (selectedCategory === "0") {
      toast.error("Enter CategoryData!!");
    } else {
      categories.push({
        title: selectedCategory,
        desc: c1.length > 30 ? c1.slice(0, 30) + "..." : c1,
      });
      plantData.uses.push({
        title: selectedCategory,
        desc: c1,
      });

      //clear category section data
      setSelectedCategory("0");
      setC1("");
    }
  };

  //clear add field after submit button
  const clearAllData = () => {
    setPlantData({
      plantName: "",
      thumbnail: "",
      image: [],
      uses: [],
    });
    setImages([]);
    setImagesPreview([]);
    setPlantName("");
    setCategories([]);
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Reset the file input
    }
  };

  //submit btn
  const handleSubmit = async (e) => {
    e.preventDefault();
    plantData.plantName = plantName;
    plantData.image = images;
    plantData.thumbnail = images[0];
    // console.log(plantData);
    const resultAction = await dispatch(addPakMahiti(plantData));
    if (addPakPadhati.fulfilled.match(resultAction)) {
      toast.success("pakPadhati added Successfully!!", {
        position: "top-right",
      });
      //after success submit clear fields
      clearAllData();
    } else {
      toast.error(resultAction.payload || "An error occurred", { position: "top-right" });
    }
  };

  return (
    <div
      style={{ height: "75vh" }}
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg  overflow-y-scroll"
    >
      <h2 className="text-2xl font-bold mb-4">Plant Information Form</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="plantName">
            Plant Name
          </label>
          <input
            type="text"
            name="plantName"
            id="plantName"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="thumbnail">
            Upload Image
          </label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="image/*"
            onChange={createProductImagesChange}
            ref={fileInputRef}
            multiple
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div id="createProductFormImage" className="p-4">
          {imagesPreview.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imagesPreview.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Product Preview ${index}`}
                    className="w-full h-auto transition-transform duration-200 transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 font-semibold text-center">
              No images uploaded.
            </p>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2">Enter Uses Here:</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Select Title</label>
          <select
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value={0}>--Select--</option>
            <option>મનુષ્ય માટે</option>
            <option>પશુપાલન માટે</option>
            <option>ખેતી માટે</option>
          </select>

          <label className="block text-gray-700 mb-1" htmlFor="c1">
            {selectedCategory} Uses
          </label>
          <textarea
            type="text"
            id="c1"
            value={c1}
            onChange={(e) => setC1(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />

          <button
            type="button"
            onClick={handleAddCategory}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
          >
            Add Category
          </button>
        </div>
        {categories.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Added Categories:</h4>
            <ul className="list-disc ml-5">
              {categories.map((cat, index) => (
                <li key={index} className="text-gray-700">
                  {cat.title} : {cat.desc}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPakMahiti;
