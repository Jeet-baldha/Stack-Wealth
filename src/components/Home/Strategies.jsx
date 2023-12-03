import React from "react";
import StrategyCard from "./StrategyCard";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { makeStyles } from '@material-ui/core/styles';
import FlagIcon from '@mui/icons-material/Flag';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const useStyles = makeStyles((theme) => ({
    borderedFlagIcon: {
        border: '1px solid #f2f2f2',
        padding: theme.spacing(0.5),
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '30px',
        borderRadius: '50%',
    },
}));

export default function Strategies(){

    const iconStyle = useStyles();

 return(
    <>
    <h1 style={{padding:'0 100px'}}>Explore Strategies</h1>
    <div className="strategy">
        <StrategyCard icon={<FlagIcon className={iconStyle.borderedFlagIcon}/>} 
            heading = "for your core portfolio"
            iconText = "Flagship"
            butText = "get your portfolio"
            bgColor="rgb(94, 74, 207)"
            bottomTextLeft="wealth maximization"
            bottomTextRight="core portfolio"
        />
        <StrategyCard icon={<FlashOnIcon className={iconStyle.borderedFlagIcon}/>} heading = "for your short-term goals" iconText="Falsh" butText="expolre plans" bgColor="rgb(62, 56, 56)"
            bottomTextLeft="up to 11% returns"
            bottomTextRight="daily stable returns"
        />
        <StrategyCard icon={<SafetyCheckIcon className={iconStyle.borderedFlagIcon}/>} heading="for your wealth preservation " iconText= "Safe Haven" butText="expolre assets" bgColor="rgb(25, 88, 67)"
            bottomTextLeft="capital preservation"
            bottomTextRight="" 
        />
        <StrategyCard icon={<EmojiObjectsIcon className={iconStyle.borderedFlagIcon}/>} heading="to genrate additional alpha" iconText="Opportunities" butText="explore ideas" bgColor="rgb(21, 98, 193)"
            bottomTextLeft="growth"
            bottomTextRight="thematic"
        />
    </div>
    </>
 );

}