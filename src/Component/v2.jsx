import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { IoSave } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
const Testsat = () => {
  const [formData, setformData] = useState({
    companycode: "",
    companyname: "",
    groupname: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    email: "",
    phonenumber: "",
    description: "",
    localaddress: "",
    active: false,
  });
  const [showformdata, setshowformdata] = useState([]);
  const fileTypes = ["JPG", "PNG", "GIF"];

  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = { ...formData };
    if (
      formData.companycode != "" &&
      formData.companyname != "" &&
      formData.groupname != "" &&
      formData.country != "" &&
      formData.active.state != "" &&
      formData.city != "" &&
      formData.pincode != "" &&
      formData.email != "" &&
      formData.phonenumber != "" &&
      formData.localaddress != ""
    ) {
      setshowformdata([...showformdata, obj]);
    } else {
      alert("enter the required data");
    }
  };

  const handleclear = (e) => {
    e.preventDefault();
    setformData({
      companycode: "",
      companyname: "",
      groupname: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      email: "",
      phonenumber: "",
      description: "",
      localaddress: "",
      active: false,
    });
  };
  return (
    <>
      <div className="mt-3">
        <h4 className="text-center">FORM</h4>
        <form>
          <div className="bg-light border-2 border-top border-danger rounded-2 mx-4">
            <div className="row p-3">
              <div className="col-12 col-md-2" id="as">
                <label>
                  Company Code<p className="text-danger d-inline">*</p>
                </label>
                <input
                  className="form-control"
                  maxLength={20}
                  type="text"
                  value={formData.companycode}
                  onChange={(e) =>
                    setformData({ ...formData, companycode: e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  Company Name<p className="text-danger d-inline">*</p>
                </label>
                <input
                  className="form-control"
                  maxLength={100}
                  type="text"
                  value={formData.companyname}
                  onChange={(e) =>
                    setformData({ ...formData, companyname: e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label style={{ whiteSpace: "nowrap" }}>
                  Group Name<p className="text-danger d-inline">*</p>
                </label>
                <input
                  className="form-control"
                  type="text"
                  maxLength={50}
                  value={formData.groupname}
                  onChange={(e) =>
                    setformData({ ...formData, groupname: e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label style={{ whiteSpace: "nowrap" }}>
                  Country<p className="text-danger d-inline">*</p>
                </label>
                <select
                  className="form-control"
                  value={formData.country}
                  onChange={(e) =>
                    setformData({ ...formData, country: e.target.value })
                  }
                >
                  <option>--Please Select Country--</option>
                  <option value={"India"}>India</option>
                  <option value={"Africa"}>Africa</option>
                  <option value={"America"}>America</option>
                  <option value={"Australia"}>Australia</option>
                  <option value={"Canada"}>Canada</option>
                </select>
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  State<p className="text-danger d-inline">*</p>
                </label>
                <select
                  className="form-control"
                  value={formData.state}
                  onChange={(e) =>
                    setformData({ ...formData, state: e.target.value })
                  }
                >
                  <option>--Please Select State--</option>
                  <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                  <option value={"Gujarat"}>Gujarat</option>
                  <option value={"Mumbai"}>Mumbai</option>
                  <option value={"Kerala"}>Kerala</option>
                  <option value={"Tamil Nadu"}>Tamil Nadu</option>
                </select>
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  City<p className="text-danger d-inline">*</p>
                </label>
                <select
                  className="form-control"
                  value={formData.city}
                  onChange={(e) =>
                    setformData({ ...formData, city: e.target.value })
                  }
                >
                  <option>--Please Select State--</option>
                  <option value={"Shahjahanpur"}>Shahjahanpur</option>
                  <option value={"Lucknow"}>Lucknow</option>
                  <option value={"Patna"}>Patna</option>
                  <option value={"Pilibhit"}>Pilibhit</option>
                  <option value={"Powayan"}>Powayan</option>
                </select>
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  Pin Code<p className="text-danger d-inline">*</p>
                </label>
                <select
                  className="form-control"
                  value={formData.pincode}
                  onChange={(e) =>
                    setformData({ ...formData, pincode: e.target.value })
                  }
                >
                  <option>--Please Select State--</option>
                  <option value={"110067"}>110067</option>
                  <option value={"242307"}>242307</option>
                  <option value={"223344"}>223344</option>
                  <option value={"999876"}>999876</option>
                  <option value={"323233"}>323233</option>
                </select>
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  Email ID<p className="text-danger d-inline">*</p>
                </label>
                <input
                  className="form-control"
                  type="email"
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      email: e.target.value.replace(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        ""
                      ),
                    })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  Phone Number<p className="text-danger d-inline">*</p>
                </label>
                <input
                  className="form-control"
                  maxLength={15}
                  value={formData.phonenumber}
                  onChange={(e) =>
                    setformData({
                      ...formData,
                      phonenumber: e.target.value.replace(/[^0-9]$/, ""),
                    })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>Description</label>
                <input
                  className="form-control"
                  type="text"
                  maxLength={100}
                  value={formData.description}
                  onChange={(e) =>
                    setformData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  Local Address<p className="text-danger d-inline">*</p>
                </label>
                <input
                  className="form-control"
                  type="text"
                  maxLength={100}
                  value={formData.localaddress}
                  onChange={(e) =>
                    setformData({ ...formData, localaddress: e.target.value })
                  }
                />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label>
                  Company logo<p className="text-danger d-inline">*</p>
                </label>
                <FileUploader />
              </div>
              <div className="col-12 col-md-2" id="as">
                <label></label>
                <div className="form-check form-switch">
                  <label className="form-check-label">Active</label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) =>
                      setformData({ ...formData, active: e.target.checked })
                    }
                  />
                </div>
              </div>
            </div>
            {/* buttons */}
            <div>
              <div className="d-flex gap-2 align-items-center justify-content-center pb-3">
                <div className="d-flex" style={{ whiteSpace: "nowrap" }}>
                  <div
                    className="rounded bg-dark text-white px-4 pon"
                    onClick={(e) => handlesubmit(e)}
                  >
                    <IoSave className="m-1" />
                    Submit
                  </div>
                </div>
                <div>
                  <div
                    className="rounded bg-danger text-white px-4 pon"
                    onClick={(e) => handleclear(e)}
                  >
                    <GrPowerReset className="m-1" />
                    clear
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*  table section */}
      <div className="m-1">
        <div className="bg-light mt-5 rounded">
          <div className="table-responsive mx-4">
            <table className="table table-hover table-bordered">
              <thead className="table-light">
                <tr>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Company Code
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Company Name
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Group Name
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Country
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    State
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    City
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Pin Code
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Email ID
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Phone Number
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Description
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Local Address
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Active
                  </th>
                </tr>
              </thead>
              <tbody>
                {showformdata.map((item, index) => {
                  return (
                    <tr>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.companycode}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.companyname}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.groupname}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.country}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.state}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.city}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.pincode}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.email}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.phonenumber}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.description}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.localaddress}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.active.toString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testsat;
