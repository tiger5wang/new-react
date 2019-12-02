import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './pages/store'

ReactDOM.render(
    // 这里使用 Provider 组件将跟组件包装起来，并且必须要有store 属性，以给所有的组件提供 store 值，
    // 它的原理基本和 上下文 context 中的 Provider 基本是一样的，这个store 属性可以提供给所有的子组件
    // store 就是全局统一的 store
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
