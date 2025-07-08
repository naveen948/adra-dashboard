import { Link } from "react-router-dom";

export default function Test (){
    return <div className="bg-white">
        <h2>Adra-DashBoard</h2>
        <div>
            <Link to="/employee" className="text-decoration-none"><h5>Employee</h5></Link>
            <Link to="/notes" className="text-decoration-none"><h5>Notes</h5></Link>
            <Link to="/attendence" className="text-decoration-none"><h5>Attendence</h5></Link>
            <Link to="/payroll" className="text-decoration-none"><h5>Payroll</h5></Link>
            <Link to="/document" className="text-decoration-none"><h5>Documents</h5></Link>
        </div>
            

    </div>
}