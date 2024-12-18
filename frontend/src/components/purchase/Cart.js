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
// src/PaymentForm.js
import { loadStripe } from "@stripe/stripe-js";
import { REACT_APP_BACKEND_URL, REACT_Publis_key } from "../../config.js";
import toast from "react-hot-toast";
import axios from "axios";
import ConfirmModal from "../admin/ConfirmModel.js";

// Initialize Stripe.js with your Stripe public key (Test Key)
const stripePromise = loadStripe(REACT_Publis_key);

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handlePayment = async () => {
    const stripe = await loadStripe(REACT_Publis_key);

    const data = {
      product: cartItems,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const link = REACT_APP_BACKEND_URL + "/product/payment";

    const response = await axios.post(link, data, headers);

    const session = response.data;

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      toast.error(result.error, { position: "top-center" });
    }
  };

  const handlePaymentClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="container max-sm:p-1.5">
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handlePayment}
      />
      <div className="my-6">
        <div className="flex gap-4 mb-4">
          <button
            className="flex items-center text-green-600 hover:text-green-800 font-semibold text-lg max-sm:text-sm"
            onClick={() => navigate("/purchase")}
          >
            <MdOutlineKeyboardBackspace className="text-xl" />
            <span>ખરીદવાનું ચાલુ રાખો</span>
          </button>

          <button
            className="flex items-center text-green-600 hover:text-green-800 font-semibold text-lg max-sm:text-sm"
            onClick={() => navigate("/order")}
          >
            <i className="fa-solid fa-store text-xl" />
            <span>આર્ડર જોવો</span>
          </button>
        </div>

        <h2 className="font-bold text-3xl my-4 max-sm:text-2xl font-serif text-gray-800">
          My Cart
        </h2>

        <span className="text-lg text-slate-500">
          No. of Items In Cart:{" "}
          <span className="font-semibold text-green-600">
            {cartItems?.length || 0}
          </span>
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
                    onClick={handlePaymentClick}
                  >
                    proceed to checkout
                  </button>
                </div>
              </div>
            </div>
            {/* <Elements stripe={stripePromise}>
              <CheckoutForm amount={1999.0} />
            </Elements> */}

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
