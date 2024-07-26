import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

// Redux
// import { AddCart, RemoveCart } from "../../actions/CartActions";
import toast from "react-hot-toast";

const Cartitems = (props) => {
  // Redux
  const dispatch = useDispatch();

  // console.log(props.cartProduct);
  const [amount, setAmount] = useState(
    props.cartProduct.quantity * props.cartProduct.data.price
  );
  const [qty, setQty] = useState(props.cartProduct.quantity || 1);
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

  // useEffect(() => {
  //   setAmount(qty * props.cartProduct.data.price);

  //   // increase Quantity when state change
  // dispatch(AddCart(props.cartProduct.data , qty))
  // }, [qty, props.cartProduct.data.price, dispatch, props.cartProduct.data]);

  // remove I tem Reducer

  const removeitem = () => {
    // dispatch(RemoveCart(props.cartProduct.data._id));
  };

  // console.log(props.cartProduct.data);
  return (
    <>
      <div className="w-full flex flex-row gap-2">
        {/* image */}
        <img
          className="w-28 h-36 rounded-md max-sm:w-20"
          src={
            props.cartProduct.data.image ||
            "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1696304428/q8roxocy3edtbtcwyhyz.png"
          }
          alt="product"
        />

        {/* Details */}
        <div className="w-full flex flex-col justify-between">
          <div className="flex justify-between max-sm:flex-col">
            <div className="flex flex-col sm:gap-2 max-sm:gap-0 max-sm:text-sm">
              {/* Product Title */}
              <span className="font-semibold">
                {props.cartProduct.data.title}
              </span>

              {/* Quantity */}
              <div className="flex flex-row gap-2 max-sm:my-2">
                <span>ક્વૉન્ટિટી:</span>
                <div className="flex flex-row items-center">
                  <button
                    className="bg-green-100 py-1.5 px-1.5 rounded-lg text-hbr text-xl max-sm:text-xs cursor-progress"
                    onClick={() => handleQty("-")}
                  >
                    <BiMinus />
                  </button>
                  <span className=" px-3 rounded-lg max-sm:text-sm">{qty}</span>
                  <button
                    className="bg-green-100 py-1.5 px-1.5 rounded-lg text-hbr text-xl max-sm:text-xs"
                    onClick={() => handleQty("+")}
                  >
                    <BiPlus />
                  </button>
                </div>
              </div>

              {/* Price */}
              <span className="text-xl font-semibold max-sm:text-lg max-[300px]:text-sm }">
                ₹{amount.toFixed(2)}{" "}
                <sub className="text-green-600">
                  {props.cartProduct.data.discount}% off
                </sub>
              </span>
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-row items-center justify-end gap-2">
            <button
              className="flex flex-row items-center gap-2 cursor-pointer font-semibold text-red-500 max-sm:text-xs"
              onClick={() => {
                if (
                  window.confirm("શું તમે આ Product કાઢી નાખવા માંગો છો..?")
                ) {
                  removeitem();
                  toast.error("કાર્ટ માંથી પ્રોડક્ટ કાઢી..!!");
                }
              }}
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
