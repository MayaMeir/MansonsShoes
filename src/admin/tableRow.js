import React from 'react';

function Row(props){

    const date = props.order.orderDate;

    return <>
    <tr>
      <td>{props.order.orderId}</td>
      <td>{props.order.customerId}</td>
      <td>{props.order.numOfProducts}</td>
      <td>{props.order.productsNames}</td>
      <td>{props.order.productsId}</td>
      <td>{date.toUTCString()}</td>

    </tr>
    </>
}

export default Row;