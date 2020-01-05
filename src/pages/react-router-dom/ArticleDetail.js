import React, {Component} from 'react';


export default class ArticleDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {/*使用 match.params 获取动态路由部分*/}
                <div>这里是文章详情页：{this.props.match.params.id}</div>
                {/*<span>{this.props.location.my}</span>*/}
            </div>
        )
    }


}

