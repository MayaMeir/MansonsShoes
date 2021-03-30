import {useState} from 'react';
import React from 'react';

let UserObject = {
    username: 'user',
    cart: []
};

export const thing = React.createContext(UserObject);

const ContextWrapper = ({children}) => {
    const [cart, setCart] = useState(UserObject);
    return (<thing.Provider value={[cart, setCart]}>
        {children}
        </thing.Provider>
)

    
}

export default ContextWrapper;