import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from './Cart';


class Header extends Component {
  state =  {
    isOpen: false
  }
  handleCartOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { products,cart } = this.props;
    return (
      <div>
        <div className="header-icons">
          <i className="fab fa-github"></i>
          <div id="cart" onClick={this.handleCartOpen}>
            <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png" alt="ss"/>
            <p className="cart-count circle-span">{cart.length}</p>
          </div>
          {
            this.state.isOpen ? <Cart /> : ''
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);
