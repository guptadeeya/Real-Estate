import {useSelector} from 'react-redux'
// useNavigate is a hook but navigate is a component
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const {currentUser} = useSelector((state) => state.user)
  return (
    currentUser ? < Outlet/>
    : <Navigate to="/signin"/>
    // : <h1>Sign in to view this details</h1>
  )
}
