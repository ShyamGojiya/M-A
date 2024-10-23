import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveTable } from "responsive-table-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmModal from "./ConfirmModel"; // Import the modal
import {
  allProduct,
  deleteProduct,
} from "../../Admin-features/Product/productSlice";

const DetailsProduct = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);

  const { data } = useSelector((state) => state.AdminProduct?.product);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    const resultAction = await dispatch(deleteProduct(deleteId));
    if (deleteProduct.fulfilled.match(resultAction)) {
      toast.success("Product deleted successfully!", {
        position: "top-right",
      });
      dispatch(allProduct());
    } else {
      toast.error(resultAction.payload, { position: "top-right" });
    }
    setModalOpen(false);
    setDeleteId(null);
  };

  const columns = [
    { id: "Id", text: "Id" },
    { id: "productName", text: "ProductName" },
    { id: "Image", text: "Image" },
    { id: "stock", text: "Stock" },
    { id: "discount", text: "Discount" },
    { id: "price", text: "Price" },
    { id: "fprice", text: "FinalPrice" },
    { id: "View", text: "View" },
    { id: "Delete", text: "Delete" },
    { id: "edit", text: "edit" },
  ];

  let data1 =
    (data &&
      data?.map((item, index) => ({
        Id: index + 1,
        productName: <div className="font-semibold">{item.title}</div>,
        Image: (
          <img
            src={item.images[0]?.url}
            alt={`image ${index + 1}`}
            className="w-12"
          />
        ),
        stock: <div className="font-semibold">{item.stock}</div>,
        discount: <div className="font-semibold">{item.discount}</div>,
        price: <div className="font-semibold">{item.price}</div>,
        fprice: (
          <div className="font-semibold">
            {(item.price * item.discount) / 100}
          </div>
        ),
        View: (
          <Link to={`/purchase/${item._id}`} className="p-2 hover:scale-150">
            <i className="fa-solid fa-eye"></i>
          </Link>
        ),
        Delete: (
          <button
            onClick={() => handleDeleteClick(item._id)}
            className="p-2 hover:scale-150 hover:text-red-500"
          >
            <i className="fa-solid fa-trash" />
          </button>
        ),
        edit: (
          <Link
            to={`/admin/product/${item._id}`}
            className="p-2 hover:scale-150"
          >
            <i class="fas fa-edit"></i>
          </Link>
        ),
      }))) ||
    [];

  return (
    <>
      <div style={{ height: "80vh", overflowY: "scroll" }}>
        <ResponsiveTable columns={columns} data={data1} />
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default DetailsProduct;
