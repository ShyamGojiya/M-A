import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";
import {
  addNewProduct,
  updateProduct,
} from "../../Admin-features/Product/productSlice"; // Ensure updateProduct is imported
import { singleProduct } from "../../features/Product/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector(
    (state) => state.products?.singleProductData.data
  );
  const [loading, setLoading] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [productData, setProductData] = useState({
    title: "",
    type: "",
    price: 0,
    discount: 0,
    stock: 0,
    desc: "",
    images: [],
  });

  const fetchProduct = async () => {
    await dispatch(singleProduct(id));
  };
  useEffect(() => {
    fetchProduct();
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setProductData({
        title: product.title,
        type: product.type,
        price: product.price,
        discount: product.discount,
        stock: product.stock,
        desc: product.desc,
        images: product.images,
      });
      setImagesPreview(product.images.map((image) => image.url)); // Set images preview
    }
  }, [product]);

  const fileInputRef = useRef(null);

  const createProductImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    const compressedImages = [];

    setImagesPreview([]); // Clear previous previews

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
            setProductData((prevData) => ({
              ...prevData,
              images: compressedImages,
            }));
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
    setLoading(true);
    const resultAction = await dispatch(updateProduct({ id, productData }));
    setLoading(false);

    if (updateProduct.fulfilled.match(resultAction)) {
      toast.success("Product updated Successfully!!", {
        position: "top-right",
      });
      // fetchProduct();
      navigate("/admin/view-product");
    } else {
      toast.error(resultAction.payload || "An error occurred", {
        position: "top-right",
      });
    }
  };

  return (
    <div
      style={{ height: "75vh" }}
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg overflow-y-scroll"
    >
      <h2 className="text-2xl font-bold mb-4">Update Product Form</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Other input fields remain unchanged */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="productTitle">
            Product Name
          </label>
          <input
            type="text"
            name="productTitle"
            id="productTitle"
            value={productData.title}
            onChange={(e) =>
              setProductData({ ...productData, title: e.target.value })
            }
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
            value={productData.type}
            onChange={(e) =>
              setProductData({ ...productData, type: e.target.value })
            }
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
            value={productData.stock}
            onChange={(e) =>
              setProductData({ ...productData, stock: e.target.value })
            }
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
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
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
            value={productData.discount}
            onChange={(e) =>
              setProductData({ ...productData, discount: e.target.value })
            }
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
            value={productData.desc}
            onChange={(e) =>
              setProductData({ ...productData, desc: e.target.value })
            }
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

        {/* Preview Images */}
        <div className="p-4">
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
          className={`w-full p-2 rounded transition duration-200 ${
            loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          disabled={loading}
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
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
