import React from "react";
import "./ProductListItem.css";
import { useDispatch } from "react-redux";
// import { updateProduct } from "../../actions/ProductInfoAction";
import { useNavigate } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa6";
// import { LiaStarSolid } from "react-icons/lia";

// const ProductListItem = ({ product, addToCart }) => {
const ProductListItem = ({ product }) => {
  // navigate.
  const navigate = useNavigate();
  // Redux
  const dispatch = useDispatch();

  // update state(product)
  const handleClick = () => {
    // dispatch(updateProduct(product));
    navigate("/productInfo");
  };

  // handel navigate
  const handleAddToCart = () => {
    // addToCart(product);
  };

  return (
    <div className="buy-card cursor-pointer">
      <div className="buy-card-img-cont" onClick={() => handleClick()}>
        <img
          src={
            product.image ||
            "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1696305801/a6lhs6r6sov7pnudqliy.jpg"
          }
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
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
