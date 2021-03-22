import React, { Component } from "react";

import Button from './Button';

class ShoppingCardFooter extends Component {

    render() {
        const { title, cart } = this.props;
        let total = 0;

        cart.forEach(({ price, number }) => {
            total += price * number;
        });

        return (
            <div className="col shopping__cart__footer">
                <div className="row row-cols-1 flex-column">
                    <div className="col">
                        <div className="d-flex justify-content-between">
                            <h4 className="h5">{title}</h4>
                            <h4>
                                <strong>{total}€</strong>
                            </h4>
                        </div>
                        <hr />
                    </div>
                    <div className="col">
                        <Button
                            type="btn"
                            className="btn btn-primary btn-block btn-lg"
                            text="Checkout"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCardFooter;
