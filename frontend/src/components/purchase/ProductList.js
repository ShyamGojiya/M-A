import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import PurchaseNav from "./PurchaseNav";
import { useDispatch, useSelector } from "react-redux";
// import { AddCart } from "../../actions/CartActions";
import toast from "react-hot-toast";
import { allProduct } from "../../features/Product/productSlice";

const ProductList = () => {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.product?.data);

  // useEffect(() => {
  // dispatch(allProduct());
  // }, []);

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
    dispatch(allProduct());
    console.log(products);
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
          ? products?.map((item, index) => {
              return (
                <div key={"Item" + index}>
                  <ProductListItem product={item} />
                </div>
              );
            })
          : products
              ?.filter((product) => product.type === currentFilter)
              .map((item, index) => {
                return (
                  <div key={"Item" + index}>
                    <ProductListItem product={item} />
                  </div>
                );
              })}
      </div>
    </>
  );
};

export default ProductList;
