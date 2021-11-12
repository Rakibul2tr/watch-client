import React, { createContext } from 'react';
import useFirebase from '../Hoocks/useFirebase';

export const Mycontext= createContext();
const Contextprovider = ({children}) => {

    const allcontext= useFirebase();
    
    return (
        <Mycontext.Provider value={allcontext}>
            {children}
        </Mycontext.Provider>
    );
};

export default Contextprovider;