import React from "react";

const ButtonSet = ({ onIncrement }) => {
    return (
        <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={onIncrement}>good</button>
        <button type="button" name="neutral" onClick={onIncrement}>neutral</button>
        <button type="button" name="bad" onClick={onIncrement}>bad</button>
    </div>) 
}

export default ButtonSet;