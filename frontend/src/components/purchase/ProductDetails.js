import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { singleProduct } from "../../features/Product/productSlice";
import { addToCart, myCart } from "../../features/Cart/cartSlice";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(
    (state) => state.products?.singleProductData.data
  );
  const cartItems = useSelector((state) => state.cart.cart);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]?.url); // Default to the first image
  //for geting product detail
  useEffect(() => {
    // for on load scroll to top
    const effectFx = async () => {
      window.scrollTo({
        top: 0,
      });
      await dispatch(singleProduct(id));
      // setSelectedImage(product?.images[0]?.url);
    };
    effectFx();
  }, [id, dispatch]);

  // Update the selected image when the `product` data changes
  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product?.images[0]?.url); // Set the first image of the new product
    }
  }, [product]); // This will run every time `product` changes

  // description Open Close toggle
  const [open, setOpen] = useState(false);

  //for quantity handle
  const [qty, setQty] = useState(1);
  const handleQty = (action) => {
    if (action === "-") {
      if (qty - 1 <= 0) {
        setQty(qty);
      } else {
        setQty(qty - 1);
      }
    } else if (action === "+") {
      if (qty + 1 >= product.stock) {
        setQty(qty);
      } else {
        setQty(qty + 1);
      }
    } else {
      setQty(qty + 1);
    }
  };

  // handel navigate
  const handleAddToCart = async () => {
    const resultAction = await dispatch(addToCart({ pid: id, quantity: qty }));
    if (addToCart.fulfilled.match(resultAction)) {
      toast.success("પ્રોડક્ટ કાર્ટમાં સફળતાપૂર્વક ઉમેરવામાં આવી..!", {
        position: "top-center",
      });
      await dispatch(myCart());
    } else {
      toast.error(resultAction.payload || "An error occurred", {
        position: "top-center",
      });
    }
  };

  const handlePayment = async () => {};

  return (
    <>
      {/* Cart Icon */}
      <div className="fixed left-[90vw] top-[11vh] flex items-center justify-end z-[5]">
        <button className="relative">
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <div className="cart-notification">
              <p className="cart-notification-text">
                {cartItems && cartItems.length}
              </p>
            </div>
            <HiShoppingCart />
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-sm:p-2 xl:px-48 md:px-16 lg:px-24 sm:py-10">
        {/* Back Button */}
        <button
          className="flex flex-row gap-2 py-2.5 items-center text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate("/purchase")}
        >
          <MdOutlineKeyboardBackspace /> ચાલુ રાખો
        </button>

        {/* Product Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 max-sm:gap-4">
          {/* Large Image Section */}
          <div className="sticky flex max-sm:flex-col gap-6 max-sm:gap-2 lg:w-2/4">
            <img
              src={selectedImage}
              alt="Product Image"
              className="w-full max-w-[400px] lg:w-1/2 self-center object-cover rounded-xl max-sm:w-full"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col lg:w-2/4">
            <div className="border-l-2 border-green-600 p-4">
              {/* Product Title and Description */}
              <div>
                <span className="text-green-600 font-semibold max-sm:text-sm">
                  ઔષધીય અને સુગંધિત છોડ સંશોધન કેન્દ્ર
                </span>
                <h2 className="text-3xl font-bold max-sm:text-xl">
                  {product?.title}
                </h2>
              </div>

              {/* Price Section */}
              <p className="text-green-700 mt-3 font-semibold text-justify max-sm:text-xs">
                કિંમત
              </p>
              <div className="flex flex-row items-baseline gap-2">
                <h6 className="text-3xl font-semibold max-sm:text-2xl">
                  ₹{" "}
                  {Math.ceil(
                    product?.price - product?.price * (product?.discount / 100)
                  )}
                </h6>
                <span className="text-lg font-semibold line-through text-gray-400 max-sm:text-sm">
                  ₹ {product?.price}
                </span>
                <span className="text-green-700 text-2xl font-semibold max-sm:text-lg">
                  {product?.discount}% off
                </span>
              </div>

              <hr className="my-2" />

              {/* Quantity Control */}
              <div className="flex flex-row flex-wrap items-center gap-6">
                <span className="flex flex-row items-center gap-2 text-green-800 font-semibold text-xl max-sm:text-lg">
                  <FaBoxes /> જથ્થો:
                </span>
                <div className="flex flex-row items-center">
                  <button
                    className="bg-gray-200 py-2 px-2 rounded-lg text-green-800 text-2xl max-sm:text-lg"
                    onClick={() => handleQty("-")}
                  >
                    <BiMinus />
                  </button>
                  <span className="py-4 px-3 rounded-lg max-sm:text-sm">
                    {qty}
                  </span>
                  <button
                    className="bg-gray-200 py-2 px-2 rounded-lg text-green-800 text-2xl max-sm:text-lg"
                    onClick={() => handleQty("+")}
                  >
                    <BiPlus />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex flex-row flex-wrap items-center gap-6 my-4">
                <button
                  onClick={handleAddToCart}
                  className="flex flex-row gap-1 items-center bg-green-800 border-2 border-green-800 text-slate-100 font-semibold py-2.5 px-10 rounded-lg h-full max-sm:px-3 max-sm:text-sm hover:bg-slate-100 hover:text-green-900"
                >
                  <HiOutlineShoppingCart /> Add to Cart
                </button>
              </div>

              <hr className="my-3" />

              {/* Additional Information Toggle */}
              <div className="my-4">
                <div
                  className="flex flex-row items-center justify-between font-bold cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <h2
                    className={
                      open
                        ? "text-br text-lg max-sm:text-sm"
                        : "text-lg max-sm:text-sm"
                    }
                  >
                    વધુ માહિતી
                  </h2>
                  {open ? (
                    <FaChevronUp className="text-xl text-br font-thin max-sm:text-sm" />
                  ) : (
                    <FaChevronDown className="text-xl font-thin max-sm:text-sm" />
                  )}
                </div>
                {open && (
                  <div className="text-justify p-2 max-sm:text-sm">
                    <p>{product?.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Image Gallery */}
        <div className="flex gap-4 mt-6 overflow-x-auto">
          {product?.images?.map((image, index) => (
            <img
              key={index}
              src={image?.url}
              alt={`Thumbnail ${index}`}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-green-600"
              onClick={() => setSelectedImage(image?.url)} // Update selected image on click
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
