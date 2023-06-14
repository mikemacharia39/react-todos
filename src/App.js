import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Tasks
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>
                  #
                </th>
                <th scope='col'>
                  Task
                </th>
                <th scope='col'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
                <TodoRowItem/>
                <tr>
                  <th scope='row'>2</th>
                  <td>Meeting</td>
                  <td>Attend meeting at 10:30am</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
