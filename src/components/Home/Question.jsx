import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function Question(props){
    const [selected, setSelected] = useState(false);

    const iconStyle= {
        color:'#1c1c1c',
        transition: '0.5s',
        borderRadius:'50%',
        backgroundColor:'#f2f2f2',
        fontSize:'25px',
        transform: selected ? 'rotate(0deg)' : 'rotate(-180deg)',
    }

    return (
        <div>
            <div style={{
                display:'flex',
                width: '100%',
                paddingTop:'10px',
                justifyContent:'space-between',
            }}>
                <h3 style={{fontSize:'16px',fontWeight:'500'}}>{props.questionTxt}</h3>
                <IconButton  onClick={() => {
                        setSelected(!selected);
                    }}>
                    <ArrowDropDownIcon style={iconStyle} name="arrow" />
                </IconButton>
                
            </div>
            <div className="ans-box" style={selected ? { display: 'none', transition: '2s' } : { display: 'block', transition: '2s' }}>
                <p>{props.answerText}</p>
            </div>
        </div>
    );

}