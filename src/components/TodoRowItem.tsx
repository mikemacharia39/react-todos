import React from "react"

export const TodoRowItem: React.FC<{
    rowNumber: number, 
    rowTask: string, 
    rowDescription: string, 
    deleteTodo: Function}> = (props) => {
 return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
        <th scope='row'>{props.rowNumber}</th>
        <td>{props.rowTask}</td>
        <td>{props.rowDescription}</td>
    </tr>
 )
}