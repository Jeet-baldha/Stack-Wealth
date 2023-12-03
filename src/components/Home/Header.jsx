/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import Fab from '@mui/material/Fab';


export default function Header() {
    
    return (
        <div className="header">
            <h2>Hi, Jeet!</h2>
            <h1>We cultivate your wealth like it’s ours, maximizing growth for shared prosperity</h1>
            <h5>invest like the top 1% with premium multi-asset portfolios.</h5>
            <div className="offer-text">
                <p>Earn 2x rewards with</p>
                <img className="one-logo" src="../static/image/one-logo.png" />
                <a href="#"  className="know-more-link">know more </a>
            </div>
            <Fab variant="extended" size="medium" className="download-btn btn" > <DownloadIcon /> Download Stack</Fab>
        </div>
    );

}