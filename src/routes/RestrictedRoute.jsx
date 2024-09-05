import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const RestrictedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  

  useEffect(() => {
    if (userCred === null ) {
    
     
      navigate("/login", { replace: true });
    }
  }, [userCred, navigate]);

  if (userCred === null) {
    return null; // Prevent children from rendering if not logged in
  }

  return <>{children}</>;
};

export default RestrictedRoute;
