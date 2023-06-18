function TodoRowItem(props) {

 return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
        <th scope='row'>{props.rowNumber}</th>
        <td>{props.rowTask}</td>
        <td>{props.rowDescription}</td>
    </tr>
 )
}

export default TodoRowItem