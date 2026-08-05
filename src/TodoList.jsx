import TodoListItem from './TodoListItem.jsx';
import {useState} from 'react';
 

function TodoList({todoList, onCompleteTodo}) {
    
  const filteredTodoList = todoList.filter(todo => !todo.isCompleted);

  return (
    <>
        <p>{filteredTodoList.length === 0 ? "Add todo above to get started":"" }</p>
        {filteredTodoList.length > 0 ? (
        <ul>
          {filteredTodoList.map(todo => <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo}/>)}
        </ul>
        ) : null
        }
    </>
  );
}

export default TodoList;