import React from "react";
import Button from "../Style-Components/Button";

export default function ExportCard(){

    return (
        <div className="export-card">
                <img src="../static/image/avatar.jpg" alt="export"></img>
                <h1>ask our expert about anything finance.</h1>
            <Button text="ask now" />
        </div>
    );

}