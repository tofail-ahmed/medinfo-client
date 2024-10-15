import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSingleMedicineQuery, useSellAvailabityMutation } from "../redux/medicine/medicinesApi";
import { Grid, TextField, Button, Card, Typography, Box } from "@mui/material";
import { usePurchaseMedicineMutation } from "../redux/user/usersApi";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import Loader from "../components/Loader";

const BuyMedicine = () => {
  const userCred = useSelector((state) => state.medInfoUser.medInfoUserCred);
  const { id } = useParams();
  const navigate = useNavigate();

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

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong...</div>;

  const handleAmountChange = (e) => setAmountSold(parseInt(e.target.value));

  const handleSell = async () => {
    const availableStock = updatedData?.available || data?.data?.available;

    if (amountSold > 0 && amountSold <= availableStock) {
      try {
        const result = await sellAvailabity({ id, body: { amountSold } }).unwrap();
        setUpdatedData(result.data);
        toast.success("Medicine sold and availability updated!");

        const medicineDetails = {
          medicineId: id,
          medicineName: data?.data?.medicine_name,
          medicineAmount: amountSold,
        };

        const purchaseResponse = await purchaseData({ id: userCred.id, medicineDetails });
        if (purchaseResponse.data.success) {
          toast.success("Medicine purchased successfully!");
          navigate("/profile");
        }
      } catch (error) {
        toast.error("Error processing your request: " + error.message);
      }
    } else {
      toast.error("Invalid amount. Please enter a valid number.");
    }
  };

  const currentData = updatedData || data?.data;

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "", py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 4, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: 3 }}>
            {/* <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#2e7d32' }}>
              Buy Medicine
            </Typography> */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center' }}>
              {currentData?.medicine_name}
            </Typography>
            <Box sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontSize: 16 }}>
                <strong>Total Sold:</strong> {currentData?.sold}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 16 }}>
                <strong>Available:</strong> {currentData?.available}
              </Typography>
            </Box>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Amount to Sell"
                  variant="outlined"
                  size="small"
                  type="number"
                  value={amountSold}
                  onChange={handleAmountChange}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#4caf50",
                      },
                      "&:hover fieldset": {
                        borderColor: "#388e3c",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#2e7d32",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSell}
                disabled={isUpdating}
                sx={{
                  width: '50%',
                  backgroundColor: '#388e3c',
                  "&:hover": {
                    backgroundColor: '#2e7d32',
                  },
                  py: 1.5,
                }}
              >
                {isUpdating ? "Updating..." : "Sell Medicine"}
              </Button>
            </Box>

            {isSuccess && (
              <Typography variant="body2" sx={{ color: "green", textAlign: "center", mt: 2 }}>
                Medicine Purchased successfully!
              </Typography>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuyMedicine;
