import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../Admin-features/User/userSlice";
import { ResponsiveTable } from "responsive-table-react";

const DetailsUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.adminUser?.UserData);
  //   console.log(user);

  useEffect(() => {
    dispatch(userDetails());
  }, []);

  const columns = [
    { id: "Id", text: "Id" },
    { id: "name", text: "Name" },
    { id: "email", text: "Email" },
    { id: "mobile", text: "Mobile" },
    { id: "role", text: "Role" },
    { id: "createdAt", text: "LastLogin" },
  ];

  let data1 =
    (user &&
      user?.map((item, index) => ({
        Id: index + 1,
        name: <div className="font-semibold">{item.name}</div>,
        email: <div className="font-semibold">{item.email}</div>,
        mobile: <div className="font-semibold">{item.mobile}</div>,
        role: <div className="font-semibold">{item.role}</div>,
        createdAt: (
          <div className="font-semibold">{item.createdAt.slice(0, 25)}</div>
        ),
      }))) ||
    [];

  return (
    <>
      <div style={{ height: "80vh", overflowY: "scroll" }}>
        <ResponsiveTable columns={columns} data={data1} />
      </div>
    </>
  );
};

export default DetailsUser;
