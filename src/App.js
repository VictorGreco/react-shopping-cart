import React, { Component } from "react";
import Swal from 'sweetalert2'

import "./App.scss";

import ProductCard from "./components/ProductCard";
import ShoppingCartItem from "./components/ShoppingCartItem";
import ShoppingCardFooter from './components/ShoppingCardFooter';
import ShoppingCartHeader from './components/ShoppingCartHeader';

import products from "./products";

class App extends Component {
  constructor(props) {
    super(props);

    const localCart = localStorage.getItem('cart');

    this.state = {
      cart: JSON.parse(localCart) || []
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  handleRemove(event) {
    const { id } = event.target.dataset;
    const itemInCart = this.state.cart.find((item) => item.id === id);
    const cart = this.state.cart.filter(item => item != itemInCart);

    this.setState({
      ...this.state,
      cart
    });
  }

  handleChange(event) {
    const { id } = event.target.dataset;
    const itemInCart = this.state.cart.find((item) => item.id === id);
    const index = this.state.cart.indexOf(itemInCart);

    this.state.cart[index].number = parseInt(event.target.value);
    this.setState(this.state);
  }

  handleAddToCart(event) {
    const { id } = event.target.dataset;
    const itemInCart = this.state.cart.find((item) => item.id === id);

    if (itemInCart) {
      if (itemInCart.number <= 10) {
        const index = this.state.cart.indexOf(itemInCart);

        this.state.cart[index].number += 1;
        this.setState(this.state);
      } else {
        Swal.fire({
          title: 'Can\'t buy more than 10 items',
          icon: 'warning',
          confirmButtonText: 'Understood !'
        })
      }
    } else {
      this.setState({
        cart: this.state.cart.concat({
          ...event.target.dataset,
          number: 1
        })
      })
    }
  }

  render() {
    const { cart } = this.state;

    return (
      <main className="container-fluid">
        <div className="row">
          <div className="col col-6 col-lg-8 p-4">
            <section className="row row-cols-1">
              <div className="col">
                <h1 className="mb-4">Shop</h1>
              </div>
              <div className="col">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                  {products.map(({ id, title, price, img }) => (
                    <ProductCard
                      key={Math.random() * id}
                      id={id}
                      img={img}
                      title={title}
                      price={price}
                      handleAddToCart={this.handleAddToCart}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <aside className="col col-6 col-lg-4 p-4">
            <div className="row flex-column">
              <ShoppingCartHeader />

              {cart.length == 0 ?
                <h3 className="col shopping__cart__item">Your cart is empty</h3> :
                cart.map(({ id, title, price, img, number }) => (
                  <ShoppingCartItem
                    key={Math.random() * id}
                    id={id}
                    img={img}
                    title={title}
                    price={price}
                    number={number}
                    handleRemove={this.handleRemove}
                    handleChange={this.handleChange}
                  />
                ))}

              <ShoppingCardFooter
                title="Total"
                cart={this.state.cart}
              />
            </div>
          </aside>
        </div>
      </main>
    );
  }
}

export default App;
