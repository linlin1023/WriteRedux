import React, { Component } from 'react'
import {ThemeProvider } from '../ContextProvider';
import ContextTypePage from './ContextTypePage'
import ConsumerPage from './ConsumerPage';
import {UserProvider } from '../UserContext';
import MultipleContextPage from './MultipleContextPage'
class ContextPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 theme: {
                     color: 'red'
                 },
                 user: {
                     username: "xiaoming"
                 }
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor = ()=>{
        this.setState({theme: this.state.theme.color === 'red'? {color:'green'}:{color: 'red'}});
    }
    //当定义一个类的成员变量和成员函数的时候。不需要let const var这样的修饰符号
    //会报 unexpected token错误，这个是javascript的语法错误
   
    render() {
        return (

            <div>
               
                <button onClick={this.changeColor}>change color</button>
                <ThemeProvider value = {this.state.theme}>
                    <UserProvider value ={this.state.user}>
                        <MultipleContextPage></MultipleContextPage>
                    </UserProvider>
                    <ContextTypePage></ContextTypePage>
                    <ConsumerPage></ConsumerPage>
                </ThemeProvider>
            </div>
        )
    }
}

export default ContextPage
