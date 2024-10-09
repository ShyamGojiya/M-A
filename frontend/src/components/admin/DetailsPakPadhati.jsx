import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePakPadhati, detailsPakPadhati } from "../../Admin-features/PakPadhati/pakPadhatiSlice";
import { ResponsiveTable } from "responsive-table-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DetailsPakPadhati = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsPakPadhati());
  }, []);

  const { data } = useSelector((state) => state.AdminPakPadhati?.pakPadhati);

  const handleDelete = async (e, id) => {
    let result = confirm("Are You Sure?");
    if (result) {

      const resultAction = await dispatch(deletePakPadhati(id));

      if (deletePakPadhati.fulfilled.match(resultAction)) {

        toast.success("pakPadhati deleted Successfully!!", {
          position: "top-right",
        });
        dispatch(detailsPakPadhati());
      } else {
        toast.error(resultAction.payload, { position: "top-right" });
      }

    }
    else {
      console.log("false");
    }

  }

  const columns = [
    {
      id: "Id",
      text: "Id",
    },
    {
      id: "plantName",
      text: "PlantName",
    },
    {
      id: "Image",
      text: "Image",
    },
    {
      id: "View",
      text: "View",
    },
    {
      id: "Delete",
      text: "Delete",
    },
  ];

  let data1 = [];
  for (let index = 0; index < data?.length; index++) {
    data1.push({
      Id: index + 1,
      plantName: <div className="font-semibold">{data[index].plantName}</div>,
      Image: <img src={data[index].thumbnail} alt={`image ${index + 1}`} style={{ width: "50px" }} />,
      View: <Link to={`/practices/${data[index]._id}`} className="p-2  hover:scale-150"><i class="fa-solid fa-eye"></i></Link>,
      Delete: <button onClick={(e) => handleDelete(e, data[index]._id)} className="  p-2 hover:scale-150 hover:text-red-500"><i class="fa-solid fa-trash" /></button>
    });
  }

  return (
    <>
      <div style={{ height: "80vh", overflowY: "scroll" }}>
        <ResponsiveTable columns={columns} data={data1} />
      </div>
    </>
  );
};

export default DetailsPakPadhati;
