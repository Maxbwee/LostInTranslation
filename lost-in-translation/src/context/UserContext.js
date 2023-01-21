import { createContext, useContext, useState } from "react";

// Context object allows you to pull the value of the context

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // returns { user and setuser } object.
}

// Context provider manages state of context

const UserProvider = (props) => {
    
    const [user , setUser] = useState(null)

    const state = {
        user,
        setUser
    }

    return(
        <UserContext.Provider value={state}>
        {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider