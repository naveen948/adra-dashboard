import { Link } from "react-router-dom";

export default function Employee() {
  return (
    <div className="m-1 mt-md-4 mx-3 ">
      <div className="d-md-flex justify-content-between mt-2 ms-xl-1 ">
        <p className="p-0 all-page-head  my-2 mt-3  m-md-0 ">Employees</p>
        <div className="d-flex  justify-content-end">
          <div className="input-group me-1 w-25 mb-1 mb-md-0 ">
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
              className="form-control sub-head-text-2    border-start-0 p-0  "
              placeholder="Filter"
            />
          </div>
          <div className="input-group me-1 w-50 mb-3 mb-md-0  height-10 ">
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
            className="btn bg-black text-white ms-3 ms-md-0 sub-head-text-2 height-11 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions1"
            aria-controls="offcanvasWithBothOptions"
          >
            +&nbsp;Upload
          </button>
        </div>
      </div>
      <hr className="" />
      <div className="mt-3  p-4 px-0 pt-0 pt-md-2  p-md-0">
        <div className="row  o m-xl-2 pading-employee  row-cols-lg-4 row-cols-xl-5 row-cols-md-3  row-cols-md-2 row-cols-2">
          <div className="col">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card  card-effect shadow mb-2 p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-2.png" className="rounded" alt="passport" />
                  <div className=" rounded  text-center text-white  sub-head-text-2  img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className="m-0 sub-head-text-1">Steve smith</p>
                  <p className=" sub-head-text-2 text-color mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2  p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="passport.png" className="rounded" alt="passport" />
                  <div className=" rounded  text-center text-white  sub-head-text-2  img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="sub-head-text-2 text-color mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2  p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-3.png" className="rounded" alt="passport" />
                  <div className="w-25 text-center text-white sub-head-text-2  img-text1">
                    Intern
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="text-color sub-head-text-2 mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2  p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-4.png" className="rounded" alt="passport" />
                  <div className=" rounded  text-center text-white sub-head-text-2   img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="sub-head-text-2 text-color mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2  p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-5.png" className="rounded" alt="passport" />
                  <div className=" rounded  text-center text-white sub-head-text-2   img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="sub-head-text-2 text-color mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2  p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-6.png" className="rounded" alt="passport" />
                  <div className=" rounded w-25 text-center sub-head-text-2 text-white  img-text1">
                    Intern
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="text-color sub-head-text-2 mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2  p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-7.png" className="rounded" alt="passport" />
                  <div className=" rounded  text-center text-white sub-head-text-2   img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="text-color sub-head-text-2 mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow  mb-2 p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-9.png" className="rounded" alt="passport" />
                  <div className=" rounded  text-center sub-head-text-2 text-white   img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="text-color sub-head-text-2 mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2 p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-10.png" className="rounded" alt="passport" />
                  <div className=" rounded  sub-head-text-2 text-center text-white   img-text px-1">
                    Full-Time
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="sub-head-text-2 text-color mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to="/employee-details" className="text-decoration-none">
              <div className="card card-effect shadow mb-2 p-1 profile-card">
                <div className="card-img-top profile-img">
                  <img src="p-11.png" className="rounded" alt="passport" />
                  <div className=" rounded sub-head-text-2 w-25 text-center text-white  img-text1 sub-head-text-2">
                    Intern
                  </div>
                </div>
                <div className="card-body p-1 text-center">
                  <p className=" m-0 sub-head-text-1">Prakash S</p>
                  <p className="text-color sub-head-text-2 mb-2">
                    Ui Ux Designer
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    className="mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-envelope svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <p className="profile-text mb-2 ">
                    prakashsekar.uiux@gmail.com
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 margin-svg"
                    width="16"
                    height="16"
                    fill="#A3A3A3"
                    class="bi bi-telephone svg-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <p className="profile-text">9790413271</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions1"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <p class="m-0 sub-head-text">Add Employee</p>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <hr className="my-0 mb-2" />
        <div class="offcanvas-body sub-head-text-4 py-0">
          <div className=" mb-2">
            <label>
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" className="form-control mb-1 " />
          </div>
          <div className=" mb-2">
            <label>
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" className="form-control mb-1 " />
          </div>
          <div className=" mb-2">
            <label>
              Email ID <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" className="form-control mb-1 " />
          </div>
          <div className=" mb-2">
            <label>
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <input type="text" className="form-control mb-1 " />
          </div>
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
          <div className=" mb-1">
            <label>
              Job Role <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0 " />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></span>

            </div>
          </div>
          <div className=" mb-1">
            <label>
              Employee Photo <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group ">
              <input type="text" className="form-control mb-1 border-end-0 " />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
</svg></span>

            </div>
          </div>
          <div className=" mb-4">
            <label>
              Joining Date <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input-group  ">
              <input type="text" className="form-control mb-1 border-end-0 " />
              <span class="input-group-text off-icon"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>

            </div>
          </div>
          <div className="card ">
            <div className="d-flex justify-content-around mt-2">
              <button className="btn border sub-head-text-3 px-4 py-0 ">Cancel</button>
              <button className="btn sub-head-text-3 bg-dark text-white px-4 ">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
