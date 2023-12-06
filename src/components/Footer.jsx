/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SocialIcon } from 'react-social-icons'
import { Divider } from "@mui/material";

export default function Footer(){

    return (
        <>
        <div className="footer">
            <div className="footer-col" > 
                <div>
                    <img src="https://webstatic.stackfinance.co/website-v4/stack-logo.webp" alt="stack wealth logo" />
                    <h5>unleash your wealth's potential.</h5>
                </div>
                <div className="footer-social-icon">
                    <SocialIcon url="https://twitter.com"  bgColor="#1c1c1c" fgColor="#f2f2f2" />
                    <SocialIcon url="https://instagram.com" bgColor="#1c1c1c" fgColor="#f2f2f2" />
                    <SocialIcon url="https://linkedin.com" bgColor="#1c1c1c" fgColor="#f2f2f2" />
                    <SocialIcon url="https://discord.com" bgColor="#1c1c1c" fgColor="#f2f2f2" />
                </div>
            </div>

            <div className="footer-col">
                <h3 color="#ffffff">Products</h3>
                
                    <li><a href="#" >Flagship</a></li>
                    <li><a href="#" >Flash</a></li>
                    <li><a href="#" >Safe Haven</a></li>
                    <li><a href="#" >Opportunities</a></li>  
                
            </div>

            <div className="footer-col">
                <h3 color="#ffffff">Resources</h3>
                
                    <li><a href="#" >blog</a></li>
                    <li><a href="#" >faqs</a></li>
                    <li><a href="#" >masterclass</a></li>
                    <li><a href="#" >calculation</a></li>  
            
            </div>

        
        </div>
        <Divider className="divider" />
        <h2 style={{padding:'15px',textAlign:"center"}}> This website is use for only education purpose, all logos and content are <a href="https://stackwealth.in/" target="block">© 2023 Stackfin Technology Pvt Ltd.</a> </h2>
        </>
    );

}