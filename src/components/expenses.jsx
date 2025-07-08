import { SiCoursera } from "react-icons/si";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Expenses(){
    return <div>
        <div className="row  mt-2 px-4">
        <div className="col-lg-8 col-12">
            <p className="sub-head-text fw-medium mt-1">Expenses</p>
        </div>
        <div className="col-lg-4 col-12 mb-2">
            <div className=" gap-3 d-flex flexwrap justify-content-between">
                <div className="input-group expenses-input1  ">
                     <span class="input-group-text bg-white border-end-0 expenses-input" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
                <input type="text" className="form-control px-0 sub-head-text-3 border-start-0 expenses-input " placeholder="  search.." />

                </div>
                <div>
                <button className="btn bg-black text-white px-3 sub-head-text-3 expenses-input" data-bs-toggle="modal" data-bs-target="#exampleModal" >+&nbsp;Create&nbsp;Folder</button>
                </div>
                
            </div>
        </div>
        <hr />
    </div>
        <div className="bg-white vh-100 m-4 mt-2 mt-md-3 p-2 px-4 rounded">
        <div className="row mt-3 gap-3  row-cols-lg-4 row-cols-md-3 row-cols-1">
            <div className="col">
               <Link to="/adminexpenses" className="text-decoration-none"> <div className="card shadow p-3 pb-0">
                    <div className="d-flex justify-content-between mb-1">
                        <div className="expenses-logo d-flex justify-content-center align-items-center text-danger "><PiHandCoinsDuotone className="w-100 h-50 " /></div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical " viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
    </svg></div>
                    </div>
                    <div>
                        <div className="my-2">
                        <p className="mb-1 sub-head-text-1 ">Admin Expenses</p>
                        <p className="text-info ">₹ 2,00,000</p>
                        </div>
                        
                    </div>
                    
                </div></Link>
            </div>
            <div className="col">
                <Link to="/course" className="text-decoration-none"><div className="card shadow p-3 pb-0">
                    <div className="d-flex justify-content-between mb-1">
                        <div className="expenses-logo1 d-flex justify-content-center align-items-center text-primary "><SiCoursera className="w-100 h-50 " /></div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></div>
                    </div>
                    <div>
                        <div className="my-2">
                        <p className="mb-1 sub-head-text-1 ">Courses</p>
                        <p className="text-info ">₹ 2,00,000</p>
                        </div>
                        
                    </div>
                    
                </div></Link>
            </div>
            
        </div>
        </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Create Folder</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>



        </div>
}