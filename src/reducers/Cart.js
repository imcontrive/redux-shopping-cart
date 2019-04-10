export default function cart(state = [],action){
  switch(action.type){
    case 'ADD_TO_CART': {
      // console.log(action.product.id,"cart_Count");
      // console.log(state.product.id,"cart_Cstateount");
      // console.log([...state].filter(pro=> {
      //   if(action.id ===pro.id){
      //     let count = 0;
      //     return count++;
      //   }
      // } ))
      // console.log([...state, action.product,{...action.id}]);
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
    if(v.pro.id == elm.id){
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
