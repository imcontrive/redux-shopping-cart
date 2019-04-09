import React, { Component } from 'react'
import {connect} from 'react-redux';
import { deleteCartItem } from '../actions';


class Cart extends Component {

  handleDelete = (id) => {
    console.log(id, 'checking id')
    this.props.dispatch(deleteCartItem(id));
  }
  render() {
    const {cartItems} = this.props;
    console.log(cartItems, 'checking cart items');
    function twoDigits(num){
      return num.toFixed(2);
    }
    return (
      <main>
        <div id="shoppingCart">
          <div id="cartItemsContainer">
            <h2>Items in your cart...</h2>
            <hr/>
            <div id="cartItems">
              
            {
              cartItems && cartItems.map((data, i) => 
                <div className="items">
                <button className="delete" onClick={() => this.handleDelete(data.id)}><i className="fas fa-trash-alt"></i></button>
                  <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${data.sku}_2.jpg`}  width="125px" alt=""/>
                  <h4  className="text-center title">{data.title}</h4>
                  <h5  className="text-center">{data.currencyFormat}{data.price}<span className="installments">or{data.installments}X{twoDigits(data.price/data.installments)}</span></h5>
                </div>
              )
            }
            </div>
            <span id="cartTotal"></span>
            <button className="text-center addToCart ">CHECKOUT</button>
          </div>
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

