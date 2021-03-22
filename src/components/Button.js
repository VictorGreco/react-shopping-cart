import React, { Component } from "react";

class Button extends Component {

    render() {
        const { onClick, type, text, className, product={} } = this.props;
        const { id, title, img, price } = product;

        return (
            <button
                className={className}
                type={type}
                onClick={onClick}
                data-id={id}
                data-title={title}
                data-img={img}
                data-price={price}
            >{text}</button>
        );
    }
}

export default Button;
