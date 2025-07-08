import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
export default function Courses(){
    return <>
    <div className="d-flex justify-content-between mx-4 mt-3">
        <div className="d-flex"><Link to="/expenses"><span ><IoChevronBack className="text-black mb-1" /></span></Link><p className="ms-2 fw-medium ">Courses</p></div>
        <p className="text-color">Total Amount : <span className="text-dark">2,00,000</span></p>
        
    </div>
    <hr className="mx-4 my-1 mb-3" />
    <div className=" vh-100 bg-white rounded pt-3 mx-4">
        <div className="row mx-4 ">
            <div className="  ">
                <div className="">
                    <div className="row ">
                        <div className="col-md-7 col-12">
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="d-flex gap-2 ">
                                <div className="input-group height-bar "><input type="text" className="form-control sub-head-text-3 border-end-0" placeholder="Search..." /><span class="input-group-text border-start-0 bg-white " id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span></div>
<div className="input-group w-50 height-bar"><span class="input-group-text border-end-0 bg-white" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg></span><input type="text" className="form-control border-start-0 sub-head-text-3" placeholder="Filter" /></div>
                                <button className="btn border sub-head-text-3 height-bar-btn  bg-black text-white">+&nbsp;Add&nbsp;Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="mx-1" />
        <div className="row row-cols-md-4 row-cols-1 mx-4 ">
            <div className="col">
                <div className="card card-effect shadow p-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img">
                                <img src="udemy.svg" alt="udemy" />
                            </div>
                            <div className="ms-2">
                                <p className="m-0 sub-head-text-4 text-color">Udemy</p>
                                <p className="m-0 sub-head-text-4">Backend Developer</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 my-2 sub-head-text-3">₹ 6,000</p>
                        <div className="row px-3 mb-1">
                            <div className="course-bar-height col-9"></div>
                            <div className="course-bar-height1 col-3"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Subscription Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2025</p>
                            </div>
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Renewal Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2026</p>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 my-2"/>
                    <div className="text-center"><p className="m-0 sub-head-text-3 text-primary text-decoration-underline">Buy Again</p></div>
                </div>
            </div>
            <div className="col">
                <div className="card card-effect shadow p-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img">
                                <img src="udemy.svg" alt="udemy" />
                            </div>
                            <div className="ms-2">
                                <p className="m-0 sub-head-text-4 text-color">Udemy</p>
                                <p className="m-0 sub-head-text-4 ">Backend Developer</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 my-2 sub-head-text-3">₹ 6,000</p>
                        <div className="row px-3 mb-1">
                            <div className="course-bar-height col-1"></div>
                            <div className="course-bar-height1 col"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Subscription Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2025</p>
                            </div>
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Renewal Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2026</p>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 my-2"/>
                    <div className="text-center"><p className="m-0 sub-head-text-3 text-primary text-decoration-underline">Buy Again</p></div>
                </div>
            </div>
            
            <div className="col">
                <div className="card card-effect shadow p-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img">
                                <img src="udemy.svg" alt="udemy" />
                            </div>
                            <div className="ms-2">
                                <p className="m-0 sub-head-text-4 text-color">Udemy</p>
                                <p className="m-0 sub-head-text-4">Backend Developer</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 my-2 sub-head-text-3">₹ 6,000</p>
                        <div className="row px-3 mb-1">
                            <div className="course-bar-height col-7"></div>
                            <div className="course-bar-height1 col-5"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Subscription Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2025</p>
                            </div>
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Renewal Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2026</p>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 my-2"/>
                    <div className="text-center"><p className="m-0 sub-head-text-3 text-primary text-decoration-underline">Buy Again</p></div>
                </div>
            </div>
            <div className="col">
                <div className="card card-effect shadow p-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="udemy-img">
                                <img src="udemy.svg" alt="udemy" />
                            </div>
                            <div className="ms-2">
                                <p className="m-0 sub-head-text-4 text-color">Udemy</p>
                                <p className="m-0 sub-head-text-4">Backend Developer</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></button>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 my-2 sub-head-text-3">₹ 6,000</p>
                        <div className="row px-3 mb-1">
                            <div className="course-bar-height col-6"></div>
                            <div className="course-bar-height1 col-6"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Subscription Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2025</p>
                            </div>
                            <div>
                            <p className="m-0 sub-head-text-4 text-color">Renewal Date :</p>
                            <p className="m-0 sub-head-text-4 text-primary">Jun 01,2026</p>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 my-2"/>
                    <div className="text-center"><p className="m-0 sub-head-text-3 text-primary text-decoration-underline">Buy Again</p></div>
                </div>
            </div>

        </div>
    </div>
    </>
}