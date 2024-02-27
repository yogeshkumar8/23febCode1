import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { FileUploader } from "react-drag-drop-files";
import Navbar from "./Navbar";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRef, useEffect } from "react";
const fileTypes = ["JPG", "PNG", "GIF"];
const Task1 = (props) => {
  const { isOpen, toggle } = props;
  const [submittedData, setSubmittedData] = useState([]);
  const [file, setFile] = useState(null);
  const [index, setIndex] = useState();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [formData, setformData] = useState({
    companyCode: "",
    companyName: "",
    groupName: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    emailID: "",
    phoneNumber: "",
    description: "",
    localAddress: "",
    active: false,
    companylogo: file,
  });
  const handleclear = (e) => {
    // e.preventDefault();
    setformData({
      companyCode: "",
      companyName: "",
      groupName: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      emailID: "",
      phoneNumber: "",
      description: "",
      localAddress: "",
      active: false,
      companylogo: file,
    });
  };
  const handleChange = (file) => {
    setFile(file);
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    let obj = { ...formData };
    if (
      formData.companyCode !== "" &&
      formData.companyName !== "" &&
      formData.groupName !== "" &&
      formData.country !== "" &&
      formData.active.state !== "" &&
      formData.city !== "" &&
      formData.pincode !== "" &&
      formData.emailID !== "" &&
      formData.phoneNumber !== "" &&
      formData.localAddress !== ""
    ) {
      // setSubmittedData([...submittedData, formData]);

      // handleclear();
      if (index != undefined && index != null) {
        let copySubmit = [...submittedData];
        copySubmit[index] = obj;
        setSubmittedData(copySubmit);
        setIndex(undefined);
        handleclear();
      } else {
        setSubmittedData([...submittedData, obj]);
        handleclear();
      }
    } else {
      alert("Enter the mandatory fields");
    }
  };

  const DeleteRow = (index) => {
    const updatedData = [...submittedData];
    updatedData.splice(index, 1);
    setSubmittedData(updatedData);
  };
  const edithandler = (index) => {
    const obj = [...submittedData]; // Assuming submittedData is an array
    const ob2 = obj.find((value, i) => {
      if (index === i) {
        return true;
      }
      return false;
    });
    setformData(ob2);
    setIndex(index);
  };

  return (
    <div
      style={{
        marginLeft: isOpen ? "17%" : "4%",
        // width: isOpen ? "83%" : "96%",
        transition: "all 0.5s",
      }}
    >
      <div className=" m-5  mt-xl-5 ">
        <h2 style={{ height: "20px" }}></h2>
        <div className="d-flex align-items-center"></div>
        <div className="row border border-dark-subtle rounded">
          <h3 className="m-3">Company Form</h3>
          <div className="mt-2  ">
            <div className="row">
              <form>
                <div className="col-12 col-md-12">
                  <div className="border-2 border-top  border-info rounded bg-light p-3">
                    <h5>Form Fields</h5>
                    <div className="row gy-md-2">
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Company Code<p className="text-danger d-inline">*</p>
                        </label>
                        <input
                          className=" e-input "
                          ref={inputRef}
                          value={formData.companyCode}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              companyCode: e.target.value.replace(
                                /[^0-9]$/,
                                ""
                              ),
                            })
                          }
                          maxLength={20}
                        />
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Company Name<p className="text-danger d-inline">*</p>
                        </label>
                        <input
                          className=" e-input "
                          value={formData.companyName}
                          maxLength={100}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              companyName: e.target.value.replace(
                                /^[a-z0-9_-]{}$/,
                                ""
                              ),
                            })
                          }
                        />
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Group Name<p className="text-danger d-inline">*</p>
                        </label>
                        <input
                          className=" e-input "
                          value={formData.groupName}
                          maxLength={50}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              groupName: e.target.value.replace(
                                /^[a-z0-9_-]{}$/,
                                ""
                              ),
                            })
                          }
                        />
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Country<p className="text-danger d-inline">*</p>
                        </label>
                        <select
                          className=" e-input "
                          value={formData.country}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                        >
                          <option selected>--Select Country--</option>
                          <option value="India">India</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="United States">United States</option>
                          <option value="Japan">Japan </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          State<p className="text-danger d-inline">*</p>
                        </label>
                        <select
                          className=" e-input "
                          value={formData.state}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              state: e.target.value,
                            })
                          }
                        >
                          <option selected>--Select State--</option>
                          <option value="New Delhi">New Delhi</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Haryana">Haryana</option>
                          <option value="London">London</option>
                          <option value="Jakarta">Jakarta</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          City<p className="text-danger d-inline">*</p>
                        </label>
                        <select
                          className=" e-input "
                          value={formData.city}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              city: e.target.value,
                            })
                          }
                        >
                          <option selected>--Select City--</option>
                          <option value="New Delhi">New Delhi</option>
                          <option value="Ujain">Ujain</option>
                          <option value="goa">goa</option>
                          <option value="Pune">Pune</option>
                          <option value="Patna">Patna</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Pin code<p className="text-danger d-inline">*</p>
                        </label>
                        <select
                          className=" e-input "
                          value={formData.pincode}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              pincode: e.target.value,
                            })
                          }
                        >
                          <option selected>--Select PinCode--</option>
                          <option value="110086">110086</option>
                          <option value="110043">110043</option>
                          <option value="110056">110056</option>
                          <option value="110071">110071</option>
                          <option value="110092">110092</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Email ID<p className="text-danger d-inline">*</p>
                        </label>
                        <input
                          className=" e-input "
                          type="email"
                          value={formData.emailID}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              emailID: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Phone Number<p className="text-danger d-inline">*</p>
                        </label>
                        <input
                          className=" e-input "
                          value={formData.phoneNumber}
                          maxLength={15}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              phoneNumber: e.target.value.replace(
                                /[^0-9]$/,
                                ""
                              ),
                            })
                          }
                        />
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">Description</label>
                        <input
                          className=" e-input "
                          value={formData.description}
                          maxLength={100}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              description: e.target.value.replace(
                                /^[a-z0-9_-]{}$/,
                                ""
                              ),
                            })
                          }
                        />
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Local Address{" "}
                          <p className="text-danger d-inline">*</p>
                        </label>
                        <input
                          className=" e-input "
                          value={formData.localAddress}
                          maxLength={100}
                          onChange={(e) =>
                            setformData({
                              ...formData,
                              localAddress: e.target.value.replace(
                                /^[a-z0-9_-]{}$/,
                                ""
                              ),
                            })
                          }
                        />
                      </div>

                      <div className="col-12 col-md-4">
                        <label></label>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={formData.active}
                            onChange={(e) =>
                              setformData({
                                ...formData,
                                active: e.target.checked,
                              })
                            }
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                            className="lable"
                          >
                            Active
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <label className="lable">
                          Company logo<p className="text-danger d-inline">*</p>{" "}
                        </label>

                        <FileUploader
                          handleChange={handleChange}
                          name="file"
                          types={fileTypes}
                        />
                      </div>
                      <div className="col-12 col-md-12 d-flex gap-4 mt-4">
                        <button className="button1" onClick={handleSave}>
                          <IoSave className="m-1" />
                          Submit
                        </button>
                        <button
                          className="button2"
                          onClick={(e) => handleclear(e)}
                        >
                          <GrPowerReset className="m-1" />
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Table */}

            <div className="m-1">
              <div className="bg-light mt-5 border border-dark-subtle rounded">
                <div className="table-responsive mx-4">
                  <div className=" p-3 ">
                    <h4 className="line">Table Data</h4>
                  </div>
                  <table className="table table-hover table-bordered">
                    <thead className="table-light rounded-2">
                      <tr>
                        <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                          Action
                        </th>
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
                      {submittedData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {" "}
                              <div className="d-flex gap-1">
                                <FaRegEdit
                                  onClick={() => edithandler(index)}
                                  className="m-1"
                                  style={{ height: "20px", color: "green" }}
                                />
                                <RiDeleteBin6Line
                                  onClick={() => DeleteRow(index)}
                                  className="m-1"
                                  style={{ height: "20px", color: "red" }}
                                />
                              </div>
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.companyCode}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.companyName}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.groupName}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.country}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.state}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.city}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.pincode}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.emailID}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.phoneNumber}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.description}
                            </td>
                            <td style={{ whiteSpace: "nowrap" }}>
                              {item.localAddress}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1;
