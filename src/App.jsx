
import './App.css'
import TodoForm from './features/TodoForm.jsx';
import TodoList from './features/TodoList/TodoList.jsx';
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
        title: todoTitle,
        isCompleted: false
      };
      setTodoList(previous => [newTodo, ...previous])
  };

  function updateTodo(editedTodo){
    const updatedTodos = todoList.map(todo => {
      if (todo.id === editedTodo.id){
        return {...editedTodo};
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodos);
  };

  function completeTodo(id) {
    const updatedTodos = todoList.map(todo => {
      if (todo.id === id){
        return {...todo, isCompleted: true};
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };


  return (
      <div>
        <h1>To Do List:</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onCompleteTodo={completeTodo} onUpdateTodo={updateTodo}/>
      
      </div>
  )
}

export default App
