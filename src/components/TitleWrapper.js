import React, { Component } from "react";

class TitleWrapper extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }

    render() {
        return (
            <h3 className="h5">{this.text}</h3>
        );
    }
}

export default TitleWrapper;
