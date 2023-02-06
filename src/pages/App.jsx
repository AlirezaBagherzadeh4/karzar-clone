import React from "react";
import Navbar from "../components/Navbar";
import NewKarzars from "../components/NewKarzars";
import PopularKarzars from "../components/PopularKarzars";
import SuccessedKarzars from "../components/SuccessedKarzars";
import OpenKarzars from "../components/OpenKarzars";

const App = () => {
  return (
    <React.Fragment>
      <div className="root-sub">
        <Navbar />
        <br />
        <br />
        <NewKarzars />
        <br />
        <br />
        <PopularKarzars />
        <br />
        <br />
        <SuccessedKarzars />
        <br />
        <br />
        <OpenKarzars />
      </div>
    </React.Fragment>
  );
};

export default App;
