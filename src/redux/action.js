import * as actions from './type/ActionType'

// REDUX ACTION
export const addTodo = (propsTodo) => {
    return {
        type: actions.ADD_TODOS,
        payload: propsTodo,
    }
}

export const deleteTodo = (propsid) => {
    return {
        type: actions.DELETE_TODOS,
        payload: propsid,
    }
}

export const updateTodo = (propsTodo) => {
    return {
        type: actions.UPDATE_TODOS,
        payload: propsTodo,
    }
}

// REDUX-SAGA
export const addTodoSaga = (propsTodo) => {
    return {
        type: actions.ADD_TODOS_SAGA,
        payload: propsTodo,
    }
}
export const deleteTodoSaga = (propsTodo) => {
    return {
        type: actions.DELETE_TODOS_SAGA,
        payload: propsTodo,
    }
}
export const updateTodoSaga = (propsTodo) => {
    return {
        type: actions.UPDATE_TODOS_SAGA,
        payload: propsTodo,
    }
}
