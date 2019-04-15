import React, { Component } from 'react';
import Ceshi from './ceshi';

import './index.less';

// @connect(
//     state=>state,
//     gunAdd
// )
class App extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className={'red'}>
                <Ceshi/>
                <p>Hello React!</p>
                <p>Hello React!</p>
                <p>Hello React!</p>
                <p>Hello React!</p>
                <p>默认导出文件更改</p>
                <p>默认导出文件更改</p>
                <p>可以了，webpack搭建react项目成功</p>
            </div>
    );
    }
}
export default App;
