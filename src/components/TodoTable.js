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
                        rowNumber={todo.rowNumber}
                        rowTask={todo.rowTask}
                        rowDescription={todo.rowDescription}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable