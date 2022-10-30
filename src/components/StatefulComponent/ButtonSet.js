import React from "react";

const ButtonSet = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
    return (
        <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={onIncrementGood}>good</button>
        <button type="button" onClick={onIncrementNeutral}>neutral</button>
        <button type="button" onClick={onIncrementBad}>bad</button>
    </div>) 
}

export default ButtonSet;