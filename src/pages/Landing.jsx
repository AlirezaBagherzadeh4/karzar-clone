import React from "react";
import NewKarzars from "../components/NewKarzars";
import PopularKarzars from "../components/PopularKarzars";
import SuccessedKarzars from "../components/SuccessedKarzars";
import OpenKarzars from "../components/OpenKarzars";

const Landing = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Landing;