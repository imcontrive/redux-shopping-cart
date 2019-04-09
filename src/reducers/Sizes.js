export default function sizes(state=[],action){
  switch(action.type){
    case "ADD_SIZES":
     return action.sizes;
     case "TOGGLE":
      return state.map(d => {
        if(d.size === action.currentSize){
          return {
            ...d, isClicked: !d.isClicked
          }
        }
        return d;
      })
    default :
      return state;
  }
}