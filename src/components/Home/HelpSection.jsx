import React from "react";
import ExportCard from "./ExportCard";
import Question from "./Question";
import Divider from '@mui/material/Divider';
export default function HelpSection(){

    return (
        
        <div className="help-section">
        <div>
        <h1>need help?</h1>
            <div >
                <ExportCard />
                <ExportCard />
            </div>
        </div>
        <div>
        <Divider orientation="vertical" flexItem />
        <h1>frequently asked questions</h1>  
        <div className="question-box">
            <Question questionTxt ="What is the importance of credit scores in personal finance?" answerText="Credit scores matter for loans. A higher score means better loan terms, while a lower one may limit options and increase costs." />
            <Divider/>
            <Question  questionTxt="How can individuals effectively budget to achieve their financial goals?" answerText="Budget by tracking income, prioritizing spending, and allocating to savings for goals like a home or retirement." />
            <Divider />
            <Question  questionTxt="How can individuals effectively budget to achieve their financial goals?" answerText="Budget by tracking income, prioritizing spending, and allocating to savings for goals like a home or retirement." />
            <Divider />
            <Question questionTxt="What are the advantages of investing in tax-advantaged accounts?" answerText=" Tax-advantaged accounts offer benefits like deferred taxes on earnings and potential deductions, aiding long-term wealth accumulation." />
            <Divider />
            <Question questionTxt="How does inflation impact purchasing power and long-term financial planning?" answerText="Inflation erodes purchasing power. Long-term plans should consider investments like stocks to outpace inflation and regular adjustments." />
        </div>
        </div>
        </div>
        
    );

}