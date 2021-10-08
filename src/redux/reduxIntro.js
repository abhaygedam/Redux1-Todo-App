import { createStore } from "redux";
import { reducerFn } from "./reducer.js";




const initialState = {
    todos : [],
}

export const store = new createStore(reducerFn, initialState);



// store.dispatch(addCount(1));
// store.dispatch(addCount(1));

// console.log(store.getState());

// store.dispatch(removeCount(1));

// store.dispatch(addTodo({ id: 1, status: false, title: "Learn Redux" }));

// console.log(store.getState());