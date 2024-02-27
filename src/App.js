import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import Task1 from "./Component/Task1";
import { useState } from "react";

import Login from "./Component/Login";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <div>
        {/* <Navbar isOpen={isOpen} toggle={toggle} /> */}
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/dashboard"
                element={<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
              >
                <Route
                  path="form"
                  element={<Task1 isOpen={isOpen} setIsOpen={setIsOpen} />}
                />
              </Route>
              {/* <Route
                path="/form"
                element={<Task1 isOpen={isOpen} toggle={toggle} />}
              /> */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
          {/* <Login /> */}
        </>
      </div>
    </div>
  );
}

export default App;
