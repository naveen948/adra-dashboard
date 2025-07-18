import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeDetails = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div >
      <div className="d-flex  justify-content-start align-items-center mb-4 p-3">
        <Link to="/employee" className="text-decoration-none text-black">
        <div className="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="mt-1 me-2" viewBox="0 0 12 24"><path fill="#000" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" stroke-width="0.3" stroke="#000"/></svg>
          <p className="m-0 all-page-head">Prakash S - Details</p>
        </div>
        
        </Link>
      </div>

      <div className="container-fluid">
        <div className="row over-details ">
          {/* Left Side: Fixed Container on large screens */}
          <div className="col-12 col-md-12 mb-md-3 col-lg-4  ">
            <div className="card p-md-4 p-3  details-left mb-2 mb-0">
              <div className="d-md-flex d-lg-block p-1 justify-content-md-between ">
                <div className="d-flex mb-3 ">
                  <div className="details-img">
                    <img src="67.jpg" alt="photo" />
                  </div>
                  <div className="p-xl-2 ms-xl-4 ms-3  ms-md-3 ms-lg-1 mt-2 p-1 ps-lg-3 ">
                    <p className="m-0 sub-head-text-1">Prakash S</p>
                    <p className="m-0 text-color work-role-p sub-head-text-2">
                      Ui Ux Designer
                    </p>
                    <div className="btn btn-info text-white sub-head-text-2  p-0 px-2  ">
                      Full-time
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text-space ">
                  <p className="sub-head-text-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#A3A3A3"
                      class="bi bi-chat-square-text mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                    </svg>{" "}
                    prakashsekar.uiux@gmail.com
                  </p>
                  <p className="sub-head-text-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#A3A3A3"
                      class="bi bi-telephone-fill mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                      />
                    </svg>{" "}
                    9790413271
                  </p>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="ms-md-2">
                <p className="text-color sub-head-text-1 m-0 mb-2">Department</p>
                <p className="text-size  sub-head-text-2">Design</p>
                <p className="text-color sub-head-text-1 m-0 mb-2">Office</p>
                <p className="text-size sub-head-text-2">Adra product studio</p>
                <p className="text-color sub-head-text-1 m-0 mb-2">Lead</p>
                <p className="text-size sub-head-text-2">Vedha</p>
              </div>
              <div className="text-center">
                <button className="btn bg-black text-white px-3  mb-3 ">
                  Action{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-8">
            <div className="bg-white p-md-3 rounded">
              {/* Tabs */}
              <ul
                className="nav nav-tabs mb-4 border-0 p-2 "
                id="employeeTabs"
                role="tablist"
              >
                <li className="nav-item sub-head-text-1 " role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "general" ? "active  active1" : "text-color"
                    }`}
                    onClick={() => handleTabClick("general")}
                    type="button"
                    role="tab"
                    aria-controls="general"
                    aria-selected={activeTab === "general"}
                  >
                    General Information
                  </button>
                </li>
                <li className="nav-item sub-head-text-1" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "job" ? "active  active1" : "text-color"
                    }`}
                    onClick={() => handleTabClick("job")}
                    type="button"
                    role="tab"
                    aria-controls="job"
                    aria-selected={activeTab === "job"}
                  >
                    Job
                  </button>
                </li>
                <li className="nav-item sub-head-text-1" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "payroll" ? "active  active1" : "text-color"
                    }`}
                    onClick={() => handleTabClick("payroll")}
                    type="button"
                    role="tab"
                    aria-controls="payroll"
                    aria-selected={activeTab === "payroll"}
                  >
                    Payroll
                  </button>
                </li>
                <li className="nav-item sub-head-text-1" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "documents"
                        ? "active active1"
                        : "text-color"
                    }`}
                    onClick={() => handleTabClick("documents")}
                    type="button"
                    role="tab"
                    aria-controls="documents"
                    aria-selected={activeTab === "documents"}
                  >
                    Documents
                  </button>
                </li>
              </ul>
              <hr />

              {/* Tab Content with Scroll */}
              <div className="tab-scroll ">
                <div className="tab-content  pb-5" id="employeeTabsContent">
                  {/* General Information Tab */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "general" ? "show active" : ""
                    }`}
                    id="general"
                    role="tabpanel"
                    aria-labelledby="general-tab"
                  >
                    <div className="card  shadow-sm m-4 border2 ">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Personal Information</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                        </svg>
                      </div>
                      <div className="card-body ">
                        <div className="row ">
                          <div className=" col-lg-5 pe-0">
                            <div>
                              <div className="row sub-head-text-1">
                                <div className="col-xl-4 col-lg-5 col-md-3 col-12 sub-head-text-1 pe-0">
                                  Full Name{" "}
                                </div>
                                <div className="col text-color sub-head-text-1">
                                  Naveen kumar{" "}
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-xl-4 col-lg-5 col-md-3 col-12 sub-head-text-1 pe-0">
                                  Date of Birth
                                </div>
                                <div className="col text-color sub-head-text-1">
                                  12-05-2006
                                </div>
                              </div>
                              <div className="row mt-3 ">
                                <div className="col-xl-4 col-lg-5 col-md-3 col-12 sub-head-text-1 pe-0">
                                  Nationality
                                </div>
                                <div className="col text-color sub-head-text-1">
                                  Indian
                                </div>
                              </div>
                              <div className="row mt-3 mb-3">
                                <div className="col-xl-4 col-lg-5 col-md-3 col-12  sub-head-text-1 pe-0">
                                  Gender
                                </div>
                                <div className="col text-color sub-head-text-1">
                                  Male
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div>
                              <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-3 col-12 sub-head-text-1 pe-0">
                                  Email Address
                                </div>
                                <div className="col text-color sub-head-text-1">
                                  {" "}
                                  naveenkumar@gmail.com
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-xl-5 col-md-3 col-lg-5 col-12 sub-head-text-1 pe-0 ">
                                  Phone Number
                                </div>
                                <div className="col text-color sub-head-text-1">
                                  9487100720
                                </div>
                              </div>
                              <div className="row mt-3 ">
                                <div className="col-xl-5 col-md-3 col-lg-5 col-12 sub-head-text-1 pe-0 ">
                                  Marital Status
                                </div>
                                <div className="col text-color  sub-head-text-1">
                                  Single
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Address Information Section */}
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Address Information</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                        </svg>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className=" col-12">
                            <div>
                              <div className="row">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12 pe-0 sub-head-text-1  ">
                                  Primary Address{" "}
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  No18 pn pudur street pn pudur coimbatore
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12 pe-0 sub-head-text-1  ">
                                  Country
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  India
                                </div>
                              </div>
                              <div className="row mt-3 ">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12 pe-0 sub-head-text-1  ">
                                  State
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  Tamil Nadu
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12 pe-0 sub-head-text-1  ">
                                  Post Code
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  641041
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Job Tab */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "job" ? "show active" : ""
                    }`}
                    id="job"
                    role="tabpanel"
                    aria-labelledby="job-tab"
                  >
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Employment Information</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                        </svg>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div>
                              <div className="row">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12 sub-head-text-1 pe-0">
                                  Employee ID
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  AD12
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12  sub-head-text-1 pe-0">
                                  Service Year
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  12 Months
                                </div>
                              </div>
                              <div className="row mt-3 ">
                                <div className="col-xl-2 col-md-3 col-lg-3 col-12 sub-head-text-1 pe-0">
                                  Join Date
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  {" "}
                                  15-07-2024
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Job Timeline</h5>+
                      </div>
                      <div className="card-body d-flex flex-wrap justify-content-between text-center overflow">
                        <table className="w-100 ">
                          <tr className="text-color text-center bg-light ">
                            <td className=" px-4 sub-head-text-1 ">
                              Effective Date
                            </td>
                            <td className=" px-4 sub-head-text-1 ">
                              Job Title
                            </td>
                            <td className=" px-4 sub-head-text-1 ">
                              Position Type
                            </td>
                            <td className=" px-4 sub-head-text-1">
                              Employment Type
                            </td>
                            <td className=" px-5 sub-head-text-1  ">Lead</td>
                          </tr>
                          <tr className="text-center p-3  sub-head-text-1 ">
                            <td>15-07-2024</td>
                            <td>UiUx&nbsp;Designer</td>
                            <td>-</td>
                            <td className="p-4">Full-Time</td>
                            <td>Vedha</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Payroll Tab */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "payroll" ? "show active" : ""
                    }`}
                    id="payroll"
                    role="tabpanel"
                    aria-labelledby="payroll-tab"
                  >
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-body">
                        <div className="row">
                          <div className=" col-lg-5">
                            <div>
                              <div className="row">
                                <div className="col-lg-6 col-md-4 col-12 sub-head-text-1 pe-0 ">
                                  Job Title{" "}
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  Ui Ux Designer
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-6 col-md-4 col-12 sub-head-text-1 pe-0 ">
                                  Employment status
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  Active
                                </div>
                              </div>
                              <div className="row mt-3 mb-3 ">
                                <div className="col-lg-6 col-md-4 col-12 sub-head-text-1 pe-0">
                                  Employment Type
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  Full Time
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div>
                              <div className="row">
                                <div className="col-lg-6 col-md-4 col-12 sub-head-text-1 pe-0 ">
                                  Job Date
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  19-04-2020
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-6 col-md-4 col-12 sub-head-text-1 pe-0">
                                  Last Working Day
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  -
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Salary Details</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                        </svg>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className=" col-lg-4">
                            <div>
                              <div className="row ">
                                <div className="col-lg-6 col-12 col-md-4 sub-head-text-1 pe-0 ">
                                  Salary Details
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  ₹ 2,50,00
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-6 col-12 col-md-4 sub-head-text-1 pe-0 ">
                                  In Hand&nbsp;Salary
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  ₹ 17,000
                                </div>
                              </div>
                              <div className="row mt-3 mb-3 ">
                                <div className="col-lg-6 col-12 col-md-4 sub-head-text-1 pe-0 ">
                                  PF Amount
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  ₹ 1,800
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div>
                              <div className="row">
                                <div className="col-lg-3 col-md-4  col-12 sub-head-text-1 pe-0">
                                  ESI amount
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  ₹ 180
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-3 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  Bonus
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  ₹ 1,200
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-3 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  Variable Amount
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  ₹ 10,000
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Bank Details</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                        </svg>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className=" col-lg-5">
                            <div>
                              <div className="row">
                                <div className="col-lg-6 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  Account Holder
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  naveen kumar
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-6 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  Bank Name
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  Indian Bank
                                </div>
                              </div>
                              <div className="row mt-3 mb-3 ">
                                <div className="col-lg-6 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  Branch name
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  {" "}
                                  PN pudur
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div>
                              <div className="row ">
                                <div className="col-lg-3 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  Account Number
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  65675567755
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-lg-3 col-md-4  col-12 sub-head-text-1 pe-0 ">
                                  IFSC Code
                                </div>
                                <div className="col text-color sub-head-text-1 ">
                                  INDI7675578
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Documents Tab */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "documents" ? "show active" : ""
                    }`}
                    id="documents"
                    role="tabpanel"
                    aria-labelledby="documents-tab"
                  >
                    <div className="card shadow-sm m-4 border2 target1">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Personal Documents</h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </div>
                      <div className="card-body d-flex flex-wrap justify-content-between text-center overflow  ">
                        <table className="w-100   ">
                          <tr className="text-color text-center bg-light sub-head-text-1 pe-0 ">
                            <td className=" px-4">Documents Name</td>
                            <td className=" px-4">Documents Submitted Date</td>
                            <td className=" px-4">Action</td>
                          </tr>
                          <tr className="text-center p-3 sub-head-text-1 pe-0">
                            <td>12th Mark Sheet</td>
                            <td>15-07-2024</td>
                            <td className="p-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="green"
                                class="bi bi-filetype-docx me-xl-4 me-1   card-cursor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-6.839 9.688v-.522a1.5 1.5 0 0 0-.117-.641.86.86 0 0 0-.322-.387.86.86 0 0 0-.469-.129.87.87 0 0 0-.471.13.87.87 0 0 0-.32.386 1.5 1.5 0 0 0-.117.641v.522q0 .384.117.641a.87.87 0 0 0 .32.387.9.9 0 0 0 .471.126.9.9 0 0 0 .469-.126.86.86 0 0 0 .322-.386 1.55 1.55 0 0 0 .117-.642m.803-.516v.513q0 .563-.205.973a1.47 1.47 0 0 1-.589.627q-.381.216-.917.216a1.86 1.86 0 0 1-.92-.216 1.46 1.46 0 0 1-.589-.627 2.15 2.15 0 0 1-.205-.973v-.513q0-.569.205-.975.205-.411.59-.627.386-.22.92-.22.535 0 .916.22.383.219.59.63.204.406.204.972M1 15.925v-3.999h1.459q.609 0 1.005.235.396.233.589.68.196.445.196 1.074 0 .634-.196 1.084-.197.451-.595.689-.396.237-.999.237zm1.354-3.354H1.79v2.707h.563q.277 0 .483-.082a.8.8 0 0 0 .334-.252q.132-.17.196-.422a2.3 2.3 0 0 0 .068-.592q0-.45-.118-.753a.9.9 0 0 0-.354-.454q-.237-.152-.61-.152Zm6.756 1.116q0-.373.103-.633a.87.87 0 0 1 .301-.398.8.8 0 0 1 .475-.138q.225 0 .398.097a.7.7 0 0 1 .273.26.85.85 0 0 1 .12.381h.765v-.073a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.49-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.571.633-.197.41-.197.978v.498q0 .568.194.976.195.406.571.627.375.216.914.216.44 0 .785-.164t.551-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.765a.8.8 0 0 1-.117.364.7.7 0 0 1-.273.248.9.9 0 0 1-.401.088.85.85 0 0 1-.478-.131.83.83 0 0 1-.298-.393 1.7 1.7 0 0 1-.103-.627zm5.092-1.76h.894l-1.275 2.006 1.254 1.992h-.908l-.85-1.415h-.035l-.852 1.415h-.862l1.24-2.015-1.228-1.984h.932l.832 1.439h.035z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="red"
                                class="bi bi-trash card-cursor "
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                              </svg>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
