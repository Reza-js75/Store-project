import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

const ScrollProvider  = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const saveScrollPosition = (position) => {
        setScrollPosition(position);
    };

    return (
        <ScrollContext.Provider value={{scrollPosition, saveScrollPosition}}>
            {children} 
        </ScrollContext.Provider>
    );
};

const useScroll = () => {
    return useContext(ScrollContext)
};


export {ScrollProvider, useScroll} ;
