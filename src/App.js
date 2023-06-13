import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        Your Tasks
      </div>
      <div>
        <table>
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
              <tr>
              <th scope='row'>1</th>
              <td>Learn React</td>
              <td>React is a library for developing modern single page websites</td>
              </tr>
              <tr>
              <th scope='row'>2</th>
              <td>Meeting</td>
              <td>Attend meeting at 10:30am</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
