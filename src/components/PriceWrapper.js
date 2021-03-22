import React, { Component } from "react";

class PriceWrapper extends Component {

    render() {
        const { text } = this.props;

        return (
            <p>{text} €</p>
        );
    }
}

export default PriceWrapper;
