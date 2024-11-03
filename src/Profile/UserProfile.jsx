
import { useNavigate, useParams } from 'react-router';
import { useGetUserByMailQuery } from '../redux/user/usersApi';
import Loader from "../ComponentsTemp/Loader";
import { useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';

const UserProfile = () => {
  const darkMode = useSelector((store) => store.theme.darkMode); // getting current mode

  const navigate = useNavigate();
  const { mail } = useParams();

  const { data, isLoading, error } = useGetUserByMailQuery(mail);
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading user data...</div>;

  const userData = data?.data;
  console.log(userData)

  return (
    <div className="bg-lime-500/50 min-h-full ">
      <div className="  min-h-screen mx-auto lg:w-[1200px] w-full p-4 " >
      <div className="max-w-full  p-5 bg-lime-500/50 shadow-lg rounded-3xl ">
      <img className="mx-auto w-[100px] rounded-[100%]" src={userData.imgUrl} alt="" />
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
        {userData?.review && (
        <div style={{
          borderRadius: "8px",
          // border: `1px solid ${darkMode ? "yellow" : "gray"}`,
          // backgroundColor: darkMode ? "#333" : "#f5f5f5",
          backgroundColor:darkMode?"#6D28D9":'#94A3B8',
          color: darkMode ? "white" : "black",
         
          marginTop: "16px",
          marginBottom: "16px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
        }}>
          <span style={{
            width: "100%", padding: "16px", display: "flex",
            alignItems: "center", justifyContent: "center", textAlign: "start",
          }}>{data?.data?.review}</span>
          {/* <Grid className="flex justify-end mt-4">
            <Button
              variant="contained"
              color="primary"
              // onClick={handleEditClick}
              sx={{ width: { xs: "100%", lg: "auto" }, margin: "2px" }}
            >
              Edit Review
            </Button>
          </Grid> */}
        </div>
      )}
      </div>
  </div>
  
    </div>
  );
};

export default UserProfile;
