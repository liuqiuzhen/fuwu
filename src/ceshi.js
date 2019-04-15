import React, { Component } from 'react';
import {connect} from 'react-redux';
import {gunAdd} from './reducer/nav.redux';
import {bindActionCreators} from 'redux';
import './index.less';

@connect(
    state=>state.nav,
    gunAdd
)
class Ceshi extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        let aa = {age:'18'};
        console.log({aa,age:90});
    }
    render() {
        console.log(this.props,'-----配置成功了----')
        return (
            <div className={'red'}>
                <p>测试</p>
            </div>
        );
    }
}

function mapStateToProps(state){

    return state.nav

}

function mapDispatchToProps(dispatch){

    return bindActionCreators(gunAdd,dispatch)

}
// export default connect(mapStateToProps,mapDispatchToProps)(Ceshi);
export default Ceshi;
