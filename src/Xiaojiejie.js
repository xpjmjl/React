import React,{Component,Fragment} from 'react'
import './style.css'
import Xioajiejieitem from './Xiaojiejieitem'
import axios from 'axios'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class Xiaojiejie extends Component{
    //数据初始化
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
    }

    //最先执行
    componentWillMount(){
        console.log("componentWillMount")
    }

    //在render之后执行
    componentDidMount() {
        console.log("componentDidMount")
        axios.get("https://www.easy-mock.com/mock/5e01d6b466608b5c149253c1/type/xiaojiejief")
            .then((res)=>{
                console.log('axios 获取数据成功:'+JSON.stringify(res))
                this.setState({
                    list:res.data.data
                })
            })
            .catch((error)=>{
                console.log('axios 获取数据失败'+error)
            })
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    //更新第一个执行
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    //更新第二个执行
    componentWillUpdate(){
        console.log('componentWillUpdate')
        return true
    }

    //在render之后执行
    componentDidUpdate(){
        console.log('componentDidUpdate')
        return true
    }


    //在componentWillMount之后执行，或者刷新prop和state时执行
    render(){
        console.log("render")
        return  (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input 
                        id="jspang" 
                        className='input' 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)} 
                        ref={(input)=>{this.input=input}} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition 
                                        timeout={1000} 
                                        classNames='boss-text' 
                                        unmountOnExit 
                                        key={index+item} 
                                        appear = {true}
                                    >
                                        <Xioajiejieitem
                                            key={index+item} 
                                            index={index} 
                                            content={item} 
                                            deleteItem={this.deleteItem.bind(this)} 
                                            list={this.state.list} 
                                        />
                                    </CSSTransition>  
                                )
                            })
                        }
                    </TransitionGroup>
                    
                </ul>
                <Boss />
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputValue:this.input.value
        })
    }

    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
    }

    //删除列表项
    deleteItem(index){
        // console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie 