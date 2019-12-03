import React, {Component} from 'react';
import {
    Button,
    Pagination
} from 'antd'

export default class Antd extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize)
    }

    render() {
        return (
            <div>
                antd
                <Button type="primary">Button</Button>
                <Pagination
                    showSizeChanger
                    showQuickJumper
                    onShowSizeChange={this.onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                />
            </div>
        )
    }


}

