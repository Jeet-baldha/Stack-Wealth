import React, { useState, useEffect } from "react";
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

export default function Calculator(props) {

    const [totalValue, setTotalValue] = useState(0);
    const [interstRate, setInterstrate] = useState(5);
    const [timePerod, settimePerod] = useState(1);
    const [totalInvestment, setTotalInvestment] = useState(0)
    const [investmentValue, setInvestmentValue] = useState(500);
    const [estimatedReturn, setEstimatedReturn] = useState(0);

    useEffect(() => {
        calculateInvestment();
    }, [investmentValue, interstRate, timePerod]);

    function calculateInvestment() {
        const monthlyInterestRate = (interstRate / 100) / 12; // Convert annual rate to monthly
        const totalCompoundingPeriods = timePerod * 12;
        const futureValue = investmentValue * ((Math.pow(1 + monthlyInterestRate, totalCompoundingPeriods) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate);
        setTotalValue(Math.floor(futureValue));
        setTotalInvestment(investmentValue * timePerod * 12);
        setEstimatedReturn(Math.floor(futureValue - (investmentValue * timePerod * 12)));
    }
    function investmentValueChange(event, value) {
        const updatedInvestmentValue = Number(value);
        setInvestmentValue(updatedInvestmentValue);
        calculateInvestment();
    }

    function interstRateChange(event, value) {
        setInterstrate(Number(value));
        calculateInvestment();
    }
    function timePerodChange(event, value) {
        settimePerod(Number(value));
        calculateInvestment();
    }


    function handleInputInvestValue(event) {
        setInvestmentValue(event.target.value === '' ? 0 : Number(event.target.value));
        calculateInvestment();
    };

    function handleInputInterstRate(event) {
        setInterstrate(event.target.value === '' ? 0 : Number(event.target.value));
        calculateInvestment();
    };
    function handleInputTimePerod(event) {
        settimePerod(event.target.value === '' ? 0 : Number(event.target.value));
        calculateInvestment();
    };

    function closeDisplay(){
        props.setCalcDisplay(false);
    }

    
    return (
        <div className="sip-calculator" style={props.stl}>
        <div className="closeBtn"> 
        <IconButton onClick={closeDisplay} ><CloseIcon style={{color:'white'}}></CloseIcon></IconButton>
        </div>
            <div className="investment">
                <span>monthly investment (₹)</span>
                <MuiInput
                    style={{ color: '#f2f2f2' }}
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
                    style={{ color: '#f2f2f2',display:'inline-block' }}
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
                    style={{ color: '#f2f2f2' }}
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


            <div>
                <div>
                    <h3 style={{display:"inline-block"}}>Total Value:</h3>
                    <h3 style={{float:"right",display:"inline-block"}}>{totalValue}</h3>
                </div>
                <div>
                    <span>investment amount</span>
                    <span style={{float:"right"}}>{totalInvestment}</span>
                </div>
                <div>
                    <span>estimated return</span>
                    <span style={{float:"right"}}>{estimatedReturn}</span>
                </div>
            </div>

        </div>
    );
}