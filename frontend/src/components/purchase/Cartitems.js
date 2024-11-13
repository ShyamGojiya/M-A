import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  myCart,
  removeFromCart,
  updateQuantity,
} from "../../features/Cart/cartSlice";

const Cartitems = (props) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(props.cartProduct.quantity);
  const [amount, setAmount] = useState(qty * props.cartProduct.price);

  const handleQty = (action) => {
    if (action === "add") {
      if (qty + 1 < props.cartProduct.stock) {
        // setAmount((qty + 1) * props.cartProduct.price);
        setQty(qty + 1);
      }
    } else {
      if (qty - 1 > 0) {
        // setAmount((qty - 1) * props.cartProduct.price);
        setQty(qty - 1);
      }
    }
  };

  useEffect(() => {
    dispatch(updateQuantity({ id: props.cartProduct._id, quantity: qty }));
    dispatch(myCart());
  }, [qty]);

  const handleRemoveItem = async () => {
    const id = props.cartProduct._id;
    const resultAction = await dispatch(removeFromCart(id));
    if (removeFromCart.fulfilled.match(resultAction)) {
      dispatch(myCart());
      toast.success("કાર્ટમાંથી પ્રોડક્ટ સફળતાપૂર્વક દૂર કરી!!", {
        position: "top-center",
      });
    } else {
      toast.error(resultAction.payload || "An error occurred", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <div className="w-full flex flex-row gap-2">
        <img
          className="w-28 h-36 rounded-md max-sm:w-20"
          src={
            props.cartProduct.image ||
            "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1696304428/q8roxocy3edtbtcwyhyz.png"
          }
          alt="product"
        />

        <div className="w-full flex flex-col justify-between">
          <div className="flex justify-between max-sm:flex-col">
            <div className="flex flex-col sm:gap-2 max-sm:gap-0 max-sm:text-sm">
              <span className="font-semibold">
                {props.cartProduct.ProductName}
              </span>
              <div className="flex flex-row gap-2 max-sm:my-2">
                <span>ક્વૉન્ટિટી:</span>
                <div className="flex flex-row items-center">
                  <button
                    className="bg-green-100 py-1.5 px-1.5 rounded-lg text-hbr text-xl max-sm:text-xs cursor-progress"
                    onClick={() => handleQty("remove")}
                  >
                    <BiMinus />
                  </button>
                  <span className=" px-3 rounded-lg max-sm:text-sm">{qty}</span>
                  <button
                    className="bg-green-100 py-1.5 px-1.5 rounded-lg text-hbr text-xl max-sm:text-xs"
                    onClick={() => handleQty("add")}
                  >
                    <BiPlus />
                  </button>
                </div>
              </div>

              <span className="text-xl font-semibold max-sm:text-lg max-[300px]:text-sm }">
                ₹ {props.cartProduct.price * (100 - props.cartProduct.discount) / 100}
                <span className="text-slate-400 ml-1 mr-1 text-sm line-through">
                  ₹ {props.cartProduct.price}{" "}
                </span>

                <sub className="text-green-600">
                  {props.cartProduct.discount}% off
                </sub>
              </span>
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-row items-center justify-end gap-2">
            <button
              className="flex flex-row items-center gap-2 cursor-pointer font-semibold text-red-500 max-sm:text-xs"
              onClick={handleRemoveItem}
            >
              <RiDeleteBin6Line /> Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitems;
