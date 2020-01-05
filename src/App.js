import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {ContextHomePage} from './pages/context & HOC/ContextHomePage'
import HighOrderComp from "./pages/context & HOC/HighOrderComp";
import {
    Redux,
    ReactRedux,
    ReactRouter,
    Antd
} from './pages'
import {withRouter} from 'react-router-dom'

function App(props) {
    return (
        <div className="App">
            {/*上线文 context*/}
            {/*<ContextHomePage/>*/}

            {/*高阶组件*/}
            {/*<HighOrderComp/>*/}

            {/*redux*/}
            {/*<Redux {...props}/>*/}

            {/*react-redux*/}
            {/*<ReactRedux />*/}

            {/*react-router*/}
            {/*<ReactRouter {...props}/>*/}

            {/*antd*/}
            <Antd/>
        </div>
    );
}
// history,location,match等路由相关的信息只在使用 Route 渲染的组件中props 取到，其他的组件组要使用 withRouter 方法执行一下才可以使用
export default withRouter(App);
