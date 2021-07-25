import React, {useState} from 'react';
import './App.css';
import Form from "./component/Form";
import Items from './component/Item';

const App = () =>{
    const [todos, setTodos] = useState([])
    const addToDo = (text) =>{
        if(text){
            const toDo = {
                toDoText:text,
                id:`f${(~~(Math.random()*1e8)).toString(16)}`,
                isCompleted:false
            }
            setTodos([...todos, toDo])
        }


    }
    const deleteToDo = (id) =>{
        if(id){
            setTodos(todos.filter(t => t.id != id))
        }
    }
    const toggleCompleted = (id) =>{

    }
    return (
        <div className="App">
            <h1>{todos.length}</h1>
            <Form addToDo={addToDo}/>
            {todos.map(t => <Items toggleCompleted={toggleCompleted} key={t.id} id={t.id} text={t.toDoText} isCompleted={t.isCompleted} todo={t}/>)}
        </div>
    )

}

export default App;
