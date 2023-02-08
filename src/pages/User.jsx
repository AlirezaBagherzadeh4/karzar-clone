import React from "react";
import Sidebar from "../components/Sidebar";
import "../assets/user.css"

const User = () => {
    return (
        <React.Fragment>
            <div className="user-cnt">
              <Sidebar></Sidebar>
            </div>
        </React.Fragment>
    )
}

export default User;