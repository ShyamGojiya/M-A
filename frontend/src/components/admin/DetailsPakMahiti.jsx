import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveTable } from "responsive-table-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmModal from "./ConfirmModel"; // Import the modal
import {
  deletePakMahiti,
  detailsPakMahiti,
} from "../../Admin-features/PakMahiti/pakMahitiSlice";

const DetailsPakMahiti = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(detailsPakMahiti());
  }, [dispatch]);

  const { data } = useSelector((state) => state.AdminPakMahiti?.pakMahiti);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    const resultAction = await dispatch(deletePakMahiti(deleteId));

    if (deletePakMahiti.fulfilled.match(resultAction)) {
      toast.success("PakPadhati deleted successfully!", {
        position: "top-right",
      });
      dispatch(detailsPakMahiti());
    } else {
      toast.error(resultAction.payload, { position: "top-right" });
    }

    setModalOpen(false);
    setDeleteId(null);
  };

  const columns = [
    { id: "Id", text: "Id" },
    { id: "plantName", text: "PlantName" },
    { id: "Image", text: "Image" },
    { id: "View", text: "View" },
    { id: "Delete", text: "Delete" },
  ];

  let data1 =
    data?.map((item, index) => ({
      Id: index + 1,
      plantName: <div className="font-semibold">{item.plantName}</div>,
      Image: (
        <img
          src={
            typeof item.thumbnail === "string"
              ? item.thumbnail
              : item.thumbnail.url
          }
          alt={`image ${index + 1}`}
          className="w-12"
        />
      ),
      View: (
        <Link to={`/information/${item._id}`} className="p-2 hover:scale-150">
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
    })) || [];

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

export default DetailsPakMahiti;
