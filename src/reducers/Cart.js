export default function cart(state = [],action){
  switch(action.type){
    case 'ADD_TO_CART': {
      return addtocart(state,action.product)
    }
    case 'DELETE_CART_ITEM': {
      return [...state].filter(product => action.id !== product.pro.id)
    }
    default:
      return state;
  }
}

function addtocart(cart,elm){
  let flag = false;
  cart.forEach((v,i) => {
    if(v.pro.id === elm.id){
      flag = true;
      v.quant = v.quant + 1;
    }
  });
  if(!flag){
    let obj = {
      pro:{...elm},
      quant:1
    }
    cart.push(obj)
  }
  return [...cart];
}
