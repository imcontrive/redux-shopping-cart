

export default function products(state = [], action){
  switch(action.type) {
    case "ADD_PRODUCTS": {
      return action.payload;
    }
    case "SELECT": {
      return state;
    }
    case 'HIGH_TO_LOW': {
      return [...state.sort((a,b) => {
        return  b.price - a.price ;
      })]
    }
    case 'LOW_TO_HIGH': {
      return [...state.sort((a,b) => {
        return  a.price - b.price ;
      })]
    }
    default :
      return state;
  }
}
