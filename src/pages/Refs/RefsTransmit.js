import React, { Component, createRef } from 'react'

const FancyInput = React.forwardRef((props, ref) => {
  return (
    <div>
      可拉斯基的付款了
      <input type="text" ref={ref} placeholder={props.children}/>
    </div>
  )
});

const FancyInput2 = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
})

export default class RefsTransmit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef()
  }

  render() {
    return (
      <div>
        <FancyInput ref={this.myRef}>请输入信息</FancyInput>
        <FancyInput ref={this.myRef}></FancyInput>
      </div>
    )
  }

  componentDidMount() {
    this.myRef.current.focus()
  }
}


