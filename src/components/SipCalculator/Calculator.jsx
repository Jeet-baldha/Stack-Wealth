import React, { useState } from "react";
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
export default function Calculator(){

    const [investmentValue,setInvestmentValue] = useState(500);
    function investmentValueChange(event,value){
        setInvestmentValue(value);

    }

    const [interstRate,setInterstrate] = useState(5);
    function interstRateChange(event,value){
        setInterstrate(value);

    }
    const [timePerod,settimePerod] = useState(1);
    function timePerodChange(event,value){
        settimePerod(value);

    }

    function handleInputInvestValue(event) {
        setInvestmentValue(event.target.value === '' ? 500 : Number(event.target.value));
    };
    function handleInputInterstRate(event) {
        setInterstrate(event.target.value === '' ? 0 : Number(event.target.value));
    };
    function handleInputTimePerod(event) {
        settimePerod(event.target.value === '' ? 0: Number(event.target.value));
    };





    return (
        <div className="sip-calculator">
            <div className="investment">
                <span>monthly investment (₹)</span>
                <MuiInput  
                    style={{color: '#f2f2f2'}} 
                    className="calcInput"
                    value={investmentValue}
                    size="small"
                    onChange={handleInputInvestValue}
                 />
                <Slider
                    
                    aria-label="custom thumb label"
                    valueLabelDisplay="auto"
                    onChange={investmentValueChange}
                    value={typeof investmentValue === 'number' ? investmentValue : 500}
                    min={500}
                    step={500}
                    max={500000} />
            </div>

            <div className="interstRate">
                <span>expected return rate (% p.a)</span>
                <MuiInput  
                    style={{color: '#f2f2f2'}} 
                    className="calcInput"
                    value={interstRate}
                    size="small"
                    
                    onChange={handleInputInterstRate}
                 />
                <Slider
                    aria-labelledby="input-slider"
                    valueLabelDisplay="auto"
                    onChange={interstRateChange}
                    min={5}
                    value={typeof interstRate === 'number' ? interstRate : 0}
                    step={0.5}
                    max={30} />
            </div>

            <div className="timePerod">
            <span>time period (yrs)</span>
            <MuiInput  
                    style={{color: '#f2f2f2'}} 
                    className="calcInput"
                    value={timePerod}
                    size="small"
                    onChange={handleInputTimePerod}
                 />
                <Slider
                    aria-labelledby="input-slider"
                    valueLabelDisplay="auto"
                    value={typeof timePerod === 'number' ? timePerod : 0}
                    onChange={timePerodChange}
                    min={1}
                    max={30} />
            </div>

        </div>
    );
}