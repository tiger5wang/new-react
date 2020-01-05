import React, {Component} from 'react'


export default class MyComponent extends Component {

  constructor(props) {
    super(props);
    this.inputClassRef = React.createRef()
  }
  handleClick = () => {
    // this.inputClassRef.current.handleClick()
    // this.inputCallbackRef.current.handleClick()
    this.inputElement.focus()
  };
  render() {
    return (
      <div>
        kjsafdklsdjklsadfkl
        {/*元素添加 refs 属性*/}
        {/*<input type="text" ref={this.inputRef}/>*/}
        {/*组件添加refs  属性*/}
        {/*<MyInput ref={this.inputClassRef}/>*/}
        {/*<MyInput ref={el => this.inputCallbackRef = el}/>*/}
        {/*组件间传递 refs */}
        <CustomTextInput inputRef={el => this.inputElement = el}/>
        <button onClick={this.handleClick}>获取焦点</button>
      </div>
    )
  }
  componentDidMount() {
    // console.log(this.inputRef.current.focus() )
  }
}




class MyInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }
  handleClick = () => {
    this.inputRef.current.focus()
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

function CustomTextInput(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef}/>
    </div>
  )
}