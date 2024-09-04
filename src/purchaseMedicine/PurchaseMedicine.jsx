import { useSelector } from "react-redux"
import { useParams } from "react-router";
import { useSingleMedicineQuery } from "../redux/medicine/medicinesApi";
import { useEffect } from "react";
import Loader from "../components/Loader";


const PurchaseMedicine = () => {
      const userCred=useSelector((state)=>state.medInfoUser.medInfoUserCred);
      console.log(userCred)

      const {id}=useParams();
      console.log(id)

      const {data:medicineData,isLoading:medicineLoading}=useSingleMedicineQuery(id);
      console.log(medicineData)
     if(medicineLoading){
      return <Loader/>
     }



      return (
      <div className="min-h-screen">
      <h1>This is Buy Medicine page</h1>
      <h1 className="text-2xl font-bold ">{currentData?.medicine_name}</h1>
      <p className="text-sm">
        <span className="text-fuchsia-800 font-semibold">Total Sold:</span>{" "}
        {currentData?.sold}
      </p>
      <p className="text-sm">
        <span className="text-fuchsia-800 font-semibold">Available:</span>{" "}
        {currentData?.available}
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
        <p className="text-green-600 text-center mt-4">
          Medicine updated successfully!
        </p>
      )}
    </div>
  )
}

export default PurchaseMedicine