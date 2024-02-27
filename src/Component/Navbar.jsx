import React from "react";
import Sidebar from "./Sidebar";

const Navbar = (props) => {
  const { isOpen, toggle } = props;
  return (
    <div>
      <nav
        class="navbar navbar-expand-sm navbar-light bg-light position-fixed"
        style={{ width: isOpen ? "83%" : "96%" }}
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse " id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0"></ul>

            <div class="dropdown-center  ">
              <button
                class="btn btn-secondary dropdown-toggle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Logout
              </button>
              <ul class="dropdown-menu" style={{ left: "-70px" }}>
                <li>
                  <a class="dropdown-item" href="#">
                    Yogesh Kumar
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="/login">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
