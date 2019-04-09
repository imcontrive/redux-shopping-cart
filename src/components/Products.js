import React, { Component } from 'react'
import {connect} from 'react-redux';

 class Products extends Component {
    //  handlecart
  handleCart = (product) => {
    this.props.dispatch({type:"ADD_TO_CART",  product})
    // console.log(id,"firstcart")
   }
  render() {
    // convert prices into currencyFormat
    function twoDigits(num){
      return num.toFixed(2);
    }
    const {products, sizes} = this.props;

    const filterSize = sizes.filter( s=> s.isClicked === true).map(val => val.size);
    
    return (
      <>
        {/* <p>{filterSize.length} Product(s) found.</p> */}
        <div  className="Products-wrapper">
        {
          products.filter(val => val.availableSizes.some(size => filterSize.length ? (filterSize.includes(size)): size)).map((data,i) =>
            <div className="products" key={i}>
              <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${data.sku}_1.jpg`}  width="100%" alt=""/>
              <h4  className="text-center title">{data.title}</h4>
              <hr></hr>
              <h5  className="text-center">{data.currencyFormat}{data.price}
                <span className="installments">or{data.installments}X{twoDigits(data.price/data.installments)}</span>
              </h5>
              <button className="text-center addToCart"  onClick={() =>this.handleCart(data)}>Add To Cart</button>
              
            </div>
          )
        }
      </div>
    </>
    )
  }
}

function mapStateToProps(state){
  return {
    products: state.products,
    sizes: state.sizes
  }
}
export default connect(mapStateToProps)(Products);

