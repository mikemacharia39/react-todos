import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowTask: "Learn React", rowDescription: "React is a library for developing modern single page websites"},
    {rowNumber: 2, rowTask: "Meeting", rowDescription: "Attend meeting at 10:30am"},
    {rowNumber: 3, rowTask: "React with spring boot", rowDescription: "Learn react with spring boot"}
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Tasks
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
