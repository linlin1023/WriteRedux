import {store }  from './store';
import React, { Component } from 'react'

class ReduxPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount(){
        store.subscribe(()=>this.forceUpdate());
    }

    asynAdd = ()=>{
        store.dispatch((dispatch)=>{
            setTimeout(()=>
                dispatch({type: 'ADD'}),
                2000
            );
        });
    }

    render() {
        return (
            <div>
                    <div>{store.getState()}</div>
                    <div> 
                        <button onClick={()=>{store.dispatch({type: 'ADD'})}}>ADD</button>
                    </div>
                        <div><button onClick={()=>{store.dispatch({type: 'MINUS'})}}>MINUS</button>
                    </div>
                   <div>
                        <button onClick={this.asynAdd}>Async ADD</button>
                    </div>
            </div>
        )
    }
}

export default ReduxPage
