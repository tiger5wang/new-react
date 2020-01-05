import React, {Component} from 'react';


export default class Redux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
    this.dispatch = this.props.store.dispatch;
    console.log(this.props.store.getState())
  }

  getState = () => {
    this.setState(() => ({
      cartList: this.props.store.getState().cartList
    }))
  };

  componentDidMount() {
    this.getState();
    this.props.store.subscribe(this.getState)
  }

  changeState = (id, type) => {
    this.dispatch({
      type: type,
      payload: id
    })
  };

  render() {
    const {cartList} = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>商品名称</th>
              <th>价格</th>
              <th>数量</th>
              <th>总价</th>
            </tr>
          </thead>
          <tbody>
          {cartList.map(cart => {
            return (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.price}元/斤</td>
                <td>
                  <button onClick={() => this.changeState(cart.id, 'decrease')}> - </button>
                  <span> {cart.amount}斤 </span>
                  <button onClick={() => this.changeState(cart.id, 'increase')}> + </button>
                </td>
                <td>{(cart.price * cart.amount).toFixed(2)}元</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}