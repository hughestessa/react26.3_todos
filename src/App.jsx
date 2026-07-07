
import './App.css'

function App() {
  const todoList = [
    {id: 1, title: "Finish lesson 1"},
    {id: 2, title: "Finish lesson 2"},
    {id: 3, title: "Finish lesson 3"},
  ]

  return (
      <div>
        <h1>Tessa's To Do List:</h1>
        <ul>
          {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      </div>
  )
}

export default App
