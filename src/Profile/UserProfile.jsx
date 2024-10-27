
import { useNavigate, useParams } from 'react-router';
import { useGetUserByMailQuery } from '../redux/user/usersApi';
import Loader from '../components/Loader';

const UserProfile = () => {
  const navigate = useNavigate();
  const { mail } = useParams();

  const { data, isLoading, error } = useGetUserByMailQuery(mail);
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading user data...</div>;

  const userData = data?.data;

  return (
    <div className="bg-lime-500/50 min-h-full ">
      <div className="  min-h-screen mx-auto lg:w-[1200px] w-full p-4 " >
      <div className="max-w-full  p-5 bg-lime-500/50 shadow-lg rounded-3xl ">
        <h1 className="text-center text-2xl font-semibold mb-4">{userData?.name}</h1>
        <p>Email: {userData?.email}</p>
        <p>Role: {userData?.role}</p>

        {userData?.purchaseList && userData.purchaseList.length > 0 ? (
          <div className="mt-4">
            <h3 className="font-semibold">Purchased Medicines:</h3>
            {[...userData.purchaseList].reverse().map((med, idx) => (
              <div key={idx} className="mb-2">
                <p>
                  {idx + 1}.{" "}
                  <button
                    className="text-xl font-bold text-blue-400 hover:text-blue-800 duration-200"
                    onClick={() => navigate(`/medicine/${med.medicineId}`)}
                  >
                    {med.medicineName}
                  </button>
                </p>
                <p>Quantity: {med.medicineAmount}</p>
                <p>Purchased At: {med.purchasedAt}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4">No medicines purchased yet.</p>
        )}
      </div>
  </div>
    </div>
  );
};

export default UserProfile;
