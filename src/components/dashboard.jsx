import { IoPersonRemoveOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Example from "./piechart";
import BarChart from "./bargrap";
import Chart from "./bargrap";
export default function Dashboard(){
    return <div className="px-4 scroll ">
    <div className="row">
        <div className="col-12 col-xl-5">
            <div className="row mt-2">
                <div className="col-md-6 col-12 ">
                    <div className="card shadow  card-effect rounded card-cursor  p-3 mb-3">
                <div className="d-flex justify-content-between ">
              <p className="fw-medium">20</p>
              <div className="attend-icon-holder ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  class="bi bi-people-fill "
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </div>
                </div>
                <p className=" mb-1 sub-head-text-1">Total Employees</p>
          </div></div>
                <div className="col-md-6 col-12 "><div className="card  card-effect shadow rounded card-cursor  p-3 mb-3">
                <div className="d-flex justify-content-between ">
              <p className="fw-medium">01</p>
              <div className="attend-icon-holder">
                <IoPersonRemoveOutline />
              </div>
                </div>
                <p className="mb-1 sub-head-text-1">Absent</p>
          </div></div>
            </div>
            <div className="row">
                <div className="col-md-6 col-12 "><div className="card card-effect shadow rounded card-cursor  p-3 mb-3">
                <div className="d-flex justify-content-between ">
              <p className="fw-medium">₹ 2,00,000</p>
              <div className="attend-icon-holder">
                <FaMoneyBillTransfer />
              </div>
                </div>
                <p className=" mb-1 sub-head-text-1">Company Expenses</p>
          </div></div>
                <div className="col-md-6 col-12 "><div className="card card-effect shadow rounded card-cursor  p-3 mb-3">
                <div className="d-flex justify-content-between ">
              <p className="fw-medium">₹ 2,00,000</p>
              <div className="attend-icon-holder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </div>
                </div>
                <p className=" mb-1 sub-head-text-1">Expenses</p>
          </div></div>
            </div>
        </div>
            <div className="col-xl-4 col-12 col-md-6 my-2 mb-3">
                <div className="card card-effect  shadow h-100   ">
                    <div className="d-flex justify-content-between">
                    <p className="dash-head">Attendence</p>
                    <input type="month" className="form-control sub-head-text-4 dash-date  w-50" />
                    </div>
                    <hr className="m-0 mx-2" />
                    <div className="pie-chart">
                        {/* <img src="piechart.png" alt="piechart"  /> */}
                        <Example/>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-12 col-md-6 mt-2 mb-3">
                <div className="card  shadow card-effect h-100 ">
                <div className="d-flex justify-content-between">
                    <p className="dash-head">Subscriptions & Tools</p>
                    </div>
                    <hr className="m-0 mx-2" />
                    <div className=" p-2  list-card">
                        <div className="card border p-1 mb-2">
                          <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img mt-1">
                                <img src="udemy.svg" alt="udemy" />
                            </div>
                            <div className="ms-2 mt-1">
                                <p className="m-0 sub-head-text-4 text-color">Udemy - Dev App course</p>
                                <p className="m-0 sub-head-text-4">Renewal Date : Aug 15, 2025</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="fw-medium sub-head-text-4 ">$ 200</p>
                        </div>
                    </div>
                        </div>
                        <div className="card border p-1 mb-2">
                          <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img mt-1">
                                <img src="figma.svg" alt="udemy" />
                            </div>
                            <div className="ms-2 mt-1">
                                <p className="m-0 sub-head-text-4 text-color">Udemy - Dev App course</p>
                                <p className="m-0 sub-head-text-4">Renewal Date : Aug 15, 2025</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="fw-medium sub-head-text-4 mt-2">$ 200</p>
                        </div>
                    </div>
                        </div>
                        <div className="card border p-1 mb-2">
                          <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img mt-1">
                                <img src="udemy.svg" alt="udemy" />
                            </div>
                            <div className="ms-2 mt-1">
                                <p className="m-0 sub-head-text-4 text-color">Udemy - Dev App course</p>
                                <p className="m-0 sub-head-text-4">Renewal Date : Aug 15, 2025</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="fw-medium sub-head-text-4 ">$ 200</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div className="row  mt-1">
        <div className="col-lg-8 col-12 col-md-7 mb-3 mb-md-0  top-payroll-margin">
          <div className="card card-cursor h-100   bg-white height-1">
            <div className="p-2 d-flex justify-content-between ">
              <div className="payroll-heading">
                <p className="m-0 text-color sub-head-text-1 ">All Acivites</p>
                <p className="text-start sub-head-text-1">Payroll Expenses</p>
              </div>
              <div className="mt-3 me-md-1 me-0">
                <input type="date" className="form-control payroll-input sub-head-text-2 ms-2 ms-md-0" />
              </div>
            </div>
            <div style={{overflow:"scroll"}}  className=" px-3  pb-0" >
              {/* <img src="graph1.png" className="graph-img-1 pe-md-5 pe-lg-0  " alt="graph" /> */}
              <Chart/>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-12">
          <div className="card  card-cursor  bg-white h-100">
            <div>
              <p className="payroll-heading text-start dash-head fw-semibold ms-3 mt-3">Employment Status</p>
            </div>
            <div className="card-body ">
              <div className="row px-3">
                <div className="col-3 size-div1"></div>
                <div className="col-5 size-div2"></div>
                <div className="col-4 size-div3"></div>
              </div>
              <div className="row">
                <div className="col-3 text-center text-start sub-head-text-2">15%</div>
                <div className="col-5 text-center text-start sub-head-text-2">60%</div>
                <div className="col-4  text-center text-start sub-head-text-2">25%</div>
              </div>
              <div className="mt-xl-5  pt-2 employment-status-img">
                <img src="detail.png" className="w-100 h-auto p-lg-0  " alt="details" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 m-1 ">
        <div className="card    mt-2">
          <div className="d-lg-flex  justify-content-between">
            <div className="col-lg-7 ">
              <div className="attend-graph-header  ">
                <p className="table-heading-1  sub-head-text">Employees</p>
                <p className=" sub-head-text-2 text-color">23 Employees</p>
              </div>
            </div>
            <div className="align-items-center  gap-2 p-2 mx-md-2 d-flex justify-content-between col gap-md-2 ">
              <input
                type="text"
                placeholder="Search"
                className="form-control w-50  sub-head-text-3 button-size-head "
              />
               <input
                type="text"
                placeholder="Filter"
                className="form-control w-md-50 w-25  sub-head-text-2 button-size-head mb-1 mt-1 "
              />
              <input type="date" className="form-control w-25 button-size-head sub-head-text-2 width-50  " />
            </div>
          </div>
          <div className="table-flow m-3" style={{height:"200px"}} >
            <table className="table border  table-vertical-lines table-hover ">
              <thead className="sub-head-text-1">
                <tr className="text-center table-success">
                  <td  className="p-2 ">Sno</td>
                  <td>Employee</td>
                  <td>Role</td>
                  <td>Department</td>
                  <td>Date</td>
                  <td>Status</td>
                  <td>Check-In</td>
                  <td>Check-Out</td>
                  <td>Working-Hours</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody className="sub-head-text-2">
                <tr  className="text-center " style={{height:"50px"}}>
                  <td className="border-bottom-0">01</td>
                  <td className="border-bottom-0">naveen</td>
                  <td className="border-bottom-0">UI UX Designer</td> 
                  <td className="border-bottom-0">Design</td>
                  <td className="border-bottom-0">16-Apr-2025</td>
                  <td className="border-bottom-0">Work From Office</td>
                  <td className="border-bottom-0">08:32 am</td>
                  <td className="border-bottom-0">06:12 pm</td>
                  <td className="border-bottom-0">09h 20m</td>
                  <td className="border-bottom-0">:</td>
                </tr>
                <tr  className="text-center " style={{height:"50px"}}>
                  <td className="border-bottom-0">01</td>
                  <td className="border-bottom-0">naveen</td>
                  <td className="border-bottom-0">UI UX Designer</td> 
                  <td className="border-bottom-0">Design</td>
                  <td className="border-bottom-0">16-Apr-2025</td>
                  <td className="border-bottom-0">Work From Office</td>
                  <td className="border-bottom-0">08:32 am</td>
                  <td className="border-bottom-0">06:12 pm</td>
                  <td className="border-bottom-0">09h 20m</td>
                  <td className="border-bottom-0">:</td>
                </tr>
                <tr  className="text-center " style={{height:"50px"}}>
                  <td className="border-bottom-0">01</td>
                  <td className="border-bottom-0">naveen</td>
                  <td className="border-bottom-0">UI UX Designer</td> 
                  <td className="border-bottom-0">Design</td>
                  <td className="border-bottom-0">16-Apr-2025</td>
                  <td className="border-bottom-0">Work From Office</td>
                  <td className="border-bottom-0">08:32 am</td>
                  <td className="border-bottom-0">06:12 pm</td>
                  <td className="border-bottom-0">09h 20m</td>
                  <td className="border-bottom-0">:</td>
                </tr>
                <tr  className="text-center " style={{height:"50px"}}>
                  <td className="border-bottom-0">01</td>
                  <td className="border-bottom-0">naveen</td>
                  <td className="border-bottom-0">UI UX Designer</td> 
                  <td className="border-bottom-0">Design</td>
                  <td className="border-bottom-0">16-Apr-2025</td>
                  <td className="border-bottom-0">Work From Office</td>
                  <td className="border-bottom-0">08:32 am</td>
                  <td className="border-bottom-0">06:12 pm</td>
                  <td className="border-bottom-0">09h 20m</td>
                  <td className="border-bottom-0">:</td>
                </tr>
                <tr  className="text-center " style={{height:"50px"}}>
                  <td className="border-bottom-0">01</td>
                  <td className="border-bottom-0">naveen</td>
                  <td className="border-bottom-0">UI UX Designer</td> 
                  <td className="border-bottom-0">Design</td>
                  <td className="border-bottom-0">16-Apr-2025</td>
                  <td className="border-bottom-0">Work From Office</td>
                  <td className="border-bottom-0">08:32 am</td>
                  <td className="border-bottom-0">06:12 pm</td>
                  <td className="border-bottom-0">09h 20m</td>
                  <td className="border-bottom-0">:</td>
                </tr>
                <tr  className="text-center " style={{height:"50px"}}>
                  <td className="border-bottom-0">01</td>
                  <td className="border-bottom-0">naveen</td>
                  <td className="border-bottom-0">UI UX Designer</td> 
                  <td className="border-bottom-0">Design</td>
                  <td className="border-bottom-0">16-Apr-2025</td>
                  <td className="border-bottom-0">Work From Office</td>
                  <td className="border-bottom-0">08:32 am</td>
                  <td className="border-bottom-0">06:12 pm</td>
                  <td className="border-bottom-0">09h 20m</td>
                  <td className="border-bottom-0">:</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
}