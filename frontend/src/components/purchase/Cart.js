import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardBackspace,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Cartitems from "./Cartitems";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { myCart } from "../../features/Cart/cartSlice";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  useEffect(() => {
    dispatch(myCart());
  }, []);

  // find the cart total
  const cartTotal =
    cartItems &&
    cartItems?.map((item) => {
      return item.quantity * item.price;
    });

  // find the cart Discount
  const cartDiscount =
    cartItems &&
    cartItems?.map((item) => {
      return (item.quantity * item.price * item.discount) / 100;
    });

  // Razorpay
  const [orderId, setOrderId] = useState("");

  // const loadRazorpayScript = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement('script');
  //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //     script.onload = resolve;
  //     document.head.appendChild(script);
  //   });
  // };

  const handlePayment = async () => {
    // const amount = (((cartTotal.reduce((paryialSum, n)=> paryialSum+n, 0)) - (cartDiscount.reduce((paryialSum, n)=> paryialSum+n, 0)))*100).toFixed(0);
    // console.log(amount);
    // try {
    // await loadRazorpayScript(); // Wait for the script to load
    // const response = await fetch('http://localhost:5000/create-order', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ amount }),
    // });
    // const data = await response.json();
    // setOrderId(data.id);
    // const options = {
    //   key: 'rzp_test_vJIT3biLsviUc0',
    //   amount: data.amount,
    //   order_id: data.id,
    //   name: 'Medicinal & Aromatic Plants Portal',
    //   description: 'Payment for your order',
    //   prefill: {
    //     name: 'Medicinal & Aromatic Plants Portal',
    //     email: 'info.maapp@aau.in',
    //   },
    //   handler: function (response) {
    //     console.log(response);
    //     // Handle success or failure here
    //   },
    // };
    // const razorpay = new window.Razorpay(options);
    // razorpay.open();
    // } catch (error) {
    // console.error('Error initiating payment:', error);
    // }
  };

  return (
    <div className="container max-sm:p-1.5">
      <div className="my-4">
        <button
          className="flex flex-row gap-2 items-center text-br hover:text-green-600 font-semibold cursor-pointer max-sm:text-sm"
          onClick={() => navigate("/purchase")}
        >
          <MdOutlineKeyboardBackspace /> ખરીદવાનું ચાલુ રાખો
        </button>
        <h2 className="font-bold text-3xl my-2 max-sm:text-2xl font-serif">
          My Cart
        </h2>
        <span className="text-lg text-gray-400">
          No. of Items In cart: {cartItems && cartItems.length}
        </span>
      </div>
      {cartItems && cartItems.length < 1 ? (
        <div className="w-full flex gap-2 font-semibold flex-col items-center justify-center min-h-[50vh]">
          <MdProductionQuantityLimits className="text-9xl text-br" />
          <span className="text-2xl text-gray-700">
            અરે..., લાગે છે હજુ તમે કોઈ પ્રોડક્ટ CART માં નથી મૂકી..!!
          </span>
        </div>
      ) : (
        <>
          <div className="w-[70%] h-fit rounded-lg border-2 border-br bg-white sm:p-4 max-sm:w-full max-sm:p-1 mb-4">
            {cartItems &&
              cartItems.length > 0 &&
              cartItems?.map((product, index) => {
                return (
                  <div key={"CartItem" + index}>
                    <Cartitems cartProduct={product} />
                    <hr className="my-3" />
                  </div>
                );
              })}
          </div>

          <div className="w-[30%] h-fit max-sm:w-full max-sm:text-sm">
            {/* Order Details */}
            <div className="w-full rounded-lg border-2 border-br bg-white sm:p-4 max-sm:p-2">
              <h2 className="text-lg font-semibold pb-2 font-serif">
                Order Details
              </h2>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <span>Cart total: </span>
                  <span>
                    {/* ₹{cartTotal} */}₹
                    {cartItems &&
                      cartItems.length > 0 &&
                      cartTotal
                        .reduce((paryialSum, n) => paryialSum + n, 0)
                        .toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-row justify-between">
                  <span>Cart discount: </span>
                  <span className="text-br">
                    {/* - ₹{cartDiscount} */}- ₹
                    {cartItems &&
                      cartItems.length > 0 &&
                      cartDiscount
                        .reduce((paryialSum, n) => paryialSum + n, 0)
                        .toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-row justify-between">
                  <span>Delivery: </span>
                  <span>
                    <font className="text-br">Free</font>{" "}
                    <font className="line-through">₹99.00</font>
                  </span>
                </div>

                {/* Line */}
                <hr className="my-2" />

                <div className="flex flex-row justify-between">
                  <span
                    className="font-semibold text-br
                  "
                  >
                    Order Total:
                  </span>
                  <span className="font-semibold">
                    ₹
                    {(
                      (cartItems &&
                        cartItems.length > 0 &&
                        cartTotal.reduce(
                          (paryialSum, n) => paryialSum + n,
                          0
                        )) -
                      (cartItems &&
                        cartItems.length > 0 &&
                        cartDiscount.reduce(
                          (paryialSum, n) => paryialSum + n,
                          0
                        ))
                    ).toFixed(2)}
                  </span>
                </div>

                <div className="w-full flex mt-4">
                  <button
                    className="w-full py-2 bg-br text-white rounded-lg font-semibold hover:bg-green-800 uppercase"
                    onClick={handlePayment}
                  >
                    proceed to checkout
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row items-center justify-center p-4 text-gray-500">
              <span className="flex flex-row gap-2 items-center text-lg font-semibold uppercase max-sm:text-sm">
                <RiSecurePaymentLine className="text-5xl max-sm:text-3xl" />
                SECURE PAYMENTS
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
