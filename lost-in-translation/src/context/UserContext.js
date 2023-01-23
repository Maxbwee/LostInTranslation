import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

// Context object allows you to pull the value of the context

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // returns { user and setuser } object.
}

// Context provider manages state of context

const UserProvider = (props) => {
    // magic strings and numbers 
    const [user , setUser] = useState(storageRead(STORAGE_KEY_USER))

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