export default function cart(state = [],action){
  switch(action.type){
    case 'ADD_TO_CART': {
      return [...state, action.product]
    }
    case 'DELETE_CART_ITEM': {
      // const copyCartItems = [...state];
      // console.log(copyCartItems, 'copied cart items');
      // return [...copyCartItems.filter((v, i, a) => {
      //   console.log(v, 'checking products');
      //   a.includes(v.id !== action.id)
      // })]
      return [...state].filter(pro => action.id !== pro.id)
    }
    default:
      return state;
  }
}
