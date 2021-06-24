import React, {useState} from "react";
import {Button} from "antd";
import {useDispatch} from "react-redux"
import {deleteTodo, updateTodo} from '../redux/action'

const TodoItem = (props)=>{
    let {todoNama} = props;

    const [edit,setEdit] = useState(false)
    const [nama, setName] = useState(todoNama.nama)

    console.log("todo=>", todoNama)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{Math.trunc(todoNama.id *10)}</div>
                <div className="col-8">
                   {edit ? (
                    <input 
                    type="text"
                    onChange={(e)=> setName(e.target.value)}
                    className="form-control"
                    value={nama}
                    />
                   ) : (
                       <h4>{todoNama.nama}</h4>
                   )}
                </div>
                <Button 
                onClick={()=> {
                    if(edit){
                        setName(todoNama.nama);
                        dispatch(updateTodo({
                            ...todoNama,
                            nama:nama
                        }))
                    }
                    setEdit(!edit)
                }} 
                type="primary"
                className="mr-2"
                >
                    {edit ? "Update" : "Edit"}
                </Button>
                <Button type="primary" 
                onClick={()=> dispatch(deleteTodo({id: todoNama.id}))} 
                danger>
                    Delete
                </Button>
            </div>
        </div>
    )
} 

export default TodoItem;