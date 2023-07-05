import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UniversalButton from "./components/UniversalButton";
import UniversalInput from "./components/UniversalInput";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [title, setTitle] = useState("")

    const fetchRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const showTodosHandler = () => {
        fetchRequest()
    }

    const hideTodosHandler = () => {
        setTodos([])
    }

    const addTaskHandler = () => {
        let newTask = {userId: 1, id: todos.length -1, title: title, completed: false}
        setTodos([newTask, ...todos])
        setTitle("")
    }


    return (
        <div className="App">

            <div>
                <UniversalButton callback={addTaskHandler} name={"+"}/>
                <UniversalInput setTitle={setTitle}/>
            </div>
            <div>
                <button onClick={showTodosHandler}>Show me Todos</button>
                <button onClick={hideTodosHandler}>Hide Todos</button>
            </div>

            <ul>
                {todos.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.userId}</span>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
