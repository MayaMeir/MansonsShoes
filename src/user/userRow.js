import React from 'react';

function UserRow(props){

    const date = props.order.orderDate;

    return <>
    <tr>

      <td>{props.order.productsNames.join(", ")}</td>
      <td>{date.toUTCString()}</td>

    </tr>
    </>
}

export default UserRow;