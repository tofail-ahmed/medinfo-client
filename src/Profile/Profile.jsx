import { useSelector } from "react-redux";
import { useSingleUserQuery } from "../redux/user/usersApi";
import { useNavigate } from "react-router";
import Loader from "../ComponentsTemp/Loader";
import MyButton from "../ComponentsTemp/MyButton";
import AddReview from "../AddReview/AddReview";

const Profile = () => {
  const navigate = useNavigate();
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);

  // Ensure userCred exists and the id is defined
  if (!userCred || !userCred.id) {
    return <div>Error: User is not logged in or missing credentials</div>;
  }

  const id = userCred?.id?.toString(); // Convert id to string if needed

  // Fetch user data with the id
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useSingleUserQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading user data...</div>;

  const userData = data?.data;
  console.log(data?.data);

  return (
    <div className="bg-lime-500/50 min-h-screen">
      <div className="flex justify-center items-center  relative mt-16">
             
             <div className="  my-10 p-5  shadow-lg rounded-3xl">
               {/* Edit button at top right */}
               <button
                 className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 duration-200"
                 // onClick={() => navigate(`/edit-profile/${id}`)}
                 onClick={() => navigate(`/update-profile`)}
               >
                 Edit
               </button>
       
       
               <img className="w-[100px] rounded-[100%] mx-auto" src={data?.data?.imgUrl} alt="" />
       
               <h1 className="text-center text-xl font-semibold">{userData?.name}</h1>
               <p>Email: {userData?.email}</p>
               <p>Role: {userData?.role}</p>
               {userData?.purchaseList && userData.purchaseList.length > 0 ? (
                 <div>
                   <h3>Purchased Medicines:</h3>
                   {[...userData.purchaseList].reverse().map((med, idx) => (
                     <div key={idx}>
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
                 <p>No medicines purchased yet.</p>
               )}
       
       
             </div>
           </div>
<div>
  <AddReview/>
</div>

    </div>
  );
};

export default Profile;
