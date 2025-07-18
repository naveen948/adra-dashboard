import { GoFileDirectoryFill } from "react-icons/go";
import { Link } from "react-router-dom";
export default function Document(){
    return <div className="m-4 mt-2 mx-2 p-2 px-2 rounded ">
        <div className="row px-md-0">
        <div className="col-8">
            <p className=" all-page-head fw-medium">Documents</p>
        </div>
        <div className="col-md-7 col-12  col-lg-4">
            <div className=" gap-3 d-flex flex-wrap flex-md-nowrap justify-content-between">
                <div className="input-group">
                     <span class="input-group-text bg-white border-end-0" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
                    <input type="text" className="form-control border-start-0 px-0 sub-head-text-3" placeholder="  search.." />
                </div>
                
                <div>
                <button className="btn bg-black text-white px-3 button-text-size" data-bs-toggle="modal" data-bs-target="#document_create">+&nbsp;Create&nbsp;Folder</button>
                </div>
                
            </div>
        </div>
        <hr className="m-2" />
    </div>
        <div className="row mt-3 row-cols-md-3 row-cols-lg-4 doco-scroll row-cols-1">
            <div className="col mb-2">
                <div className="card card-effect shadow p-3 pb-0">
                    <div className="d-flex justify-content-between mb-1">
                        <div className="doco-logo d-flex justify-content-center align-items-center text-danger "><GoFileDirectoryFill className="doco-logo-icon text-info" /></div>
                        <div>
                            <div class="btn-group ">
  <button type="button" className="btn rounded" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
  </button>
  <ul class="dropdown-menu dropdown-menu-end sub-head-text-4 height-drop drop-size">
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="#0049e4" stroke-width="1.4"><path d="M6.5 6A1.5 1.5 0 0 1 8 4.5h5.5l4 4V18a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18z"/><path stroke-linejoin="round" d="M13 4.5V9h4.5"/></g></svg> Pause</button></li>
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="#0e0085" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"/></svg>&nbsp;&nbsp;&nbsp;Edit</button></li>
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#ff0606" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z" stroke-width="0.5" stroke="#ff0606"/></svg>&nbsp;&nbsp;&nbsp;Delete</button></li>
  </ul>
</div></div>
                    </div>
                    <div>
                        <div className="my-2">
                        <p className="mb-1 sub-head-text-1 ">Receips</p>
                        </div>
                        <hr className="m-0 mb-2" />
                        <div className="d-flex justify-content-between">
                          <div><p className="sub-head-text-1 text-primary">810 Files</p></div>
                          <div><p className="sub-head-text-1 text-primary">1.6GB</p></div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col mb-2">
                <Link to="/documents-file" className="text-decoration-none"><div className="card card-effect shadow p-3 pb-0">
                    <div className="d-flex justify-content-between mb-1">
                        <div className="doco-logo d-flex justify-content-center align-items-center text-danger "><GoFileDirectoryFill className="doco-logo-icon text-warning" /></div>
                        <div>
                            <div class="btn-group ">
  <button type="button" className="btn rounded" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
  </button>
  <ul class="dropdown-menu dropdown-menu-end sub-head-text-4 height-drop drop-size">
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="#0049e4" stroke-width="1.4"><path d="M6.5 6A1.5 1.5 0 0 1 8 4.5h5.5l4 4V18a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18z"/><path stroke-linejoin="round" d="M13 4.5V9h4.5"/></g></svg> Pause</button></li>
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="#0e0085" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"/></svg>&nbsp;&nbsp;&nbsp;Edit</button></li>
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#ff0606" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z" stroke-width="0.5" stroke="#ff0606"/></svg>&nbsp;&nbsp;&nbsp;Delete</button></li>
  </ul>
</div></div>
                    </div>
                    <div>
                        <div className="my-2">
                        <p className="mb-1 sub-head-text-1">Employee Documents</p>
                        </div>
                        <hr className="m-0 mb-2" />
                        <div className="d-flex justify-content-between">
                          <div><p className="sub-head-text-1 text-primary">810 Files</p></div>
                          <div><p className="sub-head-text-1 text-primary">1.6GB</p></div>
                        </div>
                        
                    </div>
                    
                </div></Link>
            </div>
            <div className="col mb-2">
                <div className="card card-effect shadow p-3 pb-0">
                    <div className="d-flex justify-content-between mb-1">
                        <div className="doco-logo d-flex justify-content-center align-items-center text-danger "><GoFileDirectoryFill className="doco-logo-icon text-success" /></div>
                        <div>
                            <div class="btn-group ">
  <button type="button" className="btn rounded" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
  </button>
  <ul class="dropdown-menu dropdown-menu-end sub-head-text-4 height-drop drop-size">
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="#0049e4" stroke-width="1.4"><path d="M6.5 6A1.5 1.5 0 0 1 8 4.5h5.5l4 4V18a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18z"/><path stroke-linejoin="round" d="M13 4.5V9h4.5"/></g></svg> Pause</button></li>
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="#0e0085" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"/></svg>&nbsp;&nbsp;&nbsp;Edit</button></li>
    <li><button class="dropdown-item" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#ff0606" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z" stroke-width="0.5" stroke="#ff0606"/></svg>&nbsp;&nbsp;&nbsp;Delete</button></li>
  </ul>
</div></div>
                    </div>
                    <div>
                        <div className="my-2">
                        <p className="mb-1  sub-head-text-1">Other Documents</p>
                        </div>
                        <hr className="m-0 mb-2" />
                        <div className="d-flex justify-content-between">
                          <div><p className="sub-head-text-1 text-primary">810 Files</p></div>
                          <div><p className="sub-head-text-1 text-primary">1.6GB</p></div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>


<div class="modal fade" id="document_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header pb-0">
        <p class="sub-head-text fw-medium" id="exampleModalLabel">Create Folder</p>
        <button type="button" class="btn-close mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        <label className="sub-head-text-1" >Folder Name <span style={{ color: "red" }}>*</span></label>
        <input type="text" className="form-control sub-head-text-3" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary sub-head-text-3" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn bg-black text-white sub-head-text-3">Create</button>
      </div>
    </div>
  </div>
</div>

        </div>
}