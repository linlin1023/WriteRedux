import React, { Component } from 'react'
import {UserConsumer } from '../UserContext';
import { ThemeConsumer } from '../ContextProvider';


class MultipleContextPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

  //在class里面定义class的成员变量和成员函数，不需要使用修饰符，let const var, function
  //在class外面定义非class的成员变量和成员函数，需要使用修饰符号

    render() {
        return (
            <div>
                <UserConsumer>
                   
                    {user =>  
                        <ThemeConsumer>
                             {theme=> <div style={{color: theme.color}}>{user.username}</div> }
                        </ThemeConsumer>
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default MultipleContextPage
