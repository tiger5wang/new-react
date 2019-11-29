import React, {Component} from 'react';
import MyBtn from './MyBtn';
import MyCount from './MyCount';

// 这个相当于子组件
export default class App extends Component {
    render() {
        return (
            <div>
                <MyBtn type={0}/>
                <MyCount/>
                <MyBtn type={1}/>
            </div>
        )
    }
}

