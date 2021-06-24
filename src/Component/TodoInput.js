import * as React from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/action'
import {Button, Input} from "antd";

const TodoInput = ()=>{
    const [nama, setName] = React.useState('');
    const dispatch = useDispatch()

    const handleAddTodo =()=>{
        dispatch(
            addTodo({
            id: Math.random(),
            nama,
        })
        );
        setName('');
    }


    return (
        <div>
            <div className="row m-2">
                <Input
                    type="text"
                    onChange ={(e) => setName(e.target.value)}
                    value={nama}
                    className="col-8"
                />
                <Button 
                    className="ml-3" 
                    type="primary" 
                    onClick={handleAddTodo} 
                    size="medium"
                    style={{width: "135px"}}
                >
                    Add
                </Button>
            </div>
        </div>
    )
}

export default TodoInput;