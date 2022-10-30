import React from "react";
import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>{options.map((option) => {
            return <button className={css.btn} type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</button>})
        }
    </div>) 
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}