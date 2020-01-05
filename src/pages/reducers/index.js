// 从 redux 中导入 combineReducers
import { combineReducers } from 'redux';

import cartList from './cartList';

// 因为 redux 只允许有一个 store, createStore的时候需要传递一个 reducer传入，
// 实际项目中可能需要根据不同的功能创建多个 reducer，所以需要一个 方法将所有的reducer 融合成一个 reducer
// 将所有的 reducer 融合成一个reducer， 使用用combineReducers融合成一个reducer
// combineReducers 接收拆分后的 reducer 函数组成的对象，并且创建出具有相同键对应状态对象的函数
// 注意 combineReducers 接收的参数是一个对象，那么如果写成对象字面量的形式的时候， key ,value 就是相同的了，
// 在相应的组件使用相关的 state 值的时候，this.props.[key] 这个key 就是此处的 key
const rootReducer = combineReducers({
        cartList
})

export default rootReducer

/*
// 将 default import 进来的名称重命名为任何我们想要的名称。我们也可以重命名 import 进来的名称。
import defaultState, {firstNamedReducer, secondNamedReducer as secondState} from "./reducers";

const rootReducer = combineReducers({
    defaultState,                   // key 的名称和 default export 的名称一样
    firstState : firstNamedReducer, // key 的名字是单独取的，而不是变量的名字
    secondState,                    // key 的名称和已经被重命名过的 export 的名称一样
});
使用的时候要这样使用：
this.props.defaultState / this.props.firstState / this.props.secondState
*/
