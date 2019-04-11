import React, { Component } from 'react'
import {connect} from 'react-redux';
import { descending, ascending, select } from '../actions';


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
      <React.Fragment>
        {/* Header-Wrapper Sort-menu-option */}
        {/*html of all the Products  */}
        <div  className="Products-wrapper">
          <div className="headerWrapper">
            <p className="total-items">{products.length} Product(s) found.</p>
            <div className="dropdown">
              <h4>Order by:</h4>
              <div className="select">
                <select name="slct" id="slct" onChange={
                  (e) => {
                    e.target.value === 'Highest_to_lowest' ? this.props.dispatch(descending()) : e.target.value === 'Lowest_to_highest' ? this.props.dispatch(ascending()) : this.props.dispatch(select());
                  }
                }>
                  <option value="select">Select</option>
                  <option value="Highest_to_lowest">Highest to lowest</option>
                  <option value="Lowest_to_highest">Lowest to highest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product-container">
        {
          products.filter(val => val.availableSizes.some(size => filterSize.length ? (filterSize.includes(size)): size)).map((data,i) =>
            <div className="products" key={i}>
              <div className="isFreeShipping">
                <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${data.sku}_1.jpg`}  width="100%" height="100%" alt=""/>
                {
                  data.isFreeShipping ? <p className="free-shipping">Free shipping</p>: ""
                }
              </div>
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
      </div>
      </React.Fragment>
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

