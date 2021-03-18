import { combineReducers, createStore } from "redux";
import userReducer from "./ducks/user";
import cartReducer from "./ducks/cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./ducks/directory";
import shopReducer from "./ducks/shop";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const store = createStore(persistReducer(persistConfig, reducer));

const persistor = persistStore(store);

export { store, persistor };
