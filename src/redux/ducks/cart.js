const TOGGLE_CART_HIDDEN = "toggleCartHidden";
const ADD_ITEMS = "addItems";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const selectCartTotal = (cartItems) => {
  return cartItems.length
    ? cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
    : 0;
};

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addCartItem = (item) => ({
  type: ADD_ITEMS,
  payload: item,
});

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
