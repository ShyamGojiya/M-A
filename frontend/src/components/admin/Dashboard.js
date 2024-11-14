import React, { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Row, Col } from "antd";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { Line } from "react-chartjs-2"; // Import Chart.js Line chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { logout } from "../../features/User/userSlice";
import toast from "react-hot-toast";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Example data for statistics
  const totalUsers = 1200;
  const totalProducts = 250;
  const totalOrders = 350;

  // Chart data for example (you can replace this with your own data)
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Growth",
        data: [30, 45, 75, 120, 160, 200],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleLogout = async () => {
    const result = await dispatch(logout());
    if (logout.fulfilled.match(result)) {
      toast.success("Logout success");
      navigate("/login");
    } else {
      toast.error("Logout failed");
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
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
              navigate(key);
            }}
            items={[
              {
                key: "/profile",
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
                    key: "add-pakmahiti",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add PakMahiti",
                  },
                  {
                    key: "view-pakmahiti",
                    icon: <RiCouponLine className="fs-4" />,
                    label: "View Pakmihiti",
                  },
                ],
              },
              {
                key: "Product",
                icon: <RiCouponLine className="fs-4" />,
                label: "Product",
                children: [
                  {
                    key: "add-product",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add Product",
                  },
                  {
                    key: "view-product",
                    icon: <RiCouponLine className="fs-4" />,
                    label: "View Product",
                  },
                ],
              },
              {
                key: "users",
                icon: <FaClipboardList className="fs-4" />,
                label: "Users",
              },
              {
                key: "orders",
                icon: <FaClipboardList className="fs-4" />,
                label: "Orders",
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
                  <button onClick={() => handleLogout()}>
                    <LogoutOutlined className="fs-3 mr-6 text-red-600" />
                  </button>
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
              // overflow: "hidden",
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
            {/* Dashboard content */}
            {/* <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">Total Users</h3>
                  <p className="text-3xl">{totalUsers}</p>
                </div>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">Total Products</h3>
                  <p className="text-3xl">{totalProducts}</p>
                </div>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">Total Orders</h3>
                  <p className="text-3xl">{totalOrders}</p>
                </div>
              </Col>
            </Row> */}

            {/* Line chart */}
            {/* <div className="bg-white shadow-md p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold">Sales Growth Over Time</h3>
              <Line data={data} options={options} />
            </div> */}
            {/* Additional content can go here */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
