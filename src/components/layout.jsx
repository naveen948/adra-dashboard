import {Outlet} from "react-router-dom";
import SideBar from "./side-bar";
import Header from "./header";

export default function Layout() {
  return (
    <div>
      <div className="row profile-cards">
        <div className="col-lg-2 sidebar-canva">
          <SideBar />
        </div>
        <div className="col p-0">
          <div>
            <Header />
          </div>
          <div classname="o">
            <div className="">
              <Outlet/>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
