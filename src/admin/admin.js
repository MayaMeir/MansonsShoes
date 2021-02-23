import React from 'react';
import { Table } from 'react-bootstrap';
import Row from './tableRow';

function AdminPage(props){

    const date = props.order.orderDate;

    return <div>
        <h1>Admin Interface</h1>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Customer ID</th>
      <th>Number Of Products</th>
      <th>Product Names</th>
      <th>Products ID</th>
      <th>Order Date</th>
    </tr>
  </thead>
  <tbody>
  {props.order.map((element, index) => {
          return <Row order={element} />
        })}
          </tbody>
</Table>
    </div>
}

export default AdminPage;