import React from "react";
import Header from "./Header";
import IntroCard from "./Introduction";
import Strategies from "./Strategies";
import HelpSection from "./HelpSection";

export default function Home(){
    return (
    <div className="home">
        <Header />
        <IntroCard />
        <Strategies />
        <HelpSection />
    </div>)
}