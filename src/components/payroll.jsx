import { IoReceiptOutline } from "react-icons/io5";
import { TbLoader3 } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Payroll() {
  return (
    <div className="mx-3">
    <div className="d-flex flex-wrap  justify-content-between mt-2">
        <p className="pt-2 m-0 all-page-head">Payroll</p>
        <div className="mt-1"> 
          <button className="btn border text-color sub-head-text-4 payroll-button-size me-2 bg-white "><TbLoader3 className="text-black" /> Add E-Sign</button>
        <Link to="/payslip"><button className="btn bg-black text-white button-size-head sub-head-text-4  "><IoReceiptOutline /> Pay&nbsp;Slips</button></Link>
</div>
      </div>
      <hr />
    <div className="container-fluid o mt-3">
      <div className="row mt-3  gap-3 gap-md-0">
        <div className="col-lg-3 col-md-6 mb-md-3 mb-0 ">
          <div className="top-payroll-margin">
            <div className="card  shadow card-cursor h-100">
              <div className="p-2 pe-lg-0 m-2">
                <p className="m-0 text-start sub-head-text-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    class="bi bi-cash-coin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                    />
                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                  </svg>
                  &nbsp;&nbsp;Company Balance
                </p>
                <hr className="my-2"b/>
                <div>
                  < p className="mb-2 text-start sub-head-text-1">₹ 16,00,000.00</p>
                  <p className="text-color mb-0 text-start sub-head-text-2 ">20% Increase Since Last Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="top-payroll-margin">
            <div className="card card-effect shadow card-cursor ">
              <div className="p-2 m-2">
                <p className="m-0 text-start sub-head-text-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-wallet"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                  </svg>
                  &nbsp;&nbsp;Company Expense
                </p>
                <hr className="my-2" />
                <div>
                  <p className="mb-2 text-start sub-head-text-1">₹ 16,00,000.00</p>
                  <p className="text-color mb-0 text-start sub-head-text-2">10% Increase Since Last Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="top-payroll-margin">
            <div className=" card card-effect shadow h-100 card-cursor ">
              <div className="p-2 m-2">
                <p className="m-0  text-start sub-head-text-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="orange"
                    class="bi bi-coin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  </svg>
                &nbsp;Upcoming Salary Amount
                </p>
                <hr className="my-2" />
                <div>
                  <p className="mb-2 text-start sub-head-text-1">₹ 16,00,000.00</p>
                  <p className="text-color mb-0  text-start sub-head-text-2 pb-lg-1 pb-xl-0">23 Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="top-payroll-margin ">
            <div className="card card-effect shadow card-cursor  ">
              <div className="p-2 m-2 pe-lg-0">
                <p className="m-0 text-start sub-head-text-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="yellowgreen"
                    class="bi bi-wallet-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
                  </svg>
                  &nbsp;&nbsp;Company Balance
                </p>
                <hr className="my-2" />
                <div>
                  <p className="mb-2 text-start sub-head-text-1">₹ 76,00,000.00</p>
                  <p className="text-color mb-0 text-start sub-head-text-2">20% Increase Since Last Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col-lg-8 mb-3 mb-md-3  top-payroll-margin">
          <div className="card card-cursor  h-100   bg-white height-1">
            <div className="p-2 d-flex justify-content-between">
              <div className="payroll-heading">
                <p className="m-0 text-color sub-head-text-1 ">All Acivites</p>
                <p className="text-start sub-head-text-1">Payroll Expenses</p>
              </div>
              <div className="mt-3 me-md-1 me-0">
                <input type="date" className="form-control payroll-input sub-head-text-2 ms-2 ms-md-0" />
              </div>
            </div>
            <div style={{overflow:"scroll"}}>
              <img src="graph1.png" className="graph-img-1 pe-md-5 pe-lg-0" alt="graph" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-cursor  bg-white h-100">
            <div>
              <p className="payroll-heading text-start sub-head-text fw-semibold ms-3 mt-3">Employment Status</p>
            </div>
            <div className="card-body p-4">
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
              <div className="mt-5 pt-2 ">
                <img src="detail.png" className="w-100 h-auto  p-md-4 p-lg-0 " alt="details" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 m-1 ">
        <div className="card    mt-2">
          <div className="d-lg-flex  justify-content-between">
            <div className="col-lg-4 ">
              <div className="attend-graph-header  ">
                <p className="table-heading-1 text-color sub-head-text">Employees</p>
                <p className=" sub-head-text-2">23 Employees</p>
              </div>
            </div>
            <div className="align-items-center  p-2 d-md-flex justify-content-between col gap-md-2 ">
              <input
                type="text"
                placeholder="Search"
                className="form-control w-md-50  sub-head-text-2 button-size-head mb-1 "
              />
               <input
                type="text"
                placeholder="Filter"
                className="form-control w-md-50  sub-head-text-2 button-size-head mb-1 "
              />
              <input type="date" className="form-control w-25 button-size-head sub-head-text-2 width-50  " />
              <button className="btn btn-border px-2 small-button bg-black text-white  button-size sub-head-text-2 button-size-head  ms-md-0 mt-4 mt-md-0 mb-md-0 me-md-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions3" aria-controls="offcanvasWithBothOptions">
                +&nbsp;Add&nbsp;Employee
              </button>
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
   
<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions3" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Add employee</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
    <div class="offcanvas-body sub-head-text-4 py-0">
          <div className=" mb-2">
            <label>
              Employee Name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" className="form-control mb-1 " />
          </div>
          <div className=" mb-1">
            <label>
              Job Role <span style={{ color: "red" }}>*</span>
            </label>
              <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0" />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></span>

            </div>          </div>
          <div className=" mb-1">
            <label>
              Department <span style={{ color: "red" }}>*</span>
            </label>
              <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0" />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></span>

            </div>          </div>
          <div className=" mb-2">
            <label>
              Date <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group  ">
              <input type="text" className="form-control mb-1 border-end-0 " />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>

            </div>
          </div>
          <div className=" mb-1">
            <label>
              Status <span style={{ color: "red" }}>*</span>
            </label>
              <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0" />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></span>

            </div>          </div>
          <div className=" mb-1">
            <label>
              Check In <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0 " />
              <span className="input-group-text off-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg></span> 

            </div>
          </div>
          <div className=" mb-1">
            <label>
              Check Out <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0 " />
              <span className="input-group-text off-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg></span> 

            </div>
          </div>
          
          <div className="card off-space">
            <div className="d-flex justify-content-around mt-3">
              <button className="btn border px-4 py-0 ">Cancel</button>
              <button className="btn bg-dark text-white px-4 ">Save</button>
            </div>
          </div>
        </div>
  </div>
</div>
  );
}
