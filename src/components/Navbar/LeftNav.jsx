/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Calculator from "../SipCalculator/Calculator";

export default function LeftNav(){

    const [calcDisplay,setCalcDisplay] = useState(false);

    function changeCalcDisplay(){
        setCalcDisplay(!calcDisplay)
    }


    const backdropStyle = {
        display: calcDisplay ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        backdropFilter: calcDisplay ? 'blur(5px)' : 'none',
        zIndex: 1000, // Adjust the z-index as needed
      };

    const calcDisplayStyle = {
        'display': calcDisplay ? "block" : "none",
        zIndex: 1001,
    }

    return (
    <div className="left-nav">
        <ul>
            <li><a href="#"><img className="stack-logo" src="https://webstatic.stackfinance.co/website-v4/stack-logo.webp" /></a></li>
            <li><a href="#" onClick={changeCalcDisplay}>Calculator</a></li>
        </ul>
        <div className="backdrop" style={backdropStyle} />
        <Calculator setCalcDisplay={setCalcDisplay} stl = {calcDisplayStyle}/>
        
    </div>
    )
}