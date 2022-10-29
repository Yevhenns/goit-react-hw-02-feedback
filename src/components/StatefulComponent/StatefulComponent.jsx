import React from "react";

export class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    render() {
        return <div>
            <button type="button" onClick={this.handleIncrement}>good: {this.state.good}</button>
            <button type="button">neutral: </button>
            <button type="button">bad: </button>
        </div>
    }
}
