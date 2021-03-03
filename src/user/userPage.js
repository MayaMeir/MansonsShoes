import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import UserRow from './userRow';

function UserPage(props) {

  const userName = 'this is dynamic';

  return <div>
    <h1>Hi {userName}</h1>
    <Container>
      <Row>
        <Col xs="3"><div>
            <h3>All your orders</h3>
          </div>
        <div>
            <h3>Update your details</h3>
          </div>
          
        </Col>
        <Col xs="9">
        <Table striped bordered hover variant="dark" id="orders">
  <thead style={{fontWeight: "300"}}>
    <tr>
      <th>Product Names</th>
      <th>Order Date</th>
    </tr>
  </thead>
  <tbody>
  {props.order.map((element, index) => {
          return <UserRow order={element} key={index}/>
        })}
 </tbody>
</Table>
          
        </Col>

      </Row>
    </Container>
  </div>
}

export default UserPage;