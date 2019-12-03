import React, {Component} from 'react';
import {Link, Route, withRouter} from 'react-router-dom'
import ArticleDetail from "./ArticleDetail";

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'/article/1'}>文章一</Link></li>
                    <li><Link to={'/article/2'}>文章二</Link></li>
                    {/*Link to 的二种方式是传递一个对象，其中pathname是必传的，就是路径名，其他的内容可以自定义*/}
                    {/*但是需要注意的是 seact 字段的内容必须是字符串,其实就是正常url路径的search部分，？可以不写，浏览器会自动加上，最好加上 ？.
                    其他自定义的字段可以在 location 中取到
                    */}
                    <li><Link to={{
                        pathname: '/article/3',
                        search: '?from=baidu',
                        state: {title: 'title'},
                        my: '自己定义的 Link to 内容',
                        my2: {hello: 'hello'},
                    }}>文章三</Link></li>
                </ul>
                {/*Route 组件渲染组件时有两种方法： 一种是 用component 方式，如下：*/}
                {/*<Route path={'/article/:id'} component={ArticleDetail}/>*/}
                {/*另外一种就是使用 render方法，注意render 必须是一个函数，函数返回值是要渲染的组件,
                但是这种方法有个问题就是使用动态路由时，不能获取到 match.params 部分
                */}
                <Route path={'/article/:id'} render={() => <ArticleDetail renderProps={'这是用 render 的方法渲染的组件'} {...this.props}/>}/>

            </div>
        )
    }


}

export default withRouter(Article)

