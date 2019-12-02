import React, {Component} from 'react';
import { connect } from 'react-redux'
import {changeCount} from '../actions/cartList'


class ReactRedux extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    // changeState = (type, id) => {
    //     // this.props.dispatch({
    //     //     type: type,
    //     //     payload: id
    //     // })
    //     this.props.dispatch(changeCount(type, id))
    //
    // };

    render() {
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
                    {this.props.cartList.map(cart => {
                        return (
                            <tr key={cart.id}>
                                <td>{cart.id}</td>
                                <td>{cart.name}</td>
                                <td>{cart.price}元/斤</td>
                                <td>
                                    <button onClick={this.props.changeCount.bind(this, 'decrease', cart.id)}> - </button>
                                    <span> {cart.amount}斤 </span>
                                    <button onClick={this.props.changeCount.bind(this, 'increase', cart.id)}> + </button>
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

// mapStateToProps 用于监听redux sotre 的变化 , 只要 redux store有变化，就会执行此函数，将 store 的 state 值注入到当前组件的 props 上
// 此处的state 就是 store.getState()
// return 的内容必须是一个纯对象，这个对象会与组件的 props 合并，然后就可以使用 this.props. 的形式来得到想要的值
const mapStateToProps = (state) => {
    return {
        cartList: state.cartList
    }
}

// mapDispatchToProps 将 dispatch 函数和 action creator 绑定到一起， 将action 生成的方法注入到当前组件的 props 上
// 如果没有这个方法，默认情况下，dispatch 会注入到组件的props 中，组件可以直接使用this.props.dispatch()的方法去派发action
// 这个方法
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeState: (type, id) => dispatch(changeCount(type, id))
//     }
// }


// connect 方法一般有四个参数，常用的就上面的两个，第一个参数为 mapStateToProps, 这个参数是必须传的，如果不传递就不能获取到 state 值，
// 第二个参数  可以传递也可以不传递，如果不传此参数，默认情况下， dispatch 会注入到当前组将的 props 中，让后可以通过 this.props.dispatch() 使用dispatch 派发 action；
// 如果要传递此参数， 它有两种写法，第一种就是 mapDispatchToProps 的方式，使用这个方式主要是防止 项目中的 action 是纯对象的格式，而不是 action creator 的形式，实际项目中一般不这么写，都是用 action creator 的形式。
// export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux)

// 这个使用 action creator 的形式的，要是用 对象的格式 ，action creator 要用 {} 包起来
export default connect(mapStateToProps, { changeCount })(ReactRedux)