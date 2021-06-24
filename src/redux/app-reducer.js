import dataTodo from './data'
import * as actions from './type/ActionType'


const appReducer = (state = dataTodo, action)=>{
    let newTodos;

    switch (action.type) {
        case actions.ADD_TODOS_SAGA:
            newTodos = [...state]
            newTodos.push(action.payload);
            return newTodos;
        case actions.DELETE_TODOS_SAGA:
            newTodos = [...state]
            newTodos = newTodos.filter((todo)=> todo.id !== action.payload)
            return newTodos
        case actions.UPDATE_TODOS_SAGA:
            newTodos = [...state]
            let index = -1;
            for(let i = 0; i< newTodos.length; i++){
                index++;
                if(newTodos[i].id === action.payload.id){
                    break;
                }
            }
            if(index !== -1){
                newTodos[index] = action.payload;
            }
            return newTodos;
        default:
            return state;
    }
}

export default appReducer;