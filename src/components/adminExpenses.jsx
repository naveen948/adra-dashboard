import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function AdminExpenses(){
    return <>
    <div className="d-flex justify-content-between mx-3 mt-3">
        <div className="d-flex"><Link to="/expenses"><span><IoChevronBack className="text-black mb-1" /></span></Link><p className="ms-2 fw-medium">Admin Expenses</p></div>
        <p className="text-color">Total Amount : <span className="text-dark">2,00,000</span></p>
    </div>
    <hr  className="mx-4 mt-0"/>
    <div className="">
        <div className="row  admin-height1  mx-3  ">
            <div className="col-12 col-xl-8  bg-white rounded  p-2 pt-3 ">
                <div className="">
                    <div className="row ">
                        <div className="col-md-6  col-12 px-4 ">
                            <div >
                                <p className="m-0 sub-head-text-3">Admin Expenses</p>
                                <p className="m-0 sub-head-text-4 text-color">100 Bills</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  mt-3">
                            <div className="d-flex flexwrap gap-2 ">
                                <div className="input-group height-bar mb-4 mb-md-0  "><input type="text" className="form-control sub-head-text-3 border-end-0   " placeholder="Search..." /><span class="input-group-text border-start-0 bg-white  " id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span></div>
<div className="input-group w-50 height-bar"><span class="input-group-text border-end-0 bg-white" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg></span><input type="text" className="form-control border-start-0 sub-head-text-3" placeholder="Filter" /></div>
                                <button className="btn border height-bar-btn mt-1 mt-md-0 admin-pad bg-white">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 admin-height1">
                    <table className="table table-hover">
                        <thead>
                            <tr className="sub-head-text-3 fw-medium table-success">
                                <td>S.No</td>
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
                                <td>01</td>
                                <td>Aws Cloud Bill</td>
                                <td>Jun27,2025</td>
                                <td>INV_20240719-001</td>
                                <td>0%</td>
                                <td>10%</td>
                                <td >Gpay</td>
                                <td>₹16,000</td>
                            </tr>
                            <tr className="sub-head-text-4">
                                <td>01</td>
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
            <div className="col-md-12 col-xl-4   admin-height1-img col-12 px-0   mt-3 mt-xl-0  rounded">
                <div className="vh-100 bg-white rounded ms-xl-2 p-3 ">
                    <div className="d-flex justify-content-between">
                        <p className="all-page-head">Detail View</p>
                        <button className="btn border height-bar-btn pt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-three-dots-vertical  mb-lg-0 mb-3" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
                    </div>
                    <div className="bill-img"><img src="bill1.svg" alt="bill" /></div>
                </div>
            </div>
        </div>
    </div>
    </>
}