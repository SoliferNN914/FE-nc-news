import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [userName, setUserName] = useState("jessjelly");

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {props.children}
        </UserContext.Provider>
    );
};