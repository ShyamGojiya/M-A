import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../../features/Order/orderSlice";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrder());
  }, [dispatch]);
  const orders = useSelector((state) => state.order.order.Orders);
  // console.log(orders);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
      <Link
        to="/profile"
        className="inline-block px-6 py-2 mb-4 mr-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Back To Profile
      </Link>
      <Link
        to="/purchase"
        className="inline-block px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        View Product
      </Link>
      {orders && orders.length > 0 ? (

        orders.map((orderItem, index) => (
          <div key={index} className="bg-white p-4 mb-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-2">Order #{index + 1}</h2>
            <p className="text-gray-600 mb-4 font-bold">
              Order Date: {new Date(orderItem.createdAt).toLocaleString()}
            </p>
            {orderItem.orderStatus === "Finished" ? (
              <p className="text-green-600 mb-4 font-bold">
                Order Status: {orderItem.orderStatus}

        orders
          .slice()
          .reverse()
          .map((orderItem, index) => (
            <div key={index} className="bg-white p-4 mb-6 shadow-md rounded-md">
              <h2 className="text-xl font-medium mb-2">Order #{index + 1}</h2>
              <p className="text-gray-600 mb-4">
                Order Date: {new Date(orderItem.createdAt).toLocaleString()}

              </p>
              {orderItem.orderStatus === "Finished" ? (
                <p className="text-green-600 mb-4">
                  Order Status: {orderItem.orderStatus}
                </p>
              ) : (
                <p className="text-red-600 mb-4">Order Status: Pending</p>
              )}


            <p className="text-gray-600 mb-4 font-bold">
              Total Price: ₹{orderItem.totalPrice}
            </p>
            <p className="text-green-600 mb-4 font-bold">
              Paid At: {new Date(orderItem.createdAt).toLocaleString()}
            </p>

            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <div className="space-y-4">
              {orderItem.order && orderItem.order.length > 0 ? (
                orderItem.order.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-gray-200 pb-4"
                  >
                    <div>
                      <h4 className="font-bold text-lg">{product.pid.title}</h4>
                      <p className="text-gray-600 font-bold">
                        Type: {product.pid.type}
                      </p>
                      <p className="text-gray-600 font-bold">
                        Price: ₹
                        {(product.pid.price * (100 - product.pid.discount)) /
                          100}
                      </p>
                      <p className="text-gray-600 font-bold">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 font-bold">No products in this order.</p>
              )}

              <p className="text-gray-600 mb-4">
                Total Price: ₹{orderItem.totalPrice}
              </p>
              <p className="text-gray-600 mb-4">
                Paid At: {new Date(orderItem.createdAt).toLocaleString()}
              </p>

              <h3 className="text-lg font-semibold mb-2">Products</h3>
              <div className="space-y-4">
                {orderItem.order && orderItem.order.length > 0 ? (
                  orderItem.order.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-gray-200 pb-4"
                    >
                      <div>
                        <h4 className="font-medium">{product.pid.title}</h4>
                        <p className="text-gray-600 text-sm">
                          Type: {product.pid.type}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Price: ₹
                          {(product.pid.price * (100 - product.pid.discount)) /
                            100}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No products in this order.</p>
                )}
              </div>

            </div>
          ))
      ) : (
        <p className="text-gray-500 font-bold">No orders found.</p>
      )}
    </div>
  );
};

export default MyOrder;
