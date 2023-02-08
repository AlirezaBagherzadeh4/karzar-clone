import {React, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import NewKarzars from "../components/NewKarzars";
import PopularKarzars from "../components/PopularKarzars";
import SuccessedKarzars from "../components/SuccessedKarzars";
import OpenKarzars from "../components/OpenKarzars";
import User from "./User";

const App = () => {
    const [token, setToken] = useState();

    return (
        <BrowserRouter>
            <div className="root-sub">
                <Navbar/>
                <br/>
                <br />
                <Routes>
                    <Route>
                        <Route exact path="/" element={<Landing/>}/>
                        <Route exact path="/newKarzars" element={<NewKarzars/>}/>
                        <Route exact path="/popularKarzars" element={<PopularKarzars/>}/>
                        <Route exact path="/successedKarzars" element={<SuccessedKarzars/>}/>
                        <Route exact path="/openKarzars" element={<OpenKarzars/>}/>
                        <Route exact path="/user/1234" element={<User />}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
