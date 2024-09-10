import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSingleMedicineQuery, useSellAvailabityMutation } from "../redux/medicine/medicinesApi";
import { Grid, TextField, Button } from "@mui/material";
import { usePurchaseMedicineMutation } from "../redux/user/usersApi";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import Loader from "../components/loader";




const BuyMedicine = () => {
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  // console.log(userCred)
  const { id } = useParams();
const navigate=useNavigate()
// const navigate=useNavigate()
// if(userCred===null){
//   alert("Login first ⚠")
//   navigate("/login")
// } 
  const { data, isLoading, error } = useSingleMedicineQuery(id);
  const [amountSold, setAmountSold] = useState(0);
  const [updatedData, setUpdatedData] = useState(null);

  const [sellAvailabity, { isLoading: isUpdating, isSuccess }] = useSellAvailabityMutation();
  const [purchaseData, { isLoading: purchaseLoading, error: purchaseError }] = usePurchaseMedicineMutation();

  useEffect(() => {
    if (purchaseLoading) {
      toast.info("Medicine purchasing in process, please wait...");
    } else if (purchaseData?.success) {
      toast.success("Medicine purchased successfully");
     
    } else if (purchaseError?.status === 409) {
      toast.error(purchaseError.data.message);
    }
  }, [purchaseData, purchaseLoading, purchaseError]);

  if (isLoading) return <Loader></Loader>;
  if (error) return <div>Something went wrong...</div>;

  const handleAmountChange = (e) => setAmountSold(parseInt(e.target.value));

  const handleSell = async () => {
    const availableStock = updatedData?.available || data?.data?.available;

    if (amountSold > 0 && amountSold <= availableStock) {
      try {
        const result = await sellAvailabity({ id, body: { amountSold } }).unwrap();
        setUpdatedData(result.data);
        alert("Medicine sold and availability updated successfully!");

        const medicineDetails = {
          medicineId: id,
          medicineName: data?.data?.medicine_name,
          medicineAmount: amountSold,
        };

        const purchaseResponse = await purchaseData({ id: userCred.id, medicineDetails });
        if (purchaseResponse.data.success) {
          alert("Medicine purchased successfully and added to your list!");
          navigate("/");
        }
      } catch (error) {
        alert("Error processing your request: " + error.message);
      }
    } else {
      alert("Invalid amount. Please enter a valid number.");
    }
  };

  const currentData = updatedData || data?.data;

  return (
    <div className="min-h-screen">
      <h1>Buy Medicine</h1>
      <h1 className="text-2xl font-bold ">{currentData?.medicine_name}</h1>
      <p className="text-sm">
        <span className="text-fuchsia-800 font-semibold">Total Sold:</span> {currentData?.sold}
      </p>
      <p className="text-sm">
        <span className="text-fuchsia-800 font-semibold">Available:</span> {currentData?.available}
      </p>

      <Grid item xs={12} sm={12} md={6}>
        <TextField
          sx={{ maxWidth: "80%", mx: "auto", display: "block" }}
          label="Amount to Sell"
          variant="outlined"
          size="small"
          type="number"
          value={amountSold}
          onChange={handleAmountChange}
          fullWidth
        />
      </Grid>

      <Button
        sx={{ maxWidth: "80%", mx: "auto", mt: 2, display: "block" }}
        variant="contained"
        color="primary"
        onClick={handleSell}
        disabled={isUpdating}
      >
        {isUpdating ? "Updating..." : "Sell Medicine"}
      </Button>

      {isSuccess && <p className="text-green-600 text-center mt-4">Medicine updated successfully!</p>}
    </div>
  );
};

export default BuyMedicine;
