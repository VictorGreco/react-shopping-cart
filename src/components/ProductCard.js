import React, { Component } from "react";

import Button from './Button';
import PriceWrapper from './PriceWrapper';
import TitleWrapper from './TitleWrapper';
import Image from './Image';

class ProductCard extends Component {

  render() {
    const { img, title, price, handleAddToCart } = this.props;

    return (
      <div className="col mb-4 d-flex flex-column product__card">
        <Image src={img} alt="" className="product__img"/>
        <div className="d-block">
          <TitleWrapper text={title}/>
          <PriceWrapper text={price}/>
          <Button onClick={handleAddToCart} text="Add to cart" className="btn btn-dark" product={this.props}/>
        </div>
      </div>
    );
  }
}

export default ProductCard;
