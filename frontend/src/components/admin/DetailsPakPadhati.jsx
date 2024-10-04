import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsPakPadhati } from "../../Admin-features/PakPadhati/pakPadhatiSlice";
import { ResponsiveTable } from "responsive-table-react";

const DetailsPakPadhati = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsPakPadhati());
  }, []);

  const { data } = useSelector((state) => state.AdminPakPadhati?.pakPadhati);
  console.log(data);

  const columns = [
    {
      id: "Id",
      text: "Id",
    },
    {
      id: "plantName",
      text: "plantName",
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
      plantName: data[index].plantName,
      Image:<img src={data[index].thumbnail} alt={`image ${index+1}`} style={{width:"50px"}}/>,
      View: "view",
      Delete: "deletet",
    });
  }

  return (
    <>
      <div style={{height:"80vh",overflowY:"scroll"}}>
        <ResponsiveTable columns={columns} data={data1} />
      </div>
    </>
  );
};

export default DetailsPakPadhati;
