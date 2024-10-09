import React, { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiCouponLine } from "react-icons/ri";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <>

      <style>
        {`

        `}
      </style>

      <Layout style={{ minHeight: "95vh", overflowY: "hidden" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className="text-white font-semibold fs-2 text-center py-3 mb-0">
              <span className="sm-logo">MAP</span>
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            className="font-semibold"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key == "signout") {
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: "/",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Home",
              },
              {
                key: "",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard",
              },
              {
                key: "pakpadhati",
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: "PakPadhati",
                children: [
                  {
                    key: "add-pakpadhati",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "Add PakPadhati",
                  },
                  {
                    key: "view-pakpadhati",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "View PakPadhati",
                  },
                ],
              },
              {
                key: "PakMahiti",
                icon: <RiCouponLine className="fs-4" />,
                label: "Pak Mahiti",
                children: [
                  {
                    key: "coupon",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add PakMahiti",
                  },
                  {
                    key: "coupon-list",
                    icon: <RiCouponLine className="fs-4" />,
                    label: "View Pakmihiti",
                  },
                ],
              },
              {
                key: "orders",
                icon: <FaClipboardList className="fs-4" />,
                label: "Orders",
              },
              {
                key: "blogs",
                icon: <FaBloggerB className="fs-4" />,
                label: "Blogs",
                children: [
                  {
                    key: "blog",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add Blog",
                  },
                  {
                    key: "blog-list",
                    icon: <FaBloggerB className="fs-4" />,
                    label: "Blog List",
                  },
                  {
                    key: "blog-category",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add Blog Category",
                  },
                  {
                    key: "blog-category-list",
                    icon: <FaBloggerB className="fs-4" />,
                    label: "Blog Category List",
                  },
                ],
              },
              {
                key: "enquiries",
                icon: <FaClipboardList className="fs-4" />,
                label: "Enquiries",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "rgb(226 232 240)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              // border: "1px solid black",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="d-flex align-items-center">
              <div className="d-flex  align-items-center dropdown ">
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="d-flex gap-3 "
                >
                  <AiOutlineUser className="fs-4" />
                  <h5 className="mb-0 me-3 ">Signout/Profile</h5>

                  {/* <p className="mb-0">profile/signout</p> */}
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1"
                      style={{ height: "auto", lineHeight: "20px" }}
                      onClick={() => {
                        localStorage.clear();
                      }}
                      to="/"
                    >
                      Signout
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: "rgb(226 232 240)",
              borderRadius: borderRadiusLG,
              // overflow:"hidden",
            }}
          >
            <ToastContainer
              position="top-right"
              autoClose={300}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <ToastContainer />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
