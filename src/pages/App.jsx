import { React, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import NotFound from "./NotFound";
import AllKarzars from "../components/AllKarzars";
import NewKarzars from "../components/NewKarzars";
import PopularKarzars from "../components/PopularKarzars";
import SuccessedKarzars from "../components/SuccessedKarzars";
import OpenKarzars from "../components/OpenKarzars";
import User from "./User";
import Admin from "./Admin";

const App = () => {
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <div className="root-sub">
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route>
            <Route exact path="/" element={<Landing />} />
            <Route path="/404" element={<NotFound />} />
            <Route exact path="*" element={<Navigate to="/404" />} />
            <Route exact path="/allKarzars" element={<AllKarzars />} />
            <Route exact path="/newKarzars" element={<NewKarzars />} />
            <Route exact path="/popularKarzars" element={<PopularKarzars />} />
            <Route
              exact
              path="/successedKarzars"
              element={<SuccessedKarzars />}
            />
            <Route exact path="/openKarzars" element={<OpenKarzars />} />
            <Route exact path="/user/1234" element={<User />} />
            <Route exact path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
