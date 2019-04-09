import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Cart from './components/Cart';


class App extends Component {
  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
    .then(res => res.json())
    .then(({products} )=> 
       this.props.dispatch({type:'ADD_PRODUCTS',payload: products})
    )}
  render() {
    return (
   
    <>
      <Header/>
      <Cart />
      <div className="main-wrapper">
        <Sidebar />
        <Products/>
      </div>
    </>
    )
  }
}

export default connect()(App);
