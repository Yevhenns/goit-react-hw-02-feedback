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

    render() {
        return <div>
            <ButtonSet
                onIncrement={this.onIncrement} />
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()} />            
        </div>
    }
}
