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
                <TodoRowItem 
                    rowNumber={props.todos[0].rowNumber}
                    rowTask={props.todos[0].rowTask}
                    rowDescription={props.todos[0].rowDescription} 
                />
                <TodoRowItem 
                    rowNumber={props.todos[1].rowNumber}
                    rowTask={props.todos[1].rowTask}
                    rowDescription={props.todos[1].rowDescription} 
                />
                <TodoRowItem 
                    rowNumber={props.todos[2].rowNumber}
                    rowTask={props.todos[2].rowTask}
                    rowDescription={props.todos[2].rowDescription} 
                />
                
            </tbody>
        </table>
    )
}

export default TodoTable