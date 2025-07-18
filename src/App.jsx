import Attendence from "./components/attendence";
import Payroll from "./components/payroll";
import Employee from "./components/employee";
import Notes from "./components/notes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

import Documents from "./components/documents";
import Employeedetails from "./components/test-details";
import Login from "./components/login ";
import { Interview } from "./components/interview";
import Dashboard from "./components/dashboard";
import Project from "./components/project";
import Timesheet from "./components/timesheet";
import Expenses from "./components/expenses";
import Employee_documents from "./components/documentDetails";
import Employee_document from "./components/documentDetail";
import AdminExpenses from "./components/adminExpenses";
import Courses from "./components/courses";
import Payslip from "./components/payslips";
import Slip from "./components/payslip";
import DragDropCards from "./components/drop";
import ForgotPassword from "./components/forgot";
function App() {
  return <div className="container-fluid">
    {/* <DragDropCards/> */}
    <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot" element={<ForgotPassword/>}/>
                <Route element={<Layout />}>
                  <Route path="/employee" element={<Employee />}/>
                  <Route path="/dashboard" element= {<Dashboard/>}/>
                  <Route path="/notes" element={<Notes/>} />
                  <Route path="/document" element={<Documents />} />
                  <Route path="/employee-details" element={<Employeedetails />}/>
                  <Route path="/attendence" element={<Attendence />} />
                  <Route path="/payroll" element={<Payroll />} />
                  <Route path="/invoice" element={<Interview />} />
                  <Route path="/timesheet" element={<Timesheet />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/expenses" element={<Expenses />} />
                  <Route path="/documents-file" element={<Employee_documents />} />
                  <Route path="/documentpage" element={<Employee_document/>} />
                  <Route path="/adminexpenses" element={<AdminExpenses/>} />
                  <Route path="/course" element={<Courses/>} />
                  <Route path="/payslip" element={<Payslip/>} />
                   <Route path="/slip" element={<Slip/>} />


                 
                </Route>
              </Routes>
            </BrowserRouter>
  
  </div>
}

export default App;