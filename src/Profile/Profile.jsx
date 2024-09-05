import { useSelector } from "react-redux";
import { useSingleUserQuery } from "../redux/user/usersApi";
import { useNavigate } from "react-router";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data...</div>;

  const userData = data?.data;

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-xl font-semibold">{userData?.name}</h1>
      <p>Email: {userData?.email}</p>
      <p>Role: {userData?.role}</p>

      {userData?.purchaseList && userData.purchaseList.length > 0 ? (
        <div>
          <h3>Purchased Medicines:</h3>
          {userData.purchaseList.map((med, idx) => (
            
            <div key={idx}>
                  console.log(med)
              <p>{idx+1}. {med.medicineName}</p>
              <p>Quantiy: {med.medicineAmount}</p>
              <button
                className="border-2 rounded-md border-red-300"
                onClick={() => navigate(`/medicine/${med.medicineId}`)}
              >
                Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No medicines purchased yet.</p>
      )}
    </div>
  );
};

export default Profile;
