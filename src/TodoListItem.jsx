
function TodoListItem(todo) {
    
  return (
    <>
        <ul>
          {todoList.map(todo => <li>{todo.title}</li>)}
        </ul>
    </>
  );
}

export default TodoListItem;