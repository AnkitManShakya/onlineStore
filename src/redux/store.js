import { combineReducers, createStore } from "redux";
import userReducer from "./ducks/user";
import cartReducer from "./ducks/cart";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
const store = createStore(reducer);

export default store;
