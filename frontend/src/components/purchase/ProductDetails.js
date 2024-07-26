import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Product } from "../../Product";
// import { AddCart } from "../../actions/CartActions";
import toast from "react-hot-toast";

const ProductDetails = () => {
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    // for on load scroll to top
    window.scrollTo({
      top: 0,
    });
  }, []);

  // retrive product and CartItem from redux store
  // const product = useSelector((state) => state.ProductInfo.product);
  // const cartItem = useSelector((state) => state.Cart.Products);
  const cartItem = [
    {
      _id: "01",
      title: "એનાસાયકલસ પાયરેથ્રમ",
      price: "200",
      discount: "10",
      type: "છોડવા",
      image:
        "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313506/MAAPP/cz7baqnqxgpjhonuhcmy.jpg ",
      desc: "ઈસબગુલ, જે પણ ઇસબગોલ અથવા પ્લાંટેગો નામે પણ ઓળખાય છે, એક પ્રકારનું વનસ્પતિક ઉપાદી છે જે આમ તરીકે દરોદિયાને ખોરાક મળે છે. ઈસબગુલનું મુખ્ય ઉપયોગ પાચનશકિતાઓમાં છે, અને તે સંકોચે તથા સારવાચનું વિસર્જન માં સહાય કરે છે. ઈસબગુલની બીજની છાળ અને મુખ્ય તોર પર બીજ મુકાબલામાં અત્યંત અધિક પાણી આપે છે, તેથી તે પાચનશક તરીકે ઉપયોગ કરી શકાય છે. ઈસબગુલનું વપરાશ મોટી પ્રમાણમાં તાડકા, કોલેસ્ટ્રોલ અને મોટાપા નું વ્યાપાર માં થાય છે. આમ તરીકે ઈસબગુલનો ઉપયોગ પાણી સાથે કરી શકાય છે, જેથી તે મુખ્યરૂપે કોન્સ્ટિપેશન અને પાચન સમસ્યાઓનો ઇલાજ માટેઉપયોગ થાય છે વૈદ્યક સલાહ અને પ્રમાણે આપવામાં આવે છે કે કેવી રીતે ઈસબગુલનો ઉપયોગ કરવો તે મરીજની આવશ્યકતા અને સ્વાસ્થ્ય અવસ્થાને આધાર રાખે છે. તેમની માત્રે ઉપયોગ કરવાની સલાહ વૈદ્ય અને આરોગ્યની સ્પેશિયાલિસ્ટનો અને વૈદ્યક સलાહકારનો મત માંગે છે.",
    },
    {
      _id: "02",
      title: "ચારોળી",
      price: "150",
      discount: "25",
      type: "પાવડર",
      image:
        "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313515/MAAPP/vg8haazccdly9gkhjmwr.jpg",
      desc: "ઈસબગુલ, જે પણ ઇસબગોલ અથવા પ્લાંટેગો નામે પણ ઓળખાય છે, એક પ્રકારનું વનસ્પતિક ઉપાદી છે જે આમ તરીકે દરોદિયાને ખોરાક મળે છે. ઈસબગુલનું મુખ્ય ઉપયોગ પાચનશકિતાઓમાં છે, અને તે સંકોચે તથા સારવાચનું વિસર્જન માં સહાય કરે છે. ઈસબગુલની બીજની છાળ અને મુખ્ય તોર પર બીજ મુકાબલામાં અત્યંત અધિક પાણી આપે છે, તેથી તે પાચનશક તરીકે ઉપયોગ કરી શકાય છે. ઈસબગુલનું વપરાશ મોટી પ્રમાણમાં તાડકા, કોલેસ્ટ્રોલ અને મોટાપા નું વ્યાપાર માં થાય છે. આમ તરીકે ઈસબગુલનો ઉપયોગ પાણી સાથે કરી શકાય છે, જેથી તે મુખ્યરૂપે કોન્સ્ટિપેશન અને પાચન સમસ્યાઓનો ઇલાજ માટેઉપયોગ થાય છે વૈદ્યક સલાહ અને પ્રમાણે આપવામાં આવે છે કે કેવી રીતે ઈસબગુલનો ઉપયોગ કરવો તે મરીજની આવશ્યકતા અને સ્વાસ્થ્ય અવસ્થાને આધાર રાખે છે. તેમની માત્રે ઉપયોગ કરવાની સલાહ વૈદ્ય અને આરોગ્યની સ્પેશિયાલિસ્ટનો અને વૈદ્યક સलાહકારનો મત માંગે છે.",
    },
    {
      _id: "03",
      title: "મધુનાશિની",
      price: "999",
      discount: "15",
      type: "બિયારણ",
      image:
        "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1698313520/MAAPP/sowvpuuc5muctocyyvko.jpg",
      desc: "ઈસબગુલ, જે પણ ઇસબગોલ અથવા પ્લાંટેગો નામે પણ ઓળખાય છે, એક પ્રકારનું વનસ્પતિક ઉપાદી છે જે આમ તરીકે દરોદિયાને ખોરાક મળે છે. ઈસબગુલનું મુખ્ય ઉપયોગ પાચનશકિતાઓમાં છે, અને તે સંકોચે તથા સારવાચનું વિસર્જન માં સહાય કરે છે. ઈસબગુલની બીજની છાળ અને મુખ્ય તોર પર બીજ મુકાબલામાં અત્યંત અધિક પાણી આપે છે, તેથી તે પાચનશક તરીકે ઉપયોગ કરી શકાય છે. ઈસબગુલનું વપરાશ મોટી પ્રમાણમાં તાડકા, કોલેસ્ટ્રોલ અને મોટાપા નું વ્યાપાર માં થાય છે. આમ તરીકે ઈસબગુલનો ઉપયોગ પાણી સાથે કરી શકાય છે, જેથી તે મુખ્યરૂપે કોન્સ્ટિપેશન અને પાચન સમસ્યાઓનો ઇલાજ માટેઉપયોગ થાય છે વૈદ્યક સલાહ અને પ્રમાણે આપવામાં આવે છે કે કેવી રીતે ઈસબગુલનો ઉપયોગ કરવો તે મરીજની આવશ્યકતા અને સ્વાસ્થ્ય અવસ્થાને આધાર રાખે છે. તેમની માત્રે ઉપયોગ કરવાની સલાહ વૈદ્ય અને આરોગ્યની સ્પેશિયાલિસ્ટનો અને વૈદ્યક સलાહકારનો મત માંગે છે.",
    },
  ];

  // description Open Close toggle
  const [open, setOpen] = useState(false);

  //for quantity
  const [qty, setQty] = useState(1);
  const handleQty = (action) => {
    if (action === "-") {
      if (qty - 1 <= 0) {
        setQty(qty);
      } else {
        setQty(qty - 1);
      }
    } else if (action === "+") {
      if (qty + 1 >= 11) {
        setQty(qty);
      } else {
        setQty(qty + 1);
      }
    } else {
      setQty(qty + 1);
    }
  };

  // Redux
  const dispatch = useDispatch();

  // handel navigate
  const handleAddToCart = () => {
    // dispatch(AddCart(Product, qty));
    toast.success("પ્રોડક્ટ કાર્ટમાં સફળતાપૂર્વક ઉમેરવામાં આવી..!");
  };

  // Razorpay
  const [orderId, setOrderId] = useState("");

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      document.head.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const amount = (
      Math.ceil(Product.price - Product.price * (Product.discount / 100)) *
      qty *
      100
    ).toFixed(0);
    // console.log(amount);
    try {
      await loadRazorpayScript(); // Wait for the script to load

      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      setOrderId(data.id);

      const options = {
        key: "rzp_test_vJIT3biLsviUc0",
        amount: data.amount,
        order_id: data.id,
        name: "Medicinal & Aromatic Plants Portal",
        description: "Payment for your order",
        prefill: {
          name: "Medicinal & Aromatic Plants Portal",
          email: "info.maapp@aau.in",
        },
        handler: function (response) {
          console.log(response);
          // Handle success or failure here
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <>
      <div className="fixed left-[90vw] top-[11vh] flex items-center justify-end z-[5]">
        <button className="relative">
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <div className="cart-notification">
              <p className="cart-notification-text">{cartItem.length}</p>
            </div>
            <HiShoppingCart />
          </div>
        </button>
      </div>

      {/* Product Information */}
      <div className="max-sm:p-2 xl:px-48 md:px-16 lg:px-24 sm:py-10">
        <button
          className="flex flex-row gap-2 py-2.5 items-center text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate("/purchase")}
        >
          <MdOutlineKeyboardBackspace /> ખરીદવાનું ચાલુ રાખો
        </button>
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-start max-sm:gap-4">
          {/* Images Section */}
          <div className="sticky flex max-sm:flex-col gap-6 max-sm:gap-2 lg:w-2/4">
            <img
              src={Product.image}
              alt=""
              className="w-4/5 self-center object-cover rounded-xl max-sm:w-full"
            />
          </div>
          {/* Product Details */}
          <div className="flex flex-col lg:w-2/4 ">
            {/* Heading */}
            <div className="pl-2 border-l-2 border-hbr">
              <span className="text-green-600 font-semibold max-sm:text-sm">
                ઔષધીય અને સુગંધિત છોડ સંશોધન કેન્દ્ર
              </span>
              <h2 className="text-3xl font-bold max-sm:text-xl">
                {Product.title}
              </h2>
            </div>
            <p className="text-green-700 mt-3 font-semibold text-justify max-sm:text-xs">
              કિંમત
            </p>
            {/* Price */}
            <div className="flex flex-row items-baseline gap-2">
              <h6 className="text-3xl font-semibold max-sm:text-2xl">
                ₹{" "}
                {Math.ceil(
                  Product.price - Product.price * (Product.discount / 100)
                )}
              </h6>
              <span className="text-lg font-semibold line-through text-gray-400 max-sm:text-sm">
                ₹ {Product.price}
              </span>
              <span className="text-green-700 text-2xl font-semibold max-sm:text-lg">
                {Product.discount}% off
              </span>
            </div>

            {/* LIne */}
            <hr className="my-2" />

            {/* Quantity */}
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

            {/* Add to Cart & Add to Whishlist */}
            <div className="flex flex-row flex-wrap items-center gap-6 my-4">
              <button
                className="flex flex-row gap-1 items-center bg-white text-green-800 border-2 border-green-800 font-semibold py-2.5 px-10 rounded-lg h-full max-sm:px-3 max-sm:text-sm"
                onClick={handlePayment}
              >
                અત્યારે જ ઓર્ડર કરો
              </button>
              <button
                onClick={handleAddToCart}
                className="flex flex-row gap-1 items-center bg-green-800 border-2 border-green-800 text-white font-semibold py-2.5 px-10 rounded-lg h-full max-sm:px-3 max-sm:text-sm"
              >
                <HiOutlineShoppingCart /> Add to Cart
              </button>
            </div>

            {/* Line */}
            <hr className="my-3" />

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
                  <p>
                    ઈસબગુલ, જે પણ ઇસબગોલ અથવા પ્લાંટેગો નામે પણ ઓળખાય છે, એક
                    પ્રકારનું વનસ્પતિક ઉપાદી છે જે આમ તરીકે દરોદિયાને ખોરાક મળે
                    છે. ઈસબગુલનું મુખ્ય ઉપયોગ પાચનશકિતાઓમાં છે, અને તે સંકોચે
                    તથા સારવાચનું વિસર્જન માં સહાય કરે છે. ઈસબગુલની બીજની છાળ
                    અને મુખ્ય તોર પર બીજ મુકાબલામાં અત્યંત અધિક પાણી આપે છે,
                    તેથી તે પાચનશક તરીકે ઉપયોગ કરી શકાય છે. ઈસબગુલનું વપરાશ મોટી
                    પ્રમાણમાં તાડકા, કોલેસ્ટ્રોલ અને મોટાપા નું વ્યાપાર માં થાય
                    છે. આમ તરીકે ઈસબગુલનો ઉપયોગ પાણી સાથે કરી શકાય છે, જેથી તે
                    મુખ્યરૂપે કોન્સ્ટિપેશન અને પાચન સમસ્યાઓનો ઇલાજ માટેઉપયોગ થાય
                    છે વૈદ્યક સલાહ અને પ્રમાણે આપવામાં આવે છે કે કેવી રીતે
                    ઈસબગુલનો ઉપયોગ કરવો તે મરીજની આવશ્યકતા અને સ્વાસ્થ્ય
                    અવસ્થાને આધાર રાખે છે. તેમની માત્રે ઉપયોગ કરવાની સલાહ વૈદ્ય
                    અને આરોગ્યની સ્પેશિયાલિસ્ટનો અને વૈદ્યક સलાહકારનો મત માંગે
                    છે.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
