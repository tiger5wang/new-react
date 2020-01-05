import React, {Component} from 'react';
import Home from './Home';
import Article from './Article';
import Users from './Users';
import NotFount from './NotFount';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'


export default class ReactRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props)
    }

    render() {
        return (
            <div>
                这是导航部分
                <ul>
                    <li><Link to={'/home'}>主页</Link></li>
                    <li><Link to={'/article'}>文章</Link></li>
                    <li><Link to={'/users'}>用户用户</Link></li>
                </ul>
                下面是内容部分：
                <div style={{height: 50}}></div>
                {/*注意在 5 以前要用 Switch 组件将所有的 Route 组件包起来，以选择匹配到的组件进行渲染，*/}
                {/*但是在 5 及以后不用 Switch 组件包起来也可以*/}
                <Switch>
                    {/*<Route exact path={'/'} component={Users}/>*/}
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/article'} component={Article}/>
                    <Route path={'/users'} component={Users}/>
                    {/*下面的 exact 在 5 以前也是要必须 加上的，表示完全匹配，5 不加也可以,
                    上面第一个注释的 Route 中的 exact 同理
                    */}
                    <Redirect to={'/home'} from={'/'} exact/>
                    <Route component={NotFount}/>
                </Switch>
            </div>
        )
    }


}

