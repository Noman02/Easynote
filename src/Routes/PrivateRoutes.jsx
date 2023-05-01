import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { PropTypes } from "prop-types";
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return (
      <Loading/>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

PrivateRoute.propTypes = {
    children: PropTypes.string.isRequired,
  };

export default PrivateRoute