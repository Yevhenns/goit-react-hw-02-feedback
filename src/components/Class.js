import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export class Class extends React.Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }

    onIncrement = (e) => {
        this.setState(prevState => ({
            [e.target.name]: prevState[e.target.name] + 1,
            }));
    };
    
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage = () => {
        return Math.ceil(this.state.good * 100 / this.countTotalFeedback());
    }

    render() {
        return <><Section
            title={'Please leave feedback'}>
                <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onIncrement} />
            </Section>
            
            <Section
            title={'Statistics'}>
            {this.countTotalFeedback() === 0 ?
                <Notification
                    message={'There is no feedback'} /> :
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage() || 0} />}
            </Section> </>
    }
}
