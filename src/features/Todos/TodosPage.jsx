
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList/TodoList.jsx';
import {useState, useEffect} from 'react';


function TodosPage({token}) {

  const [todoList, setTodoList] = useState([]);
  const [error, SetError] = useState('');
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    async function fetchTodos(){
      setError('');
      setIsTodoListLoading(true);

      try{
        const params = new URLSearchParams({
        limit: 100,
        });
        const response = await fetch(`/api/tasks?${params}`, {
        headers: {'X-CSRF-TOKEN': token,},
        credentials: 'include',
        });

        if (response.status === 401) {
          throw new Error('unauthorized');
        }
        
        if(!response.ok){
          throw new Error (`Failed to fetch tasks. Status: ${response.status}`);
        }

        const data = await response.json();
        setTodoList(data);
        
      }
      catch(err){
        SetError(err.message)
      }
      finally{
        setIsTodoListLoading(false);
      }
    }

    fetchTodos;
  },[token]);

  
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

export default TodosPage;
