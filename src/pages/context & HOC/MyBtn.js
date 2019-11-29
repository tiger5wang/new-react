import React, {Component} from 'react';
import {MyConsumer} from './ContextHomePage';


// 这个相当于孙组件，可以直接使用根组件提供的数据，所以实现了跨层级通信
export default class MyBtn extends Component {
    render() {
        return (
            // 要接收数据的组件需要使用 Consumer 组件包装，注意 它的child 要用函数来表达
            // 函数接收的参数就是 Provider 组件提供的数据，对象类型数据可以直接将要使用的数据解构出来
            <MyConsumer>
                {
                    ({minus, add}) => {
                        return <button onClick={this.props.type === 0 ? minus : add}> {this.props.type === 0 ? '-' : '+'} </button>
                    }
                }
            </MyConsumer>
        )
    }
}

