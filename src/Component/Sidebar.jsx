// import React, { useState } from "react";
// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       path: "/",
//       name: "Dashboard",
//       icon: <FaTh />,
//     },
//     {
//       path: "/about",
//       name: "About",
//       icon: <FaUserAlt />,
//     },
//     {
//       path: "/analytics",
//       name: "Analytics",
//       icon: <FaRegChartBar />,
//     },
//     {
//       path: "/comment",
//       name: "Comment",
//       icon: <FaCommentAlt />,
//     },
//     {
//       path: "/product",
//       name: "Product",
//       icon: <FaShoppingBag />,
//     },
//     {
//       path: "/productList",
//       name: "ProductList",
//       icon: <FaThList />,
//     },
//   ];
//   return (
//     <div className=" ">
//       <div
//         style={{ width: isOpen ? "220px" : "50px" }}
//         className="sidebar bg-dark-subtle"
//       >
//         <div className="top_section ">
//           <h1
//             style={{
//               display: isOpen ? "block" : "none",
//               marginLeft: isOpen ? "10px" : "0px",
//             }}
//             className="logo"
//           >
//             Logo
//           </h1>
//           <div
//             style={{
//               marginLeft: isOpen ? "100px" : "13px",
//               marginTop: isOpen ? "0px" : "10px",
//             }}
//             className="bars"
//           >
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeclassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="link_text"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       {/* <main>{children}</main> */}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

import Task1 from "./Task1";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

const Sidebar = (props) => {
  // const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const { isOpen, setIsOpen } = props;

  return (
    <div className=" ">
      <div className=" d-flex ">
        <div
          style={{ width: isOpen ? "17%" : "4%" }}
          className="sidebar bg-body-tertiary  position-fixed "
        >
          <div className="top_section  ">
            <h1
              style={{
                display: isOpen ? "block" : "none",
                marginLeft: isOpen ? "10px" : "0px",
                marginTop: "2%",
              }}
              className="logo"
            >
              <img
                src="https://tms.silpl.com/images/logobig.png"
                alt=""
                width={90}
              />
            </h1>
            <div
              style={{
                marginLeft: isOpen ? "40%" : "20%",
                marginTop: isOpen ? "0px" : "10px",
                marginBottom: isOpen ? "0px" : "10px",
              }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div>
            <FaTh
              className=" m-1 icon1"
              style={{ display: !isOpen ? "block" : "none" }}
            />
            <FaUserAlt
              className=" m-1 icon1"
              style={{ display: !isOpen ? "block" : "none" }}
            />
            <FaShoppingBag
              className=" m-1 icon1"
              style={{ display: !isOpen ? "block" : "none" }}
            />
            <FaRegChartBar
              className=" m-1 icon1"
              style={{ display: !isOpen ? "block" : "none" }}
            />
          </div>

          <div
            className="accordion"
            id="accordionExample"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            <div
              className="accordion-item rounded-1"
              //
            >
              <h2 className="accordion-header " id="headingOne">
                <button
                  className="accordion-button collapsed  "
                  style={{ height: "35px", marginBottom: "2px" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-controls="collapseOne"
                >
                  Dashboard
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse  "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Link to={"/dashboard/form"}>
                    <li className="deco">Form</li>
                  </Link>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-1">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  style={{ height: "35px", marginBottom: "2px" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  User
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Link to={"/user-data"}>
                    <li className="deco">User Data</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-1">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  style={{ height: "35px", marginBottom: "2px" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Main
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Link to={"/main"}>
                    <li className="deco">Main</li>
                  </Link>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-1">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed  "
                  style={{ height: "35px", marginBottom: "2px" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Register
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Link to={"/login"}>
                    <li className="deco">Login</li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: isOpen ? "17%" : "4%",
            width: isOpen ? "83%" : "96%",
            transition: "all   0.5s",
          }}
        >
          <Navbar isOpen={isOpen} toggle={toggle} />
          {/* <Task1 /> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
