import { Link } from "react-router-dom";
import { TbCreditCardPay } from "react-icons/tb";
import { IoReceiptOutline } from "react-icons/io5";
import { TbCreditCardRefund } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
export default function Slip(){
    return <div className="mx-4 ">
        <div className="row mt-3 ">
        <div className="col-8 d-flex">
                <Link to="/payslip" className="text-decoration-none"><span className="text-decoration-none"><IoChevronBack className="text-black mb-1" /></span></Link>
                <p className="fw-medium ms-2">Naveen Pay Slips</p>
            </div>
            </div>
    <div className="row mt-3 ">
        <div className="col-lg-3 col-md-6 ">
          <div className="top-payroll-margin">
            <div className="card card-effect shadow card-cursor ">
              <div className="p-2 pe-lg-0 m-2">
                <p className="m-0 text-start sub-head-text-1 fw-normal">
                  <IoReceiptOutline className="text-success" />
                  &nbsp;&nbsp;Total Payslip Generated
                </p>
                <hr className="my-2"b/>
                <div>
                  < p className="mb-1 text-start sub-head-text-1 fw-medium">18</p>
                  <p className="text-color mb-0 text-start sub-head-text-3 ">Payroll Processing completed for all registered this month </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="top-payroll-margin">
            <div className="card card-effect shadow card-cursor ">
              <div className="p-2 m-2">
                <p className="m-0 text-start sub-head-text-1 fw-normal">
                  <TbCreditCardPay className="text-danger" />
                  &nbsp;&nbsp;Company Expense
                </p>
                <hr className="my-2" />
                <div>
                  <p className="mb-1 text-start sub-head-text-1 fw-medium">₹ 20,000</p>
                  <p className="text-color mb-0 text-start sub-head-text-3">Salary deductions applied due to leaves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="top-payroll-margin">
            <div className=" card card-effect shadow h-100 card-cursor ">
              <div className="p-2 m-2">
                <p className="m-0  text-start sub-head-text-2 fw-normal">
                  <IoReceiptOutline className="text-primary" />
                &nbsp;Provident Fund & ESI
                </p>
                <hr className="my-2" />
                <div>
                  <p className="mb-1 text-start sub-head-text-1 fw-medium">₹ 1,800</p>
                  <p className="text-color mb-0  text-start sub-head-text-2 pb-lg-1 pb-xl-0">The employee is not eligible for ESI as the salary exceeds ₹20K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="top-payroll-margin ">
            <div className="card card-effect shadow card-cursor  ">
              <div className="p-2 m-2 pe-lg-0">
                <div className="d-flex justify-content-between">
                <p className="m-0 text-start sub-head-text-1 fw-normal">
                  <TbCreditCardRefund className="text-warning" />
                  &nbsp;&nbsp;Payment Account
                </p>
                <div className="">
                    <button className="btn border p-0 px-1 me-1 "><BsPlus /></button>
                    <button className="btn border p-0 px-1 "><MdOutlineDeleteOutline /></button>
                </div>
                </div>
                <hr className="my-2" />
                <div className="pb-2 d-flex justify-content-between">
                    <div><p className="mb-2 text-start sub-head-text-1 fw-normal ">Indian Bank</p>
                  <p className="text-color mb-0 text-start text-success sub-head-text-2">Connected</p></div>
                  <div>
                    <img src="indianBank.svg" alt="bank logo" className="rounded me-1" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 naveen-pay">
                  <div className="col-8 bg-white rounded  p-2 pt-3 ">
                <div className="">
                    <div className="row ">
                        <div className="col-9 px-4">
                            <div >
                                <p className="m-0 sub-head-text-2">Employee Payslip List</p>
                                <p className="m-0 sub-head-text-4 text-color">Here’s are employee payslip list details</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex gap-1">
                                
<div className="input-group  height-bar ms-2"><span class="input-group-text border-end-0 bg-white" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg></span><input type="text" className="form-control border-start-0 sub-head-text-3 px-2 " placeholder="Filter" /></div>
                                <button className="btn border height-bar-btn  bg-white">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <table className="table table-hover">
                        <thead>
                            <tr className="sub-head-text-3 fw-medium table-success">
                                <td>Bill Name</td>
                                <td>Date</td>
                                <td>Invoice Number</td>
                                <td>GST</td>
                                <td>Tax</td>
                                <td>Mode Of Payment</td>
                                <td>Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="sub-head-text-4">
                             
                                <td>Aws Cloud Bill</td>
                                <td>Jun27,2025</td>
                                <td>INV_20240719-001</td>
                                <td>0%</td>
                                <td>10%</td>
                                <td >Gpay</td>
                                <td>₹16,000</td>
                            </tr>
                            <tr className="sub-head-text-4">
                           
                                <td>Aws Cloud Bill</td>
                                <td>Jun27,2025</td>
                                <td>INV_20240719-001</td>
                                <td>0%</td>
                                <td>10%</td>
                                <td >Gpay</td>
                                <td>₹16,000</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className="col-4 naveen-pay1">
              <div className="card shadow">
                <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <div className="naveen-slip-img">
                    <img src="67.jpg" alt="photo" />
                  </div>
                  <div className="p-xl-2 mt-3 ms-2 p-1 ps-lg-3 ">
                    <p className="m-0 sub-head-text-1">Prakash S</p>
                    <p className="m-0 text-color work-role-p sub-head-text-2">
                      Ui Ux Designer
                    </p>
                  </div>
                </div>
                <div>
                  <button className="btn mt-4 border me-2 "><HiOutlineDotsVertical /></button>
                </div>
                </div>
                <hr className="mx-2 mb-0 mt-0" />
                <div className="card-body">
                  <div>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Position<span className="text-black">UI/UX Designer</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Department<span className="text-black">Design</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Payslip ID<span className="text-black">#PS-37464883-998</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Status<span className="text-success">Generated</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Payment Date<span className="text-black">Jun 03,2025</span></p>
                    <hr />
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Basic Salary<span className="text-black">₹ 8,000</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">House Rent Allowance<span className="text-black">₹ 4,000</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Medical Allowance<span className="text-black">₹ 3,000</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Gross Earnings<span className="text-black">₹ 14,000</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Total Working Days<span className="text-black">26 Days</span></p>
                    <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Deduction<span className="text-black">-₹ 1000</span></p>
                    <hr />
                     <p className="sub-head-text-3 text-color d-flex justify-content-between m-1">Total<span className="text-primary">₹ 13,000</span></p>
                  </div>
                </div>
              </div>
            </div>
                </div>
                
      </div>

}