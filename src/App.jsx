
import './App.css'
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import {useState} from 'react';

/* const todos = [
    {id: 1, title: "Finish lesson 1"},
    {id: 2, title: "Finish lesson 2"},
    {id: 3, title: "Finish lesson 3"},
  ]*/


function App() {

  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle){
      const newTodo = {
        id: Date.now(),
        title: todoTitle
      };
      setTodoList(previous => [newTodo, ...previous])
  };

  return (
      <div>
        <h1>To Do List:</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList}/>
      
      </div>
  )
}

export default App
