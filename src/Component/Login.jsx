import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    let obj = { ...formData };
    if (formData.email !== "" && formData.password !== "") {
    } else {
      alert("Enter the mandatory fields");
    }
  };
  return (
    <div className=" vh-100">
      <div className="row mt-5">
        <div class="col-md-3"></div>
        <div class="col-md-6 border rounded bg-body-tertiary p-5">
          <h1 className=" p-2">Login</h1>

          <form className="form-control">
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="form1Example1">
                Email address
              </label>
              <input
                type="email"
                id="form1Example1"
                class="form-control"
                value={formData.email}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required="true"
              />
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="form1Example2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                id="form1Example2"
                class="form-control"
                required="true"
              />
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <Link to={"/dashboard"}>
              <button
                data-mdb-ripple-init
                type="submit"
                class="btn btn-primary btn-block"
                onClick={() => submitForm}
              >
                Sign in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
