import React from "react";

const Statistics = ({ good, neutral, bad, total, positive = "0" }) => {
    return (
        <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positive} %</p>
    </div>
    )    
}

export default Statistics