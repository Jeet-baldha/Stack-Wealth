/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RewardIcon from '@mui/icons-material/CardGiftcardSharp';
import Avatar from '@mui/material/Avatar';

export default function RightNav() {

    return (
        <div className="right-nav">
            <ul >
                <li  ><a href="#"style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}><RewardIcon sx={{ fontSize: 20 }} style={{marginRight:'4px',marginTop:'5px'}} />  refer & earn</a></li>
                <li><a href="#"><Avatar
        alt="Remy Sharp"
        src="../static/image/avatar.jpg"
        sx={{ width: 30, height: 30 }}
      /></a></li>
            </ul>
        </div>
    );

}