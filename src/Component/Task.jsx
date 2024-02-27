import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import { TfiImport } from "react-icons/tfi";
import { GrPowerReset } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FileUploader } from "react-drag-drop-files";

const Vendor = () => {
  const [startDate, setStartDate] = useState();
  const [vehRegdate, setvehRegdate] = useState();
  const [vehpermitdate, setvehpermitdate] = useState();
  const [insurancedate, setinsurancedate] = useState();
  const [fitnessdate, setfitnessdate] = useState();
  const [showFormData, setShowFormData] = useState([]);
  const [rowindex, setrowindex] = useState();
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [selectedfile, SetSelectedFile] = useState([]);
  const [tableFormData, setTableFormData] = useState([
    {
      mobileNo: "",
      name: "",
      licenseNo: "",
      issuedBy: "",
      validUpto: "",
    },
  ]);
  const [formData, setformData] = useState({
    vendor: "",
    aliasName: "",
    contactPerson: "",
    contactDetails: "",
    address: "",
    vehicleType: "",
    vehicleNo: "",
    bodyType: "",
    rcBookNo: "",
    vehicleRegDate: "",
    gpsDeviceNo: "",
    engineNo: "",
    chassisNo: "",
    vehiclePermitValidity: "",
    insuranceValidity: "",
    fitnessvalidity: "",
    length: "",
    width: "",
    height: "",
    totalCFT: "",
    capacityInKg: "",
    cftKg: "",
    prs: false,
    drs: false,
    ts: false,
    thc: false,
    active: false,
  });

  const handleSave = () => {
    let Obj = { ...formData };
    if (rowindex !== undefined && rowindex != null) {
      let copyShow = [...showFormData];
      copyShow[rowindex] = Obj;
      setShowFormData(copyShow);
      setrowindex(undefined);
      handleReset();
    } else {
      setShowFormData([...showFormData, Obj]);
      handleReset();
    }
  };
  const handleReset = () => {
    setformData({
      vendor: "",
      aliasName: "",
      contactPerson: "",
      contactDetails: "",
      address: "",
      vehicleType: "",
      vehicleNo: "",
      bodyType: "",
      rcBookNo: "",
      vehicleRegDate: "",
      gpsDeviceNo: "",
      engineNo: "",
      chassisNo: "",
      vehiclePermitValidity: "",
      insuranceValidity: "",
      fitnessvalidity: "",
      length: "",
      width: "",
      height: "",
      totalCFT: "",
      capacityInKg: "",
      cftKg: "",
      prs: false,
      drs: false,
      ts: false,
      thc: false,
      active: false,
    });
    setfitnessdate("");
    setvehRegdate("");
    setvehpermitdate("");
    setinsurancedate("");
    console.log(fitnessdate);
  };
  const formRowEdit = (index) => {
    let cloneshow = [...showFormData];
    let editObj = cloneshow.find((entry, i) => {
      if (index === i) {
        return true;
      }
      return false;
    });
    setformData(editObj);
    setrowindex(index);
  };
  const formRowDelete = (index) => {
    let cloneShow = [...showFormData];
    let newShowFormData = cloneShow.filter((entry, i) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    setShowFormData(newShowFormData);
    handleReset();
  };

  const addRow = () => {
    setTableFormData([
      ...tableFormData,
      { mobileNo: "", name: "", licenseNo: "", issuedBy: "", validUpto: "" },
    ]);
  };

  const handleDeleteRow = (index) => {
    let cloneTableFormData = [...tableFormData];
    let newTableFormData = cloneTableFormData.filter((item, i) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    setTableFormData(newTableFormData);
  };

  const handleFileChange = (file) => {
    SetSelectedFile(file);
    console.log(file.name);
  };
  return (
    <>
      <div className="m-1 rounded">
        <h4 className="ms-4">Vendor Vehicle Master</h4>
        {/* first section */}
        <div className="bg-light border-2 border-top border-danger rounded-2 mx-4">
          <div className="row p-3">
            <div className="col-12 col-md-2" id="as">
              <label>
                Vendor<p className="text-danger d-inline">*</p>
              </label>
              <input
                className="form-control"
                type="text"
                value={formData.vendor}
                onChange={(e) =>
                  setformData({ ...formData, vendor: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2" id="as">
              <label>Alias Name</label>
              <input
                className="form-control"
                type="text"
                value={formData.aliasName}
                onChange={(e) =>
                  setformData({ ...formData, aliasName: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2" id="as">
              <label style={{ whiteSpace: "nowrap" }}>Contact Person</label>
              <input
                className="form-control"
                type="text"
                value={formData.contactPerson}
                onChange={(e) =>
                  setformData({ ...formData, contactPerson: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2" id="as">
              <label style={{ whiteSpace: "nowrap" }}>Contact Details</label>
              <input
                className="form-control"
                maxLength={10}
                value={formData.contactDetails}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    contactDetails: e.target.value.replace(/[^0-9]$/, ""),
                  })
                }
              />
            </div>
            <div className="col-12 col-md-2" id="as">
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setformData({ ...formData, address: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="mt-3 bg-light border-2 border-top border-success rounded mx-4 p-3">
          <div className="row ">
            <div className="col-12 col-md-2 ov">
              <label>
                Vehicle Type<p className="text-danger d-inline">*</p>
              </label>
              <select
                className="form-select w-100"
                value={formData.vehicleType}
                onChange={(e) =>
                  setformData({ ...formData, vehicleType: e.target.value })
                }
              >
                <option>--please select--</option>
                <option value={"hello"}>hello</option>
                <option value={"hello world"}>hello world</option>
                <option value={"hello universe"}>hello universe</option>
              </select>
            </div>
            <div className="col-12 col-md-2 ov">
              <label>
                Vehicle No<p className="text-danger d-inline">*</p>
              </label>
              <input
                className="form-control"
                type="text"
                value={formData.vehicleNo}
                onChange={(e) =>
                  setformData({ ...formData, vehicleNo: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>Body Type</label>
              <input
                className="form-control"
                type="text"
                value={formData.bodyType}
                onChange={(e) =>
                  setformData({ ...formData, bodyType: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>
                RC Book No<p className="text-danger d-inline">*</p>
              </label>
              <input
                className="form-control"
                value={formData.rcBookNo}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    rcBookNo: e.target.value.replace(/[^0-9 .]$/, ""),
                  })
                }
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label className="w-100">Vehicle Reg. Date</label>
              <DatePicker
                dateFormat="dd-MMM-yyyy"
                showYearDropdown={true}
                showMonthDropdown={true}
                yearDropdownItemNumber={50}
                scrollableYearDropdown={true}
                className="w-100 form-control"
                selected={vehRegdate}
                onChange={(date) => {
                  setvehRegdate(date);
                  setformData({ ...formData, vehicleRegDate: vehRegdate });
                }}
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>GPS Device No</label>
              <input
                className="form-control"
                value={formData.gpsDeviceNo}
                onChange={(e) =>
                  setformData({ ...formData, gpsDeviceNo: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>
                Engine No<p className="text-danger d-inline">*</p>
              </label>
              <input
                className="form-control"
                value={formData.engineNo}
                onChange={(e) =>
                  setformData({ ...formData, engineNo: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>
                Chassis No<p className="text-danger d-inline">*</p>
              </label>
              <input
                className="form-control"
                value={formData.chassisNo}
                onChange={(e) =>
                  setformData({ ...formData, chassisNo: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>Vehicle Permit Validity Upto</label>
              <DatePicker
                showYearDropdown={true}
                showMonthDropdown={true}
                yearDropdownItemNumber={50}
                scrollableYearDropdown={true}
                className="w-100 form-control"
                style={{ width: "95px" }}
                selected={vehpermitdate}
                onChange={(date) => {
                  setvehpermitdate(date);
                  setformData({
                    ...formData,
                    vehiclePermitValidity: vehpermitdate,
                  });
                }}
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>Insurance Validity Upto</label>
              <DatePicker
                showYearDropdown={true}
                showMonthDropdown={true}
                yearDropdownItemNumber={50}
                scrollableYearDropdown={true}
                className="w-100 form-control"
                style={{ width: "95px" }}
                selected={insurancedate}
                onChange={(date) => {
                  setinsurancedate(date);
                  setformData({
                    ...formData,
                    vehiclePermitValidity: insurancedate,
                  });
                }}
              />
            </div>
            <div className="col-12 col-md-2 ov">
              <label>Fitness validity Upto</label>
              <DatePicker
                showYearDropdown={true}
                showMonthDropdown={true}
                yearDropdownItemNumber={50}
                scrollableYearDropdown={true}
                className="w-100 form-control"
                style={{ width: "95px" }}
                selected={fitnessdate}
                onChange={(date) => {
                  setfitnessdate(date);
                  setformData({
                    ...formData,
                    vehiclePermitValidity: fitnessdate,
                  });
                }}
              />
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="mt-3 mx-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="border-2 border-top border-info rounded bg-light p-3">
                <h5>Dimensions</h5>
                <div className="row gy-md-2">
                  <div className="col-12 col-md-4">
                    <label>Length</label>
                    <input
                      className="form-control"
                      value={formData.length}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          length: e.target.value.replace(/[^0-9]$/, ""),
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label>Width</label>
                    <input
                      className="form-control"
                      value={formData.width}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          width: e.target.value.replace(/[^0-9]$/, ""),
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label>Height</label>
                    <input
                      className="form-control"
                      value={formData.height}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          height: e.target.value.replace(/[^0-9]$/, ""),
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label>Total CFT</label>
                    <input
                      className="form-control"
                      value={formData.totalCFT}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          totalCFT: e.target.value.replace(/[^0-9]$/, ""),
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label>Capacity In Kg</label>
                    <input
                      className="form-control"
                      value={formData.capacityInKg}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          capacityInKg: e.target.value.replace(/[^0-9]$/, ""),
                        })
                      }
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label>CFT/Kg</label>
                    <input
                      className="form-control"
                      value={formData.cftKg}
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          cftKg: e.target.value.replace(/[^0-9]$/, ""),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="border-2 border-top border-primary bg-light rounded px-3">
                <div className="d-flex justify-content-between p-2">
                  <h6>Driver Details</h6>
                </div>
                <div className="row">
                  <div className="col-12 table-responsive table-container">
                    <table className="table table-hover table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th
                            className="text-center"
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                          >
                            Mobile No
                          </th>
                          <th
                            className="text-center"
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                          >
                            Name
                          </th>
                          <th
                            className="text-center"
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                          >
                            License No
                          </th>
                          <th
                            className="text-center"
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                          >
                            Issue BY RTO
                          </th>
                          <th
                            className="text-center"
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                          >
                            License Valid Upto
                          </th>
                          <th
                            className="text-center"
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableFormData.map((row, index) => (
                          // yaha pe () ye wali bracket issliye use ki hai kyuki mai without condition render krwa rha hu
                          <tr key={index}>
                            <td>
                              <div>
                                <input
                                  style={{ width: "95px" }}
                                  className="w-100"
                                  value={row.mobileNo}
                                  onChange={(e) => {
                                    // string.replace(searchvalue, replacevalue)
                                    // returns a new string it does not modify the original string
                                    // searchvalue: substring or regular expression pattern to search for in the string
                                    // replacevalue: substring to replace the occurences of searchvalue with
                                    let inputValue = e.target.value.replace(
                                      /[^0-9]$/,
                                      ""
                                    );
                                    // isme /[^0-9]$/g "g" ek flag which means it matches all the occurences of the searchvalue in string
                                    tableFormData[index].mobileNo = inputValue;
                                    setTableFormData([...tableFormData]);
                                  }}
                                  maxLength={10}
                                />
                              </div>
                            </td>
                            <td>
                              <div>
                                <input
                                  style={{ width: "95px" }}
                                  type="text"
                                  className="w-100"
                                  value={row.name}
                                  onChange={(e) => {
                                    // tableFormData[index].mobileNo=e.target.value;
                                    // setTableFormData([...tableFormData]);
                                    let list = [...tableFormData];
                                    list[index] = {
                                      ...list[index],
                                      name: e.target.value,
                                    };
                                    setTableFormData(list);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div>
                                <input
                                  style={{ width: "95px" }}
                                  className="w-100"
                                  value={row.licenseNo}
                                  onChange={(e) => {
                                    tableFormData[index].licenseNo =
                                      e.target.value.replace(/[^0-9]$/, "");
                                    setTableFormData([...tableFormData]);
                                    // let list = [...tableFormData];
                                    // list[index] = {
                                    //   ...list[index],
                                    //   licenseNo: e.target.value,
                                    // };
                                    // setTableFormData(list);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div>
                                <input
                                  style={{ width: "95px" }}
                                  type="text"
                                  className="w-100"
                                  value={row.issuedBy}
                                  onChange={(e) => {
                                    // let list = [...tableFormData];
                                    // list[index] = {
                                    //   ...list[index],
                                    //   issuedBy: e.target.value,
                                    // };
                                    // setTableFormData(list);
                                    tableFormData[index].issuedBy =
                                      e.target.value;
                                    setTableFormData([...tableFormData]);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div>
                                <DatePicker
                                  showYearDropdown={true}
                                  showMonthDropdown={true}
                                  yearDropdownItemNumber={50}
                                  scrollableYearDropdown={true}
                                  className="w-100"
                                  value={row.validUpto}
                                  style={{ width: "95px" }}
                                  selected={startDate}
                                  onChange={(date) => {
                                    setStartDate(date);
                                    tableFormData[index].validUpto = {
                                      startDate,
                                    };
                                    setTableFormData([...tableFormData]);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="d-flex gap-1">
                                <div>
                                  <IoMdAdd onClick={addRow} />
                                </div>
                                <RiDeleteBin6Line
                                  className="m-1"
                                  style={{ height: "20px", color: "red" }}
                                  onClick={() => {
                                    handleDeleteRow(index);
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fourth section */}
        <div className="mt-4 mx-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="border-2 border-top border-primary bg-light rounded p-3">
                <h5>Attach Documents</h5>
                <div className="row g-md-2">
                  <div className="col-12 col-md-6 mb-2 fil">
                    <label>Vehicle RC</label>
                    <FileUploader
                      types={fileTypes}
                      handleChange={handleFileChange}
                    />
                    {selectedfile ? (
                      <ul>
                        {selectedfile.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    ) : (
                      "helllo"
                    )}
                  </div>
                  <div className="col-12 col-md-6 mb-2">
                    <label>Insurance</label>
                    <FileUploader types={fileTypes} />
                  </div>
                  <div className="col-12 col-md-6 mb-2">
                    <label>Fitness</label>
                    <FileUploader types={fileTypes} />
                  </div>
                  <div className=" col-12 col-md-6 mb-2">
                    <label>PUC</label>
                    <FileUploader types={fileTypes} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="border-2 border-top border-danger bg-light rounded ">
                <div className="px-4 mt-2">
                  <h6>Operational</h6>
                </div>
                <div className="m-3">
                  <div className="row">
                    <div className="col-3 col-md-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={formData.prs}
                          onChange={(e) =>
                            setformData({ ...formData, prs: e.target.checked })
                          }
                        />
                        <label className="form-check-label">PRS</label>
                      </div>
                    </div>
                    <div className="col-3 col-md-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={formData.drs}
                          onChange={(e) =>
                            setformData({ ...formData, drs: e.target.checked })
                          }
                        />
                        <label className="form-check-label">DRS</label>
                      </div>
                    </div>
                    <div className="col-3 col-md-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={formData.ts}
                          onChange={(e) =>
                            setformData({ ...formData, ts: e.target.checked })
                          }
                        />
                        <label className="form-check-label">TS</label>
                      </div>
                    </div>
                    <div className="col-3 col-md-3">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={formData.thc}
                          onChange={(e) =>
                            setformData({ ...formData, thc: e.target.checked })
                          }
                        />
                        <label className="form-check-label">THC</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* last toggle */}
              <div className="p-3">
                <div className="row">
                  <div className="col-12">
                    <div className="form-check form-switch mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={formData.active}
                        onChange={(e) =>
                          setformData({ ...formData, active: e.target.checked })
                        }
                      />
                      <label className="form-check-label">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="mx-4 mt-4 d-flex gap-3">
          <div className="d-flex" style={{ whiteSpace: "nowrap" }}>
            <div
              className="rounded bg-dark text-white px-4"
              onClick={(e) => handleSave(e)}
            >
              <IoSave className="m-1" />
              Save
            </div>
          </div>
          <div>
            <div className="rounded bg-warning text-white px-4">
              <TfiImport className="m-1" />
              Export
            </div>
          </div>
          <div>
            <div
              className="rounded bg-danger text-white px-4"
              onClick={() => handleReset()}
            >
              <GrPowerReset className="m-1" />
              Reset
            </div>
          </div>
        </div>
      </div>
      {/* table section */}
      <div className="m-1">
        <div className="bg-light mt-5 rounded">
          <h6>Table Records</h6>
          <div className="table-responsive mx-4">
            <table className="table table-hover table-bordered">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "90px" }}>Action</th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Vendor
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Alias Name
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Contact Person
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Contact Details
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Address
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Vehicle Type
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Vehicle No
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Body Type
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    RC Book No
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Vehicle Reg Date
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    GPS Device No
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Engine No
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Chassis No
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Vehicle Permit Validity Upto
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Insurance Validity Upto
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Fitness Validity Upto
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Length
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    width
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Height
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Total CFT
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Capacity In Kg
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    CFT/Kg
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    DRS
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    PRS
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>TS</th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    THC
                  </th>
                  <th style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                    Active
                  </th>
                </tr>
              </thead>
              <tbody>
                {showFormData.map((item, index) => {
                  return (
                    <tr>
                      <td className="d-flex" style={{ whiteSpace: "nowrap" }}>
                        <div className="d-flex gap-1">
                          <FaRegEdit
                            onClick={() => formRowEdit(index)}
                            className="m-1"
                            style={{ height: "20px", color: "green" }}
                          />
                          <RiDeleteBin6Line
                            onClick={() => formRowDelete(index)}
                            className="m-1"
                            style={{ height: "20px", color: "red" }}
                          />
                        </div>
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.vendor}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.aliasName}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.contactPerson}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.contactDetails}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.address}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.vehicleType}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.vehicleNo}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.bodyType}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.rcBookNo}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.setvehRegdate}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.gpsDeviceNo}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.engineNo}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.chassisNo}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.vehpermitdate}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.insuranceValidity}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.fitnessdate}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.length}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.width}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.height}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.totalCFT}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.capacityInKg}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{item.cftKg}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.prs.toString()}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.drs.toString()}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.ts.toString()}
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {item.thc.toString()}
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

export default Vendor;
