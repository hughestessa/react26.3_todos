 import TodoListItem from './TodoListItem.jsx'
 
 const todos = [
    {id: 1, title: "Finish lesson 1"},
    {id: 2, title: "Finish lesson 2"},
    {id: 3, title: "Finish lesson 3"},
  ]

function TodoList({todoList}) {
    
  return (
    <>
        <ul>
          {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </>
  );
}

export default TodoList;