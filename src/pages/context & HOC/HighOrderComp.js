/**
 * 高阶组件
 * */
import React, {Component} from 'react';

// 高级组件的形式一：返回函数形式组件
const WithFunc = (Comp) => {
    return (props) => {
        console.log('props',props)  // 注意下面的 {...props} 是不能丢的，应为如果 Comp 组件是其他组件的一个子组件，而且父组件给它传递了props，如果此处 没有加 {...props}， 则会导致返回的组件缺少 props
        return <Comp intro={'默认简介'} />
    }
};

// 高阶组件的形式二： 返回组件形式
const WithComp = (Comp) => {
    class HocComp extends Component {
        componentDidMount() {
            console.log('高阶组件的形式二')
            console.log('this.props',this.props)
        }
        render() {
            return (
                // 同理，下面的{...this.props} 也不能够丢
                <Comp {...this.props} auth={'Facebook 创作'}/>
            )
        }
    }
    return HocComp
}


class HighOrderComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {name: 'React'}
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.project.name}</h2>
                <ul>
                    <li>{this.props.intro}</li>
                    <li>{this.props.auth}</li>
                </ul>
                <HocChild name={'JavaScript'}/>
            </div>
        )
    }


}

function Child(props) {
    return(
        <div>
            {props.name}
            <ul>
                <li>{props.intro}</li>
                <li>{props.auth}</li>
            </ul>
        </div>
    )
}
const HocChild = WithComp(WithFunc(Child))

export default WithComp(WithFunc(HighOrderComp))
