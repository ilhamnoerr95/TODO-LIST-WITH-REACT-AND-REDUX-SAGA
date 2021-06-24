import {takeLatest, put, all, call} from 'redux-saga/effects';
import {deleteTodoSaga, addTodoSaga, updateTodoSaga} from './action';
import * as actions from './type/ActionType'

export function* onAddTodoSaga({payload}){
    yield put(addTodoSaga(payload));
};

export function* oneDeleteTodoSaga({payload: {id}}){
    yield put(deleteTodoSaga(id));
};
export function* onUpdateTodoSaga({payload}){
    yield put(updateTodoSaga(payload));
};

export function* onDelete(){
    yield takeLatest(actions.DELETE_TODOS, oneDeleteTodoSaga)
};

export function* onAdd(){
    yield takeLatest(actions.ADD_TODOS, onAddTodoSaga)
};

export function* onUpdate(){
    yield takeLatest(actions.UPDATE_TODOS, onUpdateTodoSaga)
};

export function* todos(){
    yield all([call(onDelete), call(onAdd), call(onUpdate)]);
}

export default todos;