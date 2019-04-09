import {createStore,combineReducers} from 'redux';
import sizes from './Sizes';
import products from './Products';
import cart from './Cart';


const rootReducers = combineReducers({
  sizes,
  products,
  cart
})
const store = createStore(rootReducers);

export default store;
