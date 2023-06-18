import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowTask: "Learn React", rowDescription: "React is a library for developing modern single page websites"},
    {rowNumber: 2, rowTask: "Meeting", rowDescription: "Attend meeting at 10:30am"},
    {rowNumber: 3, rowTask: "React with spring boot", rowDescription: "Learn react with spring boot"},
    {rowNumber: 4, rowTask: "Spring boot with kafka", rowDescription: "Learn kafka event streams"}
  ]

  const showTodo = () => {
    const newTodo = {
      rowNumber: todos.length + 1,
      rowTask: "AWS Proficiency course",
      rowDescription: "Learn AWS course"
    };

    todos.push(newTodo);

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
          <button className='btn btn-primary' onClick={showTodo}>
            Add New Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
