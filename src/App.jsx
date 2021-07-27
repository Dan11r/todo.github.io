import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./component/Form";
import Items from './component/Item';
import styled from "styled-components";

const App = () =>{
    const [todos, setTodos] = useState([])

    const addToDo = (text) => {
        if (text) {
            const toDo = {
                toDoText: text,
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                isCompleted: false
            }
            setTodos([...todos, toDo])
            setTodos(JSON.parse('todos'))
        }


    }
    const deleteToDo = (id) => {
        if (id) {
            setTodos(todos.filter(t => t.id != id))
            setTodos(JSON.parse('todos'))
        }
    }
    const toggleCompleted = (id) => {
        if (id) {
            setTodos(todos.map(t => t.id == id ? {isCompleted: !t.isCompleted, toDoText: t.toDoText, id: t.id} : t))
            setTodos(JSON.parse('todos'))
        }
    }
    const StyledDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify-content:flex-start;
      align-items: center;
    `;
    const StyledItems = styled(Items)`
      display: flex;
      flex-direction: row;
    `;
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')))
    },[])
    useEffect(()=>{
            localStorage.setItem('todos', JSON.stringify(todos))

    },[todos])

    return (
        <div className="App">
            <StyledDiv>
                <h1>{todos.length}</h1>
                <Form addToDo={addToDo}/>
                {todos.map(t => <StyledItems deleteToDo={deleteToDo} toggleCompleted={toggleCompleted} key={t.id}
                                             id={t.id} text={t.toDoText} isCompleted={t.isCompleted} todo={t}/>)}
            </StyledDiv>
        </div>
    )

}

export default App;
