const initalState = {
  cartList: [
    {
      id: 1,
      name: 'Apple',
      price: 8.88,
      amount: 1
    },
    {
      id: 2,
      name: 'banana',
      price: 6.6,
      amount: 3
    }
  ]
};

export default (state = initalState, action) => {
  switch(action.type) {
    case 'increase':
      const list = state.cartList.map(cart => {
        if(cart.id === action.payload) {
          cart.amount += 1
        }
        return cart
      });
      return {
        ...state,
        cartList: list
      };
    case 'decrease':
      const list2 = state.cartList.map(cart => {
        if(cart.id === action.payload) {
          cart.amount -= 1
        }
        return cart
      });
      return {
        ...state,
        cartList: list2
      };
    default:
      return state;
  }
}