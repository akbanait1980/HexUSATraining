import { createStore } from 'redux'

// initial state
const initialState  = {
    counter: 0
}

// reducer function
const counterReducer  =(state = initialState, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1
        }
    }
    return state;
}

// create store
const store = createStore(counterReducer);

export default store;