import React from "react";
import Sidebar from "../components/Sidebar";
import "../assets/user.css";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="user-cnt">
        <Sidebar></Sidebar>
      </div>
    </React.Fragment>
  );
};

export default Admin;
