import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PurchaseNav = (props) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  // for active filter change
  const [activeFilter, setActiveFilter] = useState("All");

  const handleButtonClick = (filter) => {
    props.filterChange(filter);
    setActiveFilter(filter);
  };
  return (
    <div className="sticky top-[10vh] flex justify-between py-3 z-[5] filter-gradiant md:px-24 max-md:px-2">
      <div className="flex md:gap-4 max-md:gap-2">
        <button
          onClick={() => handleButtonClick("All")}
          className={`${
            activeFilter === "All"
              ? "bg-br hover:bg-hbr"
              : "bg-green-600 hover:bg-hbr"
          } md:py-2 max-md:py-1.5 md:px-4 max-md:px-3 max-md:text-xs rounded-full text-white self-center`}
        >
          ALL
        </button>
        <button
          onClick={() => handleButtonClick("છોડવા")}
          className={`${
            activeFilter === "છોડવા"
              ? "bg-br hover:bg-hbr"
              : "bg-green-600 hover:bg-hbr"
          } md:py-2 max-md:py-1.5 md:px-4 max-md:px-3 max-md:text-xs rounded-full text-white self-center`}
        >
          છોડવા
        </button>
        <button
          onClick={() => handleButtonClick("પાવડર")}
          className={`${
            activeFilter === "પાવડર"
              ? "bg-br hover:bg-hbr"
              : "bg-green-600 hover:bg-hbr"
          } md:py-2 max-md:py-1.5 md:px-4 max-md:px-3 max-md:text-xs rounded-full text-white self-center`}
        >
          પાવડર
        </button>
        <button
          onClick={() => handleButtonClick("બિયારણ")}
          className={`${
            activeFilter === "બિયારણ"
              ? "bg-br hover:bg-hbr"
              : "bg-green-600 hover:bg-hbr"
          } md:py-2 max-md:py-1.5 md:px-4 max-md:px-3 max-md:text-xs rounded-full text-white self-center`}
        >
          બિયારણ
        </button>
      </div>

      {/* Cart */}
      <div className="flex items-center justify-end">
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
    </div>
  );
};

export default PurchaseNav;
