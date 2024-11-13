import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";
import { addNewProduct } from "../../Admin-features/Product/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    title: "",
    type: "",
    price: 0,
    discount: 0,
    stock: 0,
    desc: "",
    images: [],
  });
  const [title, setTitle] = useState("");
  const [type, setType] = useState("0");
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [stock, setStock] = useState();
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const fileInputRef = useRef(null);

  const createProductImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    const compressedImages = [];

    setImagesPreview([]);

    for (const file of files) {
      try {
        const options = {
          maxSizeMB: 0.1,
          useWebWorker: true,
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

  const clearAllData = () => {
    setTitle("");
    setType("0");
    setPrice("");
    setDiscount("");
    setStock("");
    setDesc("");
    setImages([]);
    setImagesPreview([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    productData.title = title;
    productData.type = type;
    productData.price = price;
    productData.discount = discount;
    productData.stock = stock;
    productData.desc = desc;
    productData.images = images;

    const resultAction = await dispatch(addNewProduct(productData));
    setLoading(false); // Set loading to false after dispatching

    if (addNewProduct.fulfilled.match(resultAction)) {
      toast.success("Product added Successfully!!", {
        position: "top-center",
      });
      clearAllData();
    } else {
      toast.error(resultAction.payload || "An error occurred", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      style={{ height: "75vh" }}
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg  overflow-y-scroll"
    >
      <h2 className="text-2xl font-bold mb-4">AddProduct Form</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="productTitle">
            Product Name
          </label>
          <input
            type="text"
            name="productTitle"
            id="productTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Select Product Type
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={0}>--Select--</option>
            <option>છોડવા</option>
            <option>પાવડર</option>
            <option>બિયારણ</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="plantName">
            Product Stock
          </label>
          <input
            type="number"
            name="productstock"
            id="productstock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="productprice">
            Product Price
          </label>
          <input
            type="number"
            name="productprice"
            id="productprice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="productdiscount">
            Product Discount(%)
          </label>
          <input
            type="number"
            name="productdiscount"
            id="productdiscount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="plantName">
            Product Description
          </label>
          <textarea
            type="text"
            name="productdesc"
            id="productdesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
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

        <button
          type="submit"
          className={`w-full p-2 rounded transition duration-200 ${loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                />
              </svg>
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
