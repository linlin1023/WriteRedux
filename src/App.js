import React from 'react';
import './App.css';
import ContextPage from './pages/ContextPage'
import { argsToArgsConfig } from 'graphql/type/definition';
import ReduxPage from './ReduxPage'
function App() {
  return (
    <div className="App">
      <ReduxPage></ReduxPage>
    </div>
  );
}

function f1(args){
  console.log("f1", args);
  return args;
}
function f2(args){
  console.log("f2", args);
  return args;
}

function f3(args){
  console.log("f3", args);
  return args;
}

let res = f1(f2(f3("omg")));
console.log(res);

let res2 =  compose(f2)("omg2");

function compose (...args){
    if(args.length === 0) 
      return a=>a; 
    if(args.length === 1) {
      return args[0]
    }
      //返回一个函数定义，=>代表函数，args=>args表示一点都不处理的函数
    return args.reduce((a,b)=>{
      return  (...args)=>a(b(...args))
    });
}

console.log("res2",res2)
export default App;
