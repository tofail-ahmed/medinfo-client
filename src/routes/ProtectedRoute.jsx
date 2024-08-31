import React from 'react'
import { getUserCred } from '../utils/utils'
import AccessDenied from '../components/AccessDenied';

const ProtectedRoute = ({children}) => {
      const userCred=getUserCred();
      if(userCred&&userCred.role!=="admin"){
  
            return <AccessDenied></AccessDenied>
           }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute