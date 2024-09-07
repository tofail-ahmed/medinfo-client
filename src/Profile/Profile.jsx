import { useSelector } from "react-redux";
import { useSingleUserQuery } from "../redux/user/usersApi";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

const Profile = () => {
      const navigate=useNavigate()
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  
  // Ensure userCred exists and the id is defined
  if (!userCred || !userCred.id) {
    return <div>Error: User is not logged in or missing credentials</div>;
  }

  const id = userCred?.id?.toString(); // Convert id to string if needed

  // Fetch user data with the id
  const { data, isLoading, error } = useSingleUserQuery(id);

  if (isLoading) return <Loader/>;
  if (error) return <div>Error loading user data...</div>;

  const userData = data?.data;

  return (
    <div className="flex justify-center items-center my-10 bg-lime-500/50">
      <div className="min-h-screen ">
      <h1 className="text-center text-xl font-semibold">{userData?.name}</h1>
      <p>Email: {userData?.email}</p>
      <p>Role: {userData?.role}</p>

      {userData?.purchaseList && userData.purchaseList.length > 0 ? (
        <div>
          <h3>Purchased Medicines:</h3>
          {userData.purchaseList.map((med, idx) => (
            
            <div key={idx}>
                  console.log(med)
              <p>{idx+1}. <button
                className="text-xl font-bold text-blue-400 hover:text-blue-800 duration-200"
                onClick={() => navigate(`/medicine/${med.medicineId}`)}
              >
                 {med.medicineName}
              </button></p>
              <p>Quantiy: {med.medicineAmount}</p>
              
            </div>
          ))}
        </div>
      ) : (
        <p>No medicines purchased yet.</p>
      )}
    </div>
    </div>
  );
};

export default Profile;
