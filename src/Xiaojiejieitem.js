import React, { Component } from 'react';
import PropTypes from 'prop-types'


class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    //组件第一次存在dom中，函数是不会执行的
    //如果已经存在于dom中，函数才会被执行的
    componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }

    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname + this.props.content}
            </li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

//类型校验
XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,//比传
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
//默认值
XiaojiejieItem.defaultProps={
    avname:'song'
}
 
export default XiaojiejieItem;