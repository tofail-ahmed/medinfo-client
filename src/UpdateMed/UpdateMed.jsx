import  { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSingleMedicineQuery, useUpdateMedMutation } from '../redux/medicine/medicinesApi';
import Loader from '../components/loader';
import { TextField, Grid, Button } from '@mui/material';
import { toast } from 'sonner';
// import { useSelector } from 'react-redux';

const UpdateMed = () => {
      // const darkMode = useSelector((state) => state.theme.darkMode);
      // const textColor = darkMode ? "#fff" : "#000";
      const navigate=useNavigate()
const [medicineDetails,{isLoading:updateMedLoading}]=useUpdateMedMutation()

if(updateMedLoading){
      toast.info("Medicine update in progress, please wait...")
}

      const { id } = useParams();
  const { data: medData, isLoading: medLoading, error: medError } = useSingleMedicineQuery(id);
  const [medicineData, setMedicineData] = useState({
    medicine_name: '',
    company_name: '',
    generic_name: '',
    available: '',
    alt_medicines: '',
    description: '',
    doses: '',
    side_effects: '',
    actions: '',
    interactions: '',
    uses: '',
    warnings: '',
  });

  useEffect(() => {
      if (medData) {
        setMedicineData({
          ...medData?.data,
          alt_medicines: Array.isArray(medData?.data?.alt_medicines) ? medData?.data?.alt_medicines.join(', ') : '', // Convert array to string
          side_effects: Array.isArray(medData?.data?.side_effects) ? medData?.data?.side_effects.join(', ') : '',
          interactions: Array.isArray(medData?.data?.interactions) ? medData?.data?.interactions.join(', ') : '',
          uses: Array.isArray(medData?.data?.uses) ? medData?.data?.uses.join(', ') : '',
          warnings: Array.isArray(medData?.data?.warnings) ? medData?.data?.warnings.join(', ') : '',
        });
      }
    }, [medData]);
    

  const handleChange = (e) => {
      const { name, value } = e.target;
    
      setMedicineData((prevData) => {
        // If the field being updated is '_id', return the previous state unchanged
        if (name === "_id") {
          return prevData;
        }
        
        // Otherwise, update the state with the new value
        return {
          ...prevData,     // Spread the previous data to keep the rest of the fields intact
          [name]: value,   // Dynamically update the field based on the input name
        };
      });
    };
    // console.log(medicineData)

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Convert comma-separated strings back to arrays if they are strings
      const updatedDetails = {
        medicine_name: medicineData.medicine_name,
        company_name: medicineData.company_name,
        generic_name: medicineData.generic_name,
        type:medicineData.type,
        category:medicineData.category,
        available: Number(medicineData.available),
        alt_medicines: typeof medicineData.alt_medicines === 'string' 
          ? medicineData.alt_medicines.split(',').map(item => item.trim()) 
          : medicineData.alt_medicines,  // Only split if it's a string
        description: medicineData.description,
        doses: medicineData.doses,
        side_effects: typeof medicineData.side_effects === 'string' 
          ? medicineData.side_effects.split(',').map(item => item.trim()) 
          : medicineData.side_effects,
        actions: medicineData.actions,
        interactions: typeof medicineData.interactions === 'string' 
          ? medicineData.interactions.split(',').map(item => item.trim()) 
          : medicineData.interactions,
        uses: typeof medicineData.uses === 'string' 
          ? medicineData.uses.split(',').map(item => item.trim()) 
          : medicineData.uses,
        warnings: typeof medicineData.warnings === 'string' 
          ? medicineData.warnings.split(',').map(item => item.trim()) 
          : medicineData.warnings,
          homeImg:medicineData.homeImg,
          detailsImg:medicineData.detailsImg
      };
    
      const UpdateRes = await medicineDetails({ id, updatedMed: updatedDetails });
    
      if (UpdateRes?.data.success) {
        toast.success(UpdateRes.data.message);
        navigate("/dashboard/allMedicine")
      } else {
        toast.error("Failed to update the medicine");
      }
    };
    
    
    
   

  if (medLoading) {
    return <Loader />;
  }

  if (medError) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className='mx-auto my-10'>
      <h1 className="text-xl text-center my-4">Update Medicine: {medicineData.medicine_name}</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          {[
            { label: 'Medicine Name', name: 'medicine_name' },
            { label: 'Medicine Type', name: 'type' },
            { label: 'Madicine Category', name: 'category' },
            { label: 'Company Name', name: 'company_name' },
            { label: 'Generic Name', name: 'generic_name' },
            { label: 'Home Image', name: 'homeImg' },
            { label: 'Details Image', name: 'detailsImg' },
            { label: 'Available Quantity', name: 'available', type: 'number' },
            { label: 'Alternative Medicines (comma-separated)', name: 'alt_medicines', multiline: true, rows: 4 },
            { label: 'Description', name: 'description', multiline: true, rows: 4 },
            { label: 'Doses', name: 'doses', multiline: true, rows: 4 },
            { label: 'Side Effects (comma-separated)', name: 'side_effects', multiline: true, rows: 4 },
            { label: 'Actions', name: 'actions', multiline: true, rows: 4 },
            { label: 'Interactions (comma-separated)', name: 'interactions', multiline: true, rows: 4 },
            { label: 'Uses (comma-separated)', name: 'uses', multiline: true, rows: 4 },
            { label: 'Warnings (comma-separated)', name: 'warnings', multiline: true, rows: 4 },
          ].map((field, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <TextField
                sx={{ maxWidth: '80%', mx: 'auto', display: 'block' }}
                fullWidth
                label={field.label}
                variant="outlined"
                size="small"
                name={field.name}
                value={medicineData[field.name]}
                onChange={handleChange}
                multiline={field.multiline || false}
                rows={field.rows || 1}
                type={field.type || 'text'}
               
              />
            </Grid>
          ))}
           
          
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
           <Button
            sx={{
              maxWidth: {
                xs: "80%", // 80% for extra small screens and up (mobile)
                lg: "90.5%", // 90% for large screens and up (desktops)
              },
              mx: "auto",
              display: "block",
            }}
            type="submit"
            variant="contained"
            color="primary"
            id="fullWidth"
            fullWidth
          >
              Update Medicine
            </Button>
          </Grid>
      </form>
    </div>
  );
};

export default UpdateMed;
