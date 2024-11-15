import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const RestrictedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
//   console.log(userCred)

  useEffect(() => {
    if (!userCred?.email ) {
    toast.warning("Login first please... Naviagting to login page",{
      style:{
            color:"orange",
            margin:"20px"
            // background:"red"
      }
     
    })
     
      navigate("/login", { replace: true });
    }
  }, [ navigate]);

  if (userCred === null) {
    return null; // Prevent children from rendering if not logged in
  }

  return <>{children}</>;
};

export default RestrictedRoute;
