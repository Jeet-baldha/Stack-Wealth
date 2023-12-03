import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function Navbar(){
    return (
    <div className="navbar">
        <LeftNav />
        <RightNav />
    </div>
    );
}


export default Navbar;