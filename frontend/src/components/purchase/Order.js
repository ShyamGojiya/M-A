import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../../features/Order/orderSlice";

const MyOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrder());
  }, [dispatch]);
  const orders = useSelector((state) => state.order.order.Orders);
  console.log(orders);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
      {orders && orders.length > 0 ? (
        orders.map((orderItem, index) => (
          <div key={index} className="bg-white p-4 mb-6 shadow-md rounded-md">
            <h2 className="text-xl font-medium mb-2">Order #{index + 1}</h2>
            <p className="text-gray-600 mb-4">
              Order Date: {new Date(orderItem.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-600 mb-4">
              Order Status: {orderItem.orderStatus}
            </p>
            <p className="text-gray-600 mb-4">
              Total Price: ${orderItem.totalPrice}
            </p>
            <p className="text-gray-600 mb-4">
              Paid At: {new Date(orderItem.paidAt).toLocaleString()}
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
                        {product.pid.desc}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Type: {product.pid.type}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Price: ${product.pid.price}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Discount: {product.pid.discount}%
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

export default MyOrder;