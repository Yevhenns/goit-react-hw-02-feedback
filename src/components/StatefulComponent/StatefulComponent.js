import React from "react";
import ButtonSet from "./ButtonSet";
import Statistics from "./Statistics";

export class StatefulComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            total: 0,
        }
    }

    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
            }));
    };
    
    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
            }));
    };
    
    handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
            }));
    };
    
    countTotalFeedback = () => {
        return this.state.good.value + this.state.neutral.value;
    }

    render() {
        return <div>
            <ButtonSet
                onIncrementGood={this.handleIncrementGood}
                onIncrementNeutral={this.handleIncrementNeutral}
                onIncrementBad={this.handleIncrementBad} />
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback.value} />            
        </div>
    }
}
