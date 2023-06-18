import React, {useState} from 'react'; // adds state functionality in our component
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false)

  // setTodos allows us to destructure the use state so that we can render more elements
  const [todos, setTodos] =  useState([
    {rowNumber: 1, rowTask: "Learn React", rowDescription: "React is a library for developing modern single page websites"},
    {rowNumber: 2, rowTask: "Meeting", rowDescription: "Attend meeting at 10:30am"},
    {rowNumber: 3, rowTask: "React with spring boot", rowDescription: "Learn react with spring boot"},
    {rowNumber: 4, rowTask: "Spring boot with kafka", rowDescription: "Learn kafka event streams"}
  ])

  const addNewTodo = (task, description) => {
    let rowIndex = 0;
    if (todos.length > 0) {
      rowIndex = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowIndex = 1;
    }
    const newTodo = {
      rowNumber: rowIndex,
      rowTask: task,
      rowDescription: description
    };

    setTodos(todos => [...todos, newTodo]);

    console.log(todos);
  }

  /**
   * By deleting, returns all rows minus the row whose row number is the same as the deleted row number
   * @param {*} deletedRowNumber 
   * @returns array of not deleted rows
   */
  const deleteTodo = (deletedRowNumber) => {
    let filtered = todos.filter(function(value) {
      return value.rowNumber !== deletedRowNumber;
    })

    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Tasks
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}  deleteTodo={deleteTodo} />
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            { showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {
            // show Add new todo form if showAddTodoForm is true
            showAddTodoForm &&  <NewTodoForm addNewTodo={addNewTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
