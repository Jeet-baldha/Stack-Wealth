import React from "react";
import PersonCard from "./PersonCard";

export default function Intro(){

    return (
        <div className="intro">
            <PersonCard text="Welcome to satck" img="../static/image/p-w-1.jpg" />
            <PersonCard text="Diversified investments" img="../static/image/p-m-2.jpg" />
            <PersonCard text="Personlized portfolios" img="../static/image/p-w-2.jpg" />
            <PersonCard text="Team & partners" img="../static/image/p-m-1.jpg"  />
            <PersonCard text="What's next?" img="../static/image/p-w-3.jpg" />
        </div>
    );

}