// import { getUserCred } from '../utils/utils'
import AccessDenied from "../ComponentsTemp/AccessDenied";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({children}) => {
  
  const userCred=useSelector((state)=>state.medInfoUser.medInfoUserCred);
  // console.log(userCred)
      if(userCred===null||userCred.role!=="admin"){
  
            return <AccessDenied></AccessDenied>
           }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute