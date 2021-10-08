
import {ADD_TODO, CHANGE_TODO } from "./actionTypes.js";

export const changeTodo = (data) => {
    return { type: CHANGE_TODO, payload: data };
}


export const addTodo = (data) => {
    return {type: ADD_TODO, payload:data}
}