import React from 'react';
import Banner from './Shop.png';
import Princess from './princess.png';
import { LinkContainer } from 'react-router-bootstrap';


function HomePage(){

    return <div>
          <LinkContainer to={'/store/crystal'} style={{margin:"15px", cursor: "pointer"}}>
    <img
    alt="Princess"
    src={Princess}
    width="95%"
    style={{marginTop:"10px", marginBottom:"10px"}}

/></LinkContainer>
        <LinkContainer to={'/store/elvira'} style={{margin:'15px', cursor: "pointer"}}>
        <img
                alt="Banner"
                src={Banner}
                width="95%"
                style={{ marginBottom:"10px"}}

            /></LinkContainer>
    </div>
}

export default HomePage;