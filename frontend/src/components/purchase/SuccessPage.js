// SuccessPage.js
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToOrder } from "../../features/Order/orderSlice";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
  // const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const placeOrder = async () => {
      const resultAction = await dispatch(addToOrder());
      if (addToOrder.fulfilled.match(resultAction)) {
        toast.success("Order Placed Successfully!!", {
          position: "top-right",
        });
        navigate("/order");
      } else {
        toast.error(resultAction.payload, { position: "top-right" });
        navigate("/cart");
      }
    };
    placeOrder();
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase! Your payment was processed successfully.
        </p>
        <Link
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          to={"/"}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
