import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allOrder,
  changeOrderType,
} from "../../Admin-features/Order/orderSlice";
import toast from "react-hot-toast";

const Order = () => {
  const dispatch = useDispatch();

  // Local state for the selected filter option
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(allOrder());
  }, [dispatch]);

  const orders = useSelector((state) => state.adminOrder.order.order);

  // Filter orders based on the selected filter
  const filteredOrders = orders?.filter((orderItem) => {
    if (filter === "all") return true;
    return orderItem.orderStatus === filter;
  });

  const handelTypeChange = async (id, type) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const resultAction = await dispatch(changeOrderType(id));
      if (changeOrderType.fulfilled.match(resultAction)) {
        toast.success("Order status updated successfully", {
          position: "top-right",
        });
        dispatch(allOrder()); // Refresh the order list after status update
      } else {
        toast.error(resultAction.payload, { position: "top-right" });
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">All Orders</h1>
      <select
        value={filter} // Bind the selected filter value
        onChange={(e) => setFilter(e.target.value)} // Update the filter state on change
        className="text-2xl font-semibold mb-4"
      >
        <option value="all">All</option>
        <option value="Ordered">Pending</option>
        <option value="Finished">Finished</option>
      </select>

      {filteredOrders && filteredOrders.length > 0 ? (
        filteredOrders.map((orderItem, index) => (
          <div key={index} className="bg-white p-4 mb-6 shadow-md rounded-md">
            <h2 className="text-xl font-medium mb-2">Order #{index + 1}</h2>
            {orderItem.orderStatus !== "Finished" && (
              <button
                onClick={() =>
                  handelTypeChange(orderItem._id, orderItem.orderStatus)
                }
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Click To Finish
              </button>
            )}
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
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default Order;
