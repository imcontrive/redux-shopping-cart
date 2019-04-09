import React, { Component } from 'react'
import { connect } from 'react-redux';
import { descending, ascending, select } from '../actions';


class Header extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="header-icons">
          <i className="fab fa-github"></i>
          <div id="cart">
            <i className="fa fa-shopping-cart fa-2x openCloseCart" aria-hidden="true"></i>
          </div>
        </div>
        <div className="headerWrapper">
          <p className="total-items">{products.length} Product(s) found.</p>
          
          <div className="dropdown">
            <h4>Order by:</h4>
            <div>
              <select onChange={
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Header);