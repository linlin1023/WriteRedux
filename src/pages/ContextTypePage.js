import React, { Component } from 'react'
import { ThemeContext } from '../ContextProvider'

class ContextTypePage extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {color} = this.context;
        console.log("theme", color);
        console.log("this",this);
        return (
            <div style={{color: color}}>
                context type page
            </div>
        )
    }
}

export default ContextTypePage
