import React, {useState} from 'react'; // adds state functionality in our component
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  // setTodos allows us to destructure the use state so that we can render more elements
  const [todos, setTodos] =  useState([
    {rowNumber: 1, rowTask: "Learn React", rowDescription: "React is a library for developing modern single page websites"},
    {rowNumber: 2, rowTask: "Meeting", rowDescription: "Attend meeting at 10:30am"},
    {rowNumber: 3, rowTask: "React with spring boot", rowDescription: "Learn react with spring boot"},
    {rowNumber: 4, rowTask: "Spring boot with kafka", rowDescription: "Learn kafka event streams"}
  ])

  const addNewTodo = (task, description) => {
    const newTodo = {
      rowNumber: todos.length + 1,
      rowTask: task,
      rowDescription: description
    };

    setTodos(todos => [...todos, newTodo]);

    console.log(todos);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Tasks
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addNewTodo}>
            Add New Todo
          </button>
          <NewTodoForm addNewTodo={addNewTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
