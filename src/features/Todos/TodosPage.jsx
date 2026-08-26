
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList/TodoList.jsx';
import {useState} from 'react';


function TodosPage() {

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
        <TodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onCompleteTodo={completeTodo} onUpdateTodo={updateTodo}/>
      </div>
  )
      
}

export default TodosPage
