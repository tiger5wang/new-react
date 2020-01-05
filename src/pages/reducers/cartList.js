const initalState =  [
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
    }]


// reducer是一个纯函数， 它接收两个参数，state， action；state赋值一个初始值，
//
export default (state = initalState, action) => {
  // 根据 action 的type 来判断要做什么操作，将结果state返回
  switch(action.type) {
    case 'increase':
      return state.map(cart => {
        if(cart.id === action.payload) {
          cart.amount += 1
        }
        return cart
      });
    case 'decrease':
      return state.map(cart => {
        if(cart.id === action.payload) {
          cart.amount -= 1
        }
          return cart
      });
      // 注意不能丢了 default， 默认将 原state 返回
    default:
      return state;
  }
}