import { useParams } from "react-router";
import { useState } from "react";
import { useSingleMedicineQuery, useSellAvailabityMutation } from "../redux/medicine/medicinesApi";
import { Grid, TextField, Button } from "@mui/material";

const BuyMedicine = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleMedicineQuery(id);
  const [amountSold, setAmountSold] = useState(0);
  const [sellAvailabity, { isLoading: isUpdating, isSuccess }] = useSellAvailabityMutation();
  
  // Local state to keep track of updated medicine data
  const [updatedData, setUpdatedData] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const handleAmountChange = (e) => {
    setAmountSold(parseInt(e.target.value));
  };

  const handleSell = async () => {
    if (amountSold > 0 && amountSold <= (updatedData ? updatedData.available : data?.data?.available)) {
      try {
        const result = await sellAvailabity({ id, body: { amountSold } }).unwrap();
        setUpdatedData(result.data); // Update local state with the latest data
        alert("Medicine sold and availability updated successfully!");
      } catch (error) {
        alert("Error updating medicine: " + error.message);
      }
    } else {
      alert("Invalid amount. Please enter a valid number."); //! if asking amount to buy is more than available amount
    }
  };

  const currentData = updatedData || data?.data;

  return (
    <div className="min-h-screen">
      <h1>This is Buy Medicine page</h1>
      <h1 className="text-2xl font-bold ">{currentData?.medicine_name}</h1>
      <p className="text-sm">
        <span className="text-fuchsia-800 font-semibold">Total Sold:</span> {currentData?.sold}
      </p>
      <p className="text-sm">
        <span className="text-fuchsia-800 font-semibold">Available:</span> {currentData?.available}
      </p>

      <Grid item xs={12} sm={12} md={6}>
        <TextField
          sx={{
            maxWidth: "80%",
            mx: "auto",
            display: "block",
          }}
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
        sx={{
          maxWidth: "80%",
          mx: "auto",
          mt: 2,
          display: "block",
        }}
        variant="contained"
        color="primary"
        onClick={handleSell}
        disabled={isUpdating}
      >
        {isUpdating ? "Updating..." : "Sell Medicine"}
      </Button>

      {isSuccess && (
        <p className="text-green-600 text-center mt-4">Medicine updated successfully!</p>
      )}
    </div>
  );
};

export default BuyMedicine;
