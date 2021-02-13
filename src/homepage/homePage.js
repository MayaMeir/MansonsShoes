import React from 'react';
import Banner from './Shop.png';
import Princess from './princess.png';


function HomePage(){

    return <div><img
    alt="Princess"
    src={Princess}
    width="1600px"
    style={{marginTop:"10px", marginBottom:"10px"}}

/>
        <img
                alt="Banner"
                src={Banner}
                width="1600px"
                style={{marginTop:"10px", marginBottom:"10px"}}

            />
    </div>
}

export default HomePage;