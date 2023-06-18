import TodoRowItem from "./TodoRowItem"

function TodoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Task</th>
                    <th scope='col'>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem 
                        key={todo.rowNumber} // it is a way for react to be able to identify each row uniquely
                        rowNumber={todo.rowNumber}
                        rowTask={todo.rowTask}
                        rowDescription={todo.rowDescription}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable