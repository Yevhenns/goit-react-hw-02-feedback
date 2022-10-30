import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>{options.map((option) => {
            return <button type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</button>})
        }
    </div>) 
}

export default FeedbackOptions
