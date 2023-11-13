import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import "./Layout.css";

const PageLayout = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
