import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const updateUser = (newUser) => {
        setUser(newUser);
    }

    return (
        <UserContext.Provider value={{user, updateUser}}>{children}</UserContext.Provider>
    );
};

const useUser = () => {
    const Context = useContext(UserContext);

    if (!useContext) {
        throw new Error ('useUser must be used within a UserProvider')
    }
    return Context;
}

export  {UserProvider, useUser};