import  { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSingleMedicineQuery } from '../redux/medicine/medicinesApi';
import Loader from '../components/loader';
import { TextField, Grid, Button } from '@mui/material';

const UpdateMed = () => {
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
      setMedicineData(medData?.data); // Prepopulate form with existing data
    }
  }, [medData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to update the medicine data here
    console.log('Updated Medicine Data: ', medicineData);
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
            { label: 'Company Name', name: 'company_name' },
            { label: 'Generic Name', name: 'generic_name' },
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
