import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"


// Checks if the user is currently logged in or not. This is used in different components
const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null ) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}
export default withAuth