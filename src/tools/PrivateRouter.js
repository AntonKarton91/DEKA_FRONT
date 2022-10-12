import { Navigate } from "react-router-dom"

const RequireAuth = ({children}) => {
    const isAuth = localStorage.getItem('accessToken')
    if (!isAuth) {
        return <Navigate to='/login'/>
    }
    return children
}





export default RequireAuth