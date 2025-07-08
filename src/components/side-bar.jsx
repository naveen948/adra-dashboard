import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BiCoinStack } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
import { GoTasklist } from "react-icons/go";
import { GrTasks } from "react-icons/gr";

export default function SideBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("dashboard");
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveTab("dashboard");
    } else if (path.includes("employee")) {
      setActiveTab("employee");
    } else if (path.includes("attendence")) {
      setActiveTab("attendance");
    } else if (path.includes("payroll")) {
      setActiveTab("payroll");
    } else if (path.includes("timesheet")) {
      setActiveTab("timesheet");
    } else if (path.includes("project")) {
      setActiveTab("project");
    } else if (path.includes("interview")) {
      setActiveTab("interview");
    } else if (path.includes("expenses")) {
      setActiveTab("expenses");
    } else if (path.includes("notes")) {
      setActiveTab("notes");
    } else if (path.includes("document")) {
      setActiveTab("document");
    }
  }, [location]);

  return (
    <>
      <div className="row ">
        <div className="p-0">
          <div className="h-100 bg-white hole-side-bar  me-1">
            <div className="text-center logo-img">
              <img src="logo.png" alt="logo" />
            </div>
            <hr />
            <div className=" d-flex  flex-column  justify-content-around gap-1 px-2">
              <Link to="/dashboard" onClick={() => setActiveTab("dashboard")}>
                <div
                  className={`side-bar-tabs px-3 sidebar-padding  rounded ${
                    activeTab === "dashboard" ? "active-tab" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grid"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                  </svg>
                  <button className="btn text-color sub-head-text-1 border-0 side-bar-size">
                    Dashboard
                  </button>
                </div>
              </Link>
              <Link to="/timesheet" onClick={() => setActiveTab("timesheet")}>
                <div
                  className={`side-bar-tabs px-3 sidebar-padding   rounded ${
                    activeTab === "timesheet" ? "active-tab" : ""
                  }`}
                >
                  <GoTasklist />
                  <button className="btn text-color sub-head-text-1 border-0 side-bar-size">
                    Time Sheet
                  </button>
                </div>
              </Link>
              <Link to="/project" onClick={() => setActiveTab("project")}>
                <div
                  className={`side-bar-tabs px-3  sidebar-padding  rounded ${
                    activeTab === "project" ? "active-tab" : ""
                  }`}
                >
                  <GrTasks />
                  <button className="btn text-color sub-head-text-1 border-0 side-bar-size">
                    Project
                  </button>
                </div>
              </Link>
              <Link to="employee" onClick={() => setActiveTab("employee")}>
                <div
                  className={`px-3 sidebar-padding side-bar-tabs rounded ${
                    activeTab === "employee" ? "active-tab" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  <button className="btn text-color  sub-head-text-1 border-0 side-bar-size">
                    Employees
                  </button>
                </div>
              </Link>
              <Link to="attendence" onClick={() => setActiveTab("attendance")}>
                <div
                  className={`px-3 sidebar-padding side-bar-tabs rounded ${
                    activeTab === "attendance" ? "active-tab" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-vcard"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
                  </svg>
                  <button className="btn text-color  sub-head-text-1 border-0 side-bar-size">
                    Attendance
                  </button>
                </div>
              </Link>
              <Link to="payroll" onClick={() => setActiveTab("payroll")}>
                <div
                  className={`px-3 sidebar-padding side-bar-tabs rounded ${
                    activeTab === "payroll" ? "active-tab" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-coin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  </svg>
                  <button className="btn text-color  sub-head-text-1 border-0 side-bar-size">
                    Payroll
                  </button>
                </div>
              </Link>
              <Link to="expenses"><div
                className={`px-3 sidebar-padding side-bar-tabs rounded ${
                  activeTab === "expenses" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("expenses")}
              >
                <BiCoinStack className="react-icon" />
                <button className="btn text-color  sub-head-text-1 border-0 side-bar-size">
                  Expenses
                </button>
              </div></Link>
              <Link to="document" onClick={() => setActiveTab("document")}>
                <div
                  className={`px-3 sidebar-padding side-bar-tabs rounded ${
                    activeTab === "document" ? "active-tab" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-files-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2m2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                  <button className="btn text-color  sub-head-text-1 border-0 side-bar-size">
                    Documents
                  </button>
                </div>
              </Link>
              <Link to="notes" onClick={() => setActiveTab("notes")}>
                <div
                  className={`px-3 sidebar-padding side-bar-tabs rounded ${
                    activeTab === "notes" ? "active-tab" : ""
                  }`}
                >
                  <SlNotebook className=""/>
                  <button className="btn text-color  sub-head-text-1 border-0 side-bar-size">
                    Notes
                  </button>
                </div>
              </Link>
              
            </div>
            <div className="px-2 ">
              <hr className="my-3" />
              <Link to="/"><div className=" text-center text-decoration-none me-1">
            <button className="btn text-color">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-box-arrow-left text-color" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg> Log Out
            </button>
          </div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
