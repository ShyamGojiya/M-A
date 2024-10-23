import React from "react";
import "./ProductListItem.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductListItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // update state(product)
  const handleClick = () => {
    navigate("/purchase/" + product._id);
  };

  // handel navigate
  const handleAddToCart = () => {
    navigate("/purchase/" + product._id);
  };

  return (
    <div className="buy-card cursor-pointer">
      <div className="buy-card-img-cont" onClick={() => handleClick()}>
        <img
          src={product.image ? product.image : product.images[0].url}
          className="buy-card-img"
          alt=""
        />
      </div>
      <div className="buy-card-info" onClick={() => handleClick()}>
        <div className="buy-card-name">
          <span>
            {product.title.substring(0, 60) + "..."} <br />{" "}
            {product.discount && (
              <p className="text-green-600">{product.discount}% off</p>
            )}
          </span>
        </div>
        <div className="buy-card-price">
          <p className="buy-card-price-offer">
            ₹
            {product.price -
              Math.floor(product.price * (product.discount / 100))}
          </p>
          <p className="buy-card-price-real">₹{product.price} </p>
        </div>
      </div>
      <div>
        <button className="buy-card-button z-20" onClick={handleAddToCart}>
          Click
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
