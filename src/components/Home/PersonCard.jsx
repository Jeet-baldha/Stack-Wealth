import React from "react";


export default function PersonCard(props){
    return (

        <div className="person-card">
            <img className="person-image" src={props.img} alt="" />
            <p className="intro-text">{props.text}</p>
        </div>

    );
}