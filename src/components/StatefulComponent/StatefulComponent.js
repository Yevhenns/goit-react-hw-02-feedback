import React from "react";

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }
}