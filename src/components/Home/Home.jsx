import React from "react";
import Header from "./Header";
import IntroCard from "./Introduction";
import Strategies from "./Strategies";
import HelpSection from "./HelpSection";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';  


export default function Home(){
    return (
    <div className="home">
        <Header />
        <IntroCard />
        <Strategies />
        <HelpSection />
        <section style={{padding: '120px 100px'}}>
            <div className="rewards-line-box">
                
                <div style={{width:'50%',padding:'20px'}}>
                <h1>Seize the opportunity to earn lifetime rewards worth up to ₹10 lakh, ensuring a secure and prosperous future awaits you.</h1>
                <IconButton style={{color:'white',fontSize:'16px'}}>explore rewards <ArrowForwardIosIcon fontSize="16px" /> </IconButton>
                </div>
                <div>       
                    <img src="../static/image/netflix-logo.png" alt="" />
                </div>                
            </div>
        </section>

        <div className="safety-message">
            <img src="../static/image/secure.png" alt= "" />
            <h3> your data is 100% secure. we don't share your information with any third party.</h3>
        </div>

    </div>)
}