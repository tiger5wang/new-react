import React, {Component, createContext} from 'react';
import App from './App';

// createContext执行后会的结果中有两个组件 Provider 和 Consumer ，注意需要结构出来
// 注意 Provider 和 Consumer  是两个组件，可以导出，然后其他组件导入使用
const {Provider, Consumer: MyConsumer} = createContext();


class ContextHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    minus = () => {
        this.setState((prevState) => ({
            count: prevState.count - 2
        }))
    };

    add = () => {
        this.setState((prevState) => ({
            count: prevState.count + 3
        }))
    };

    render() {
        return (
            // 根组件使用 Provider 组件提供 数据源，
            // 需要使用 value 字段提供数据，数据类型可以是任意类型，最好是对象类型
            <Provider value={{count: this.state.count, minus: this.minus, add: this.add}}>
                <App/>
            </Provider>
        )
    }

}


export {
    ContextHomePage,
    MyConsumer
}









