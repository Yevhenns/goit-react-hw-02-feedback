import React from "react";

const Statistics = ({ good, neutral, bad, total }) => {
    return (
        <div>
        <h2>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total: {total}</p>
    </div>
    )    
}

export default Statistics