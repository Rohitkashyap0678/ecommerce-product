import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import ProfileImage from "./assets/ProfileImage.JPG";
import Favourite from "./pages/Favourite";
import CancelIcon from "@mui/icons-material/Cancel";
import AddSignupBackend from "./pages/AddSignupBackend";
import FiveStarRating from "./pages/FiveStarRating";
import Category from "./pages/Category";
import { Box } from "@mui/material";
import Products from "./pages/Products";
import AddEcommerceData from "./pages/AddEcommerceData";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import profileBlack from "./assets/profileBlack.jpeg";
import CartDetails from "./pages/CartDetails";

const App = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);




  // const [profileDetail, setProfileDetail] = useState({});
  // useEffect(() => {
  //   const storedProfileDetail = JSON.parse(localStorage.getItem("profileData")) || {};
  //   setProfileDetail(storedProfileDetail);
  // }, []);
  const [profileDetail, setProfileDetail] = useState({});

  useEffect(() => {
    const storedProfileDetail = JSON.parse(localStorage.getItem("profileData")) || {};
    setProfileDetail(storedProfileDetail);

    const handleStorageChange = (event) => {
      if (event.key === "profileData") {
        const updatedProfileDetail = JSON.parse(event.newValue) || {};
        setProfileDetail(updatedProfileDetail);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);



  const [isSidebarOpen, setIsSidebarOpen] = React.useState(
    window.innerWidth <= 991 ? false : true
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 991) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const panelType = localStorage.getItem("panelType");
    setIsLoggedIn(panelType !== null);
    if (!panelType) {
      navigate("/");
    }
    // if (panelType) {
    //   return (
    //     <Navigate to={{ pathname: "/dashboard" }} />
    //   );
    // }
    // if (panelType) {
    //   navigate((-1), { replace: true });
    //   // router.back()
    // }
  }, [navigate]);

  const openDashboardPage = () => {
    setIsLoggedIn(true);
    const panelType = localStorage.getItem("panelType");
    if (panelType === "user") {
      navigate("/products");
    } else {
      navigate("/dashboard");
    }
  };

  const clearLocalStorageAndLogout = () => {
    localStorage.removeItem("panelType");
    setIsLoggedIn(false);
    navigate("/");
  };

  // const handleSubMenuClick = (e) => {
  //   const arrowParent = e.target.parentElement.parentElement;
  //   arrowParent.classList.toggle("showMenu");
  // };

  const panelType = localStorage.getItem("panelType");

  return (
    <>
      <Box className="App">
        {isLoggedIn ? (
          <>
            <Box
              // className={isSidebarOpen ? `sidebar sidebar-open ${window.innerWidth <= 991 ? 'animate__animated animate__slideInLeft' : ''}` : "sidebar close"}
              className={
                isSidebarOpen ? "sidebar sidbar-open " : "sidebar close"
              }
            >
              <Box className="logo-details ">
                <i className="bx bxl-c-plus-plus animate__headShake animate__animated "></i>
                <span className="logo_name animate__headShake animate__animated">
                  Admin App
                </span>
                <CancelIcon
                  onClick={closeSidebar}
                  className="9xl:!hidden animate__heartBeat animate__animated !cursor-pointer !block !w-8 !h-8 !top-3 !fixed !right-3"
                />
              </Box>

              <ul className="nav-links">
                {panelType === "admin" && (
                  <li
                    onClick={closeSidebar}
                    className="animate__flashh animate__animatedd"
                  >
                    <NavLink to="/dashboard" activeClassName="active">
                      <i className="bx animate__headShake  animate__animated bx-grid-alt"></i>
                      <span className="animate__headShake  animate__animated link_name">
                        Dashboard
                      </span>
                    </NavLink>
                  </li>
                )}
                <li
                  onClick={closeSidebar}
                  className="animate__flashh  animate__animatedd"
                >
                  <NavLink to="/products" activeClassName="active">
                    <i className="bx animate__headShake  animate__animated bx-data"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      Web Products
                    </span>
                  </NavLink>
                </li>

                {/* <li onClick={closeSidebar} className="animate__flashh animate__animatedd">
              <Box className="iocn-link" onClick={handleSubMenuClick}>
                <NavLink activeClassName="active" to="#">
                  <i className="bx animate__headShake  animate__animated bx-collection"></i>
                  <span className="link_name animate__headShake  animate__animated">Category</span>
                </NavLink>
                <i className="bx animate__headShake  animate__animated bxs-chevron-down arrow"></i>
              </Box>
              <ul className="sub-menu">
                <li onClick={closeSidebar} className="animate__flashh animate__animatedd">
                  <NavLink activeClassName="active" className="link_name animate__headShake  animate__animated" to="#">
                    Category
                  </NavLink>
                </li>
                <li onClick={closeSidebar} className="animate__flashh animate__animatedd">
                  <NavLink activeClassName="active" to="#">
                    HTML & CSS
                  </NavLink>
                </li>
                <li onClick={closeSidebar} className="animate__flashh animate__animatedd">
                  <NavLink activeClassName="active" to="#">
                    JavaScript
                  </NavLink>
                </li>
                <li onClick={closeSidebar} className="animate__flashh animate__animatedd">
                  <NavLink activeClassName="active" to="#">
                    PHP & MySQL
                  </NavLink>
                </li>
              </ul>
            </li> */}

                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <NavLink to="/category" activeClassName="active">
                    <i className="bx animate__headShake  animate__animated bx-category-alt"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      Category
                    </span>
                  </NavLink>
                </li>

                {panelType === "admin" && (
                  <li
                    onClick={closeSidebar}
                    className="animate__flashh animate__animatedd"
                  >
                    <NavLink activeClassName="active" to="/backend">
                      <i className="bx animate__headShake  animate__animated bx-text"></i>
                      <span className="link_name animate__headShake  animate__animated">
                        Backend Form
                      </span>
                    </NavLink>
                  </li>
                )}
                {panelType === "admin" && (
                  <li
                    onClick={closeSidebar}
                    className="animate__flashh animate__animatedd"
                  >
                    <NavLink activeClassName="active" to="/analytics">
                      <i className="bx animate__headShake  animate__animated bx-pie-chart-alt-2"></i>
                      <span className="link_name animate__headShake  animate__animated">
                        Analytics
                      </span>
                    </NavLink>
                  </li>
                )}

                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <NavLink activeClassName="active" to="/cart-details">
                    <i className="bx animate__headShake  animate__animated bx-cart"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      Cart Details
                    </span>
                  </NavLink>
                </li>
                {panelType === "admin" && (
                  <li
                    onClick={closeSidebar}
                    className="animate__flashh animate__animatedd"
                  >
                    <NavLink activeClassName="active" to="/add-products">
                      <i className="bx animate__headShake  animate__animated bx-add-to-queue"></i>
                      <span className="link_name animate__headShake  animate__animated">
                        Add Products
                      </span>
                    </NavLink>
                  </li>
                )}
                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <NavLink activeClassName="active" to="/five-star-rating">
                    <i className="bx animate__headShake  animate__animated bx-star"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      5 Star Rating
                    </span>
                  </NavLink>
                </li>
                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <NavLink activeClassName="active" to="/favourite">
                    <i className="bx animate__headShake  animate__animated bx-heart"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      Favorite
                    </span>
                  </NavLink>
                </li>
                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <NavLink activeClassName="active" to="/profile">
                    <i className="bx animate__headShake  animate__animated bx-user"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      Profile
                    </span>
                  </NavLink>
                </li>
                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <NavLink activeClassName="active" to="/account-panel">
                    <i className="bx animate__headShake  animate__animated bx-cog"></i>
                    <span className="link_name animate__headShake  animate__animated">
                      Account Panel
                    </span>
                  </NavLink>
                </li>
                <li
                  onClick={closeSidebar}
                  className="animate__flashh animate__animatedd"
                >
                  <Box className="profile-details">
                    <Box className="profile-content ">
                      <Link to="/profile">
                        <img
                          src={profileDetail?.profileImage || profileBlack}
                          alt="profileImg"
                          className="!border-white !border-2"
                        />
                      </Link>
                    </Box>
                    <Box className="name-job">
                      <Box className="profile_name">
                        <Link to="/profile">
                          {profileDetail?.name || "Your Full Name "}
                        </Link>
                      </Box>
                      <Box className="job">
                        <Link to="/profile">
                          {profileDetail?.occupation || "Your Profile"}
                        </Link>
                      </Box>
                    </Box>
                    <i
                      onClick={clearLocalStorageAndLogout}
                      className="bx bx-log-out !ml-auto"
                    ></i>
                  </Box>
                </li>
              </ul>
            </Box>

            <section
              className={`home-section !h-auto ${
                isSidebarOpen ? "home-section-sidebar-open" : ""
              }`}
            >
              <Box className="home-content !bg-black sticky top-0 !border-b-2 !border-white">
                <i className="bx bx-menu " onClick={toggleSidebar}></i>
                <span className="text ">E-commerce web</span>
              </Box>
              <Box className="one main-content !overflow-x-hidden">
                <Box>
                  <Routes>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart-details" element={<CartDetails />} />
                    <Route
                      path="/account-panel"
                      element={
                        <Account openDashboardPage={openDashboardPage} />
                      }
                    />
                    <Route path="/backend" element={<AddSignupBackend />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/category" element={<Category />} />
                    <Route
                      path="/five-star-rating"
                      element={<FiveStarRating />}
                    />
                    <Route
                      path="/add-products"
                      element={<AddEcommerceData />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Box>
              </Box>
            </section>
          </>
        ) : (
          <Box className="">
            <HomePage openDashboardPage={openDashboardPage} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default App;
