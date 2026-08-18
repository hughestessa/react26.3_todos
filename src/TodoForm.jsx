import {useRef, useState} from 'react';

function TodoForm({onAddTodo}) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    /*
    console.log('Event object: ', event);
    console.log('Event target ', event.target);
    console.log('Input value: ', event.target.todoTitle.value);
    */
    //const todoTitle = event.target.todoTitle.value.trim();

    if (workingTodoTitle && workingTodoTitle !== ""){
      onAddTodo(workingTodoTitle);
      setWorkingTodoTitle("");
      //event.target.reset();
      inputRef.current.focus();
    }
  };
  
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input ref={inputRef} 
        type="text" 
        id="todoTitle" 
        name="todoTitle"
        placeholder={'Todo text'}
        value={workingTodoTitle}
        onChange={(event) => {setWorkingTodoTitle(event.target.value)}}
        required />
      <button type="submit" disabled={!workingTodoTitle.trim()}>Add Todo</button>
    </form>
  );
}

export default TodoForm;