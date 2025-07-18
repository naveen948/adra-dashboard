export default function Timesheet(){
    return <div className=" mt-2 px-3">
    <div className="row mt-3">
        <div className="col-12 col-md-7">
            <p className="sub-head-text fw-medium mt-2">Timesheet</p>
        </div>
        <div className="col-12 col-md-5">
            <div className=" gap-3 d-flex flexwrap justify-content-between">
                <input type="text" className="form-control time-border px-0 sub-head-text-3" placeholder="  Search.." />
                <div className="d-flex mb-2 mb-md-0">
                <button className="btn bg-white time-border me-2 px-3 sub-head-text-3">Import</button>
                <button className="btn bg-black  text-white px-3 sub-head-text-3">Create</button>
                </div>
                
            </div>
        </div>
        <hr className="mx-3" />
    </div>
    <div className="table-sheet" >
        <table className="table table-hover">
            <thead className="sub-head-text-2 fw-medium">
                <tr className="">
                    <td className="text-color"><input type="checkbox" className="ms-2 mt-2"/></td>
                    <td className="px-md-5 px-lg-3 date-size text-center text-color "> Date</td>
                    <td className="text-center text-color">Employee</td>
                    <td className=" text-center manager-size text-color">Manager</td>
                    <td className="text-center text-color">Department</td>
                    <td className="text-center text-color">Activity</td>
                    <td className="text-center text-color">Time(hrs)</td>
                    <td className=" px-md-5 text-color">Remarks</td>
                    <td className=" text-start text-color">Status</td>
                </tr>
            </thead>
            <tbody className="sub-head-text-3">
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                <tr className="">
                    <td className=""><input type="checkbox"  className="ms-2 mt-2"/></td>
                    <td className="text-center">26-06-2025</td>
                    <td className="text-center">Naveen</td>
                    <td className=" text-center">Gopalakrishnan Vedhaviyas</td>
                    <td className="text-center">PD-SW</td>
                    <td className="text-center">SW-Development</td>
                    <td className="text-center">09:00</td>
                    <td className="text-center">Adra Dashboard Designing</td>
                    <td className="text-center pt-1"><div className="d-flex justify-content-center align-items-center "><p className="m-0">Draft</p><button className="button-text-size ms-3 btn border btn-info p-1 px-2">Complete</button></div></td>
                </tr>
                
                
                
            </tbody>
        </table>
    </div>
    </div>
}