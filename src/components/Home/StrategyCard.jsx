import React from "react";
import Button from "../Style-Components/Button";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function StrategyCard(props) {



    return (
        <div >
            <div className="strategy-card"style={{backgroundColor:props.bgColor}} >

            <h1>{props.heading}</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '22px',
                alignItems: 'center',
                gap: '10px'
            }}>
                {props.icon}
                <p>{props.iconText}</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '22px',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button text={props.butText} />
                <ArrowForwardIosIcon fontSize="small" />
            </div>

            </div>
            <div className="strategy-card-bottom-text">
                <p>{props.bottomTextLeft}</p>
                <p>{props.bottomTextRight}</p>
            </div>
        </div>
    );

}