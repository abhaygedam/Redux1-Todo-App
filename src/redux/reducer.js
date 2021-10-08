

import {ADD_TODO, CHANGE_TODO } from "./actionTypes.js";

export const reducerFn = (state, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    ...payload    
                }]
            }
        case CHANGE_TODO:
            return {
                ...state,
                todos: payload
            }
        default:
            return { ...state };
    }
};


class Store{
    constructor(reducerFn, initialState) {
        this.reducer = reducerFn;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}
