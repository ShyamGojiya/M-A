// src/selectors/cartSelectors.js
export const selectTotalItemsInCart = (state) =>
  state.cart.reduce((total, item) => total + (item.quantity || 0), 0);
