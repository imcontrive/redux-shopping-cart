import React, { Component } from 'react'
import {connect} from 'react-redux';
import { deleteCartItem } from '../actions';


class Cart extends Component {

  handleDelete = (id) => {
    console.log(id, 'checking id')
    this.props.dispatch(deleteCartItem(id));
  }
  handleCheckout = () => {
		alert("Checkout Price: " + this.props.cartItems.reduce(function (acc,obj) { return acc + obj.price;}, 0))
	}
  render() {
    const {cartItems} = this.props;
    // console.log(cartItems, 'checking cart items');
    function twoDigits(num){
      return num.toFixed(2);
    }
    return (
      <main>
        <div id="shoppingCart">
          
            {/* <h2>Items in your cart...<span className="circle-span circle-span-cart">{cartItems.length}</span></h2> */}
            {/* <hr/> */}
            <div id="cartItems">
            {
              cartItems && cartItems.map((data, i) => 
                <div className="items">
                  <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${data.pro.sku}_2.jpg`}  width="125px" alt=""/>
                  <div>
                    <h4  className="text-center title">{data.pro.title}</h4>
                    <p>Quantity: {data.quant}</p>
                    <h5  className="text-center">{data.pro.currencyFormat}
                    {data.pro.price}<span className="installments">or{data.pro.installments}X{twoDigits(data.pro.price/data.pro.installments)}</span></h5>
                    
                  </div>
                  <button className="delete" onClick={() => this.handleDelete(data.pro.id)}>X</button>
                </div>
              )
            }
            </div>
            <span id="cartTotal"></span>
            <button onClick={() => this.handleCheckout()} className="text-center addToCart cart-checkout">CHECKOUT<p className="cart-desc"><small>SUBTOTAL:</small>${this.props.cartItems.reduce(function (acc,obj) { return acc + obj.pro.price;}, 0)}</p></button>
        </div>
    </main>
    )
  }
}

function mapStateToProps(state){
  return {
    cartItems: state.cart
  }
}
export default connect(mapStateToProps)(Cart);

