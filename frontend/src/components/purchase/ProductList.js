import React, { useEffect, useState } from "react";
// import { FaRegHeart } from "react-icons/fa6";
// import { LiaStarSolid } from "react-icons/lia";
import ProductListItem from "./ProductListItem";
import PurchaseNav from "./PurchaseNav";

// Redux
import { useDispatch } from "react-redux";
// import { AddCart } from "../../actions/CartActions";
import toast from "react-hot-toast";

const ProductList = (props) => {
  // Redux
  const dispatch = useDispatch();

  const AddToCart = (product) => {
    // dispatch(AddCart(product, 1));
    // navigate("/cart");

    // Show a success notification using react-hot-toast
    toast.success("પ્રોડક્ટ કાર્ટમાં સફળતાપૂર્વક ઉમેરવામાં આવી..!");
  };

  useEffect(() => {
    // for on load scroll to top
    window.scrollTo({
      top: 0,
    });
  }, []);

  // for product type filter button
  const [currentFilter, setCurrentFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };
  return (
    <>
      <PurchaseNav filterChange={handleFilterChange} />
      <div className="selling-cont">
        {currentFilter === "All"
          ? props.product.map((item, index) => {
              return (
                <div key={"Item" + index}>
                  {/* <ProductListItem product={item} addToCart={AddToCart} /> */}
                  <ProductListItem product={item} />
                </div>
              );
            })
          : props.product
              .filter((product) => product.type === currentFilter)
              .map((item, index) => {
                return (
                  <div key={"Item" + index}>
                    {/* <ProductListItem product={item} addToCart={AddToCart} /> */}
                    <ProductListItem product={item} />
                  </div>
                );
              })}
      </div>
    </>
  );
};

export default ProductList;
