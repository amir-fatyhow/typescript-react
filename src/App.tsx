import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {ITodo} from "./interfaces";


const App: React.FC = () =>{
    const [todos, setTodos] = useState<ITodo[]>([])
    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [...prev, newTodo])
    }

    const toggleHandler = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }
  return (
   <>
       <Navbar/>
       <div className="container">
            <TodoForm onAdd={addHandler}/>
           <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
       </div>
   </>
  );
}

export default App;
