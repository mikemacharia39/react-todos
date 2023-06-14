function TodoRowItem() {

    const rowNumber = 1;
    const rowTask = "Learn React";
    const rowDescription = "React is a library for developing modern single page websites";

 return (
    <tr>
        <th scope='row'>{rowNumber}</th>
        <td>{rowTask}</td>
        <td>{rowDescription}</td>
    </tr>
 )
}

export default TodoRowItem