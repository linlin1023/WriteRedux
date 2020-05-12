export function createStore(reducer , enhancer){   

    if(enhancer){
        return  enhancer(createStore)(reducer);
    }

    const listeners = [];
    let currentState = undefined;

    function getState(){
        return currentState;
    }
    function dispatch(action){
        console.log("action", action )
        currentState = reducer(currentState, action)
        listeners.map(listener => listener());
    }

    function subscribe(listener){
        listeners.push(listener);
    }

    currentState = reducer(currentState,{type: "@INIT-REDUX-KKB"});

    return {
        getState,
        dispatch,
        subscribe
    }
}

export function applyMiddleware(...middlewares){
    return createStore => {
        return (...args)=>{
            const store = createStore(...args);
            var {dispatch, getState} = store;
            const storeApi = {
                getState,
                dispatch
            }
            const middlewaresChain = middlewares.map(
                middleware=> 
                middleware(storeApi)
                );
            
            dispatch = compose(...middlewaresChain)(dispatch)

            return {
                ...store,
                dispatch
            }
        }
    };
}

function compose(...func){
    if(func.length === 0)
        return arg=>arg;
    if(func.length === 1) 
        return func[0];
    return func.reduce((a,b) => (...args)=> a(b(...args)))
}
//{getState, dispatch}
export function logger(storeApi){
    return dispatch=>action=>{
        console.log("logger")
        dispatch(action)
    }
}

export function thunk(storeApi){
    return dispatch => action=>{
        if(typeof action === 'function'){
            action(dispatch);
        }else{
            dispatch(action);
        }
    }
}