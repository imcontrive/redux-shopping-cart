import React, { Component } from 'react'
import {connect} from 'react-redux';

class Sidebar extends Component {
  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
    .then(res => res.json())
    .then(({products}) => {
      let sizes = products.reduce((acc, val) => {
        return [...acc, ...val.availableSizes]
      }, [])
      this.props.dispatch({type: 'ADD_SIZES', sizes: [...new Set(sizes)].map(s => ({size:s, isClicked: false}))})
    }
    )
  }

  handleClick = (size) => {
   this.props.dispatch({type:"TOGGLE", currentSize: size})
  }
  render() {
    return (
      <div>
        <div className="isFilter">
        <h2>Sizes:</h2>
        <div className="size-items">
          {
            this.props.sizes.map((s,i) => 
            <button key={i} className={s.isClicked ? 'circle-span active':'circle-span'}
             onClick={() => this.handleClick(s.size)}>{s.size}</button>)
          }
        </div>
        <p>Leave a star on Github if this repository was useful :)</p>
      </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    sizes: state.sizes
  }
}
export default  connect(mapStateToProps)(Sidebar);