function TodoRowItem(props) {

 return (
    <tr>
        <th scope='row'>{props.rowNumber}</th>
        <td>{props.rowTask}</td>
        <td>{props.rowDescription}</td>
    </tr>
 )
}

export default TodoRowItem