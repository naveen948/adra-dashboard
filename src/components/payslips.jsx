import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Payslip(){
    return <>
    <div className="m-4 mx-2 mt-2 p-2 px-2 rounded ">
            <div className="row ">
            <div className="col-5 d-flex">
                <Link to="/payroll"><span className="text-decoration-none"><IoChevronBackOutline className="text-black mb-1" />
</span></Link>
                <p className=" fw-medium all-page-head ">Pay Slip</p>
            </div>
            <div className="col-12">
                <div className=" gap-1 d-flex flexwrap  mb-2 justify-content-between">
                    <div className="input-group me-md-5 me-0 ">
                         <span class="input-group-text bg-white border-end-0" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg></span>
                        <input type="text" className="form-control border-start-0 px-0 sub-head-text-3" placeholder="  search.." />
                    </div>
                    
                    <div className="input-group me-1 w-50 mb-1 mb-md-0 ">
            <span
              class="input-group-text bg-white border-end-0"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control sub-head-text-2    border-start-0 p-0 "
              placeholder="&nbsp;Filter"
            />
          </div>
                    
                </div>
            </div>
            <hr />
        </div>
            <div className="d-flex flex-wrap small-scroll medium-scroll mt-3 row-cols-2 row-cols-md-4  row-cols-xl-6">
               <div className="col p-2">
                    <Link to="/slip" className="text-decoration-none"><div className="card card-effect shadow p-1 pb-0">
                        <div className="payslip-img  my-3 ">
                            <img src="passport.png" alt="photo" />
                        </div>
                        <div className="sub-head-text-2 text-center">
                            <p className="m-0 fw-medium">Naveen</p>
                            <p className="text-color">Front-End Developer</p>
                        </div>
                        
                    </div></Link>
                </div>
                <div className="col p-2">
                    <Link to="/slip" className="text-decoration-none"><div className="card card-effect shadow p-1 pb-0">
                        <div className="payslip-img  my-3 ">
                            <img src="p-4.png" alt="photo" />
                        </div>
                        <div className="sub-head-text-2 text-center">
                            <p className="m-0 fw-medium">Barath</p>
                            <p className="text-color">Front-End Developer</p>
                        </div>
                        
                    </div></Link>
                </div>
                <div className="col p-2">
                    <Link to="/slip" className="text-decoration-none"><div className="card card-effect shadow p-1 pb-0">
                        <div className="payslip-img  my-3 ">
                            <img src="p-3.png" alt="photo" />
                        </div>
                        <div className="sub-head-text-2 text-center">
                            <p className="m-0 fw-medium">Nithya</p>
                            <p className="text-color">Front-End Developer</p>
                        </div>
                        
                    </div></Link>
                </div>
                <div className="col p-2">
                    <Link to="/slip" className="text-decoration-none"><div className="card card-effect shadow p-1 pb-0">
                        <div className="payslip-img  my-3 ">
                            <img src="p-2.png" alt="photo" />
                        </div>
                        <div className="sub-head-text-2 text-center">
                            <p className="m-0 fw-medium">praveen</p>
                            <p className="text-color">Front-End Developer</p>
                        </div>
                        
                    </div></Link>
                </div>
                <div className="col p-2">
                    <Link to="/slip" className="text-decoration-none"><div className="card card-effect shadow p-1 pb-0">
                        <div className="payslip-img  my-3 ">
                            <img src="p-5.png" alt="photo" />
                        </div>
                        <div className="sub-head-text-2 text-center">
                            <p className="m-0 fw-medium">kaveen</p>
                            <p className="text-color">Front-End Developer</p>
                        </div>
                        
                    </div></Link>
                </div>
                <div className="col p-2">
                    <Link to="/slip" className="text-decoration-none"><div className="card card-effect shadow p-1 pb-0">
                        <div className="payslip-img  my-3 ">
                            <img src="p-11.png" alt="photo" />
                        </div>
                        <div className="sub-head-text-2 text-center">
                            <p className="m-0 fw-medium">karthi</p>
                            <p className="text-color">Front-End Developer</p>
                        </div>
                        
                    </div></Link>
                </div>
               
              
                
                
                
            </div>
            
            </div>
    </>
}