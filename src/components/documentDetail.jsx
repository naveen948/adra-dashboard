import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
export default function  Employee_document(){
    return <>
    <div className="mt-3">
        <div className=" mx-4 d-flex">
            <Link to="/documents-file" className="text-decoration-none"><span className="text-decoration-none"><IoChevronBack className="text-black mb-1" /></span></Link>
            <p className=" fw-medium ms-2">Naveen S document</p>
        </div>
    <div className="vh-100 bg-white mx-4">
       <div className="row   px-4 pt-3 ">
        <div className="col-6"></div>
        <div className="col-12 col-md-6">
            <div className="d-flex  justify-content-end  ">
          <div className="input-group me-1 w-md-25 w-25 mb-1 mb-md-0 ">
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
              placeholder="Filter"
            />
          </div>
          <div className="input-group me-1 w-50 mb-3 mb-md-0 height-10 ">
            <input
              type="text"
              className="form-control  border-end-0 p-0 sub-head-text-2 "
              placeholder="    Search..."
            />
            <span
              class="input-group-text bg-white border-start-0"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>

          <button
            className="btn bg-black text-white sub-head-text-2 height-11 "
            type="button"
            data-bs-toggle="modal" data-bs-target="#AddFile"
          >
            Choose&nbsp;File
          </button>
        </div>
        </div>
        <hr className="my-2"/>
    </div>
    <div className="row mt-2 doco-file row-cols-1 row-cols-md-3 row-cols-xl-5 px-4">
        <div className="col mb-2">
            <div className="card shadow card-effect p-3">
                <div className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></div>
                <div className="document-logo mx-5"><img src="pdf.svg" alt="pdf" /></div>
                <hr />
                <div className="text-center">
                <p className="sub-head-text-3 m-0">Naveen S marksheet</p>
                <p className="sub-head-text-4 text-color">25,07,2025 . 10MB</p>
                <p></p>
                </div>
            </div>
        </div>
        
        <div className="col mb-2">
            <div className="card shadow card-effect p-3">
                <div className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></div>
                <div className="document-logo mx-5"><img src="xcel.svg" alt="pdf" /></div>
                <hr />
                <div className="text-center">
                <p className="sub-head-text-3 m-0">Naveen S marksheet</p>
                <p className="sub-head-text-4 text-color">25,07,2025 . 10MB</p>
                <p></p>
                </div>
            </div>
        </div>
        <div className="col mb-2">
            <div className="card shadow card-effect p-3">
                <div className="text-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></div>
                <div className="document-logo mx-5"><img src="pdf.svg" alt="pdf" /></div>
                <hr />
                <div className="text-center">
                <p className="sub-head-text-3 m-0">Naveen S marksheet</p>
                <p className="sub-head-text-4 text-color">25,07,2025 . 10MB</p>
                <p></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>



    <div class="modal fade" id="AddFile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-size modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header pb-0 d-flex justify-content-between">
        <div>
        <p class="modal-title sub-head-text fw-medium " id="exampleModalLabel">Media Upload</p>
        <p className="sub-head-text-4 text-color">Add your documents here, and you can upload up to 25mb files max</p>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body pb-0">
        <input type="file" className="sub-head-text-3" />
        <hr />
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-secondary p-0 px-3 py-1 mb-1">Browser</button>
        <p className="sub-head-text-4 text-color">Or Drop files in the drop zone above.</p>
      </div>
    </div>
  </div>
</div>
    </>
}