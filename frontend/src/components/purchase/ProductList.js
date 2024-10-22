import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import PurchaseNav from "./PurchaseNav";
import { useDispatch, useSelector } from "react-redux";
// import { AddCart } from "../../actions/CartActions";
import toast from "react-hot-toast";
import { allProduct } from "../../features/Product/productSlice";
import { myCart } from "../../features/Cart/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.product?.data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    dispatch(allProduct());
    dispatch(myCart());
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
