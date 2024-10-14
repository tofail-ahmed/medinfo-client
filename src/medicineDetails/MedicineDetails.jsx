import { useParams } from "react-router";
import { useSingleMedicineQuery } from "../redux/medicine/medicinesApi";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import { Button, Container, Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';

const MedicineDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleMedicineQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', py:2  }}>
      <Card sx={{  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: 1,backgroundColor:"lightGreen" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} lg={6}>
            <CardMedia
              component="img"
              image={data?.data?.detailsImg}
              alt={data?.data?.medicine_name}
              sx={{
                // mx:2,
                width: '100%',
                height: { xs: 200, lg: 400 },
                // backgroundColor:"lightGreen"
                border:"2px solid lightGreen",
                borderRadius: 2,
                // boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>

          {/* Medicine Info Section */}
          <Grid item xs={12} lg={6}>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {data?.data?.medicine_name}
              </Typography>
              <Typography variant="body1"><strong>Company:</strong> {data?.data?.company_name}</Typography>
              <Typography variant="body1"><strong>Generic:</strong> {data?.data?.generic_name}</Typography>
              <Typography variant="body1"><strong>Description:</strong> {data?.data?.description}</Typography>
              <Typography variant="body1"><strong>Dose:</strong> {data?.data?.doses}</Typography>
              <Typography variant="body1"><strong>Actions:</strong> {data?.data?.actions}</Typography>

              <Box my={2}>
                <Typography variant="body1" gutterBottom><strong>Alternatives:</strong></Typography>
                <ul>
                  {data?.data?.alt_medicines.map((alt, idx) => (
                    <li key={idx}>{idx + 1}. {alt}</li>
                  ))}
                </ul>
              </Box>

              <Box my={2}>
                <Typography variant="body1" gutterBottom><strong>Side Effects:</strong></Typography>
                <ul>
                  {data?.data?.side_effects.map((effect, idx) => (
                    <li key={idx}>{idx + 1}. {effect}</li>
                  ))}
                </ul>
              </Box>

              <Box my={2}>
                <Typography variant="body1" gutterBottom><strong>Interactions:</strong></Typography>
                <ul>
                  {data?.data?.interactions.map((interaction, idx) => (
                    <li key={idx}>{idx + 1}. {interaction}</li>
                  ))}
                </ul>
              </Box>

              <Box my={2}>
                <Typography variant="body1" gutterBottom><strong>Uses:</strong></Typography>
                <ul>
                  {data?.data?.uses.map((use, idx) => (
                    <li key={idx}>{idx + 1}. {use}</li>
                  ))}
                </ul>
              </Box>

              <Box my={2}>
                <Typography variant="body1" gutterBottom><strong>Warnings:</strong></Typography>
                <ul>
                  {data?.data?.warnings.map((warning, idx) => (
                    <li key={idx}>{idx + 1}. {warning}</li>
                  ))}
                </ul>
              </Box>
            </CardContent>
          </Grid>
        </Grid>

        {/* Buy Button */}
        <Box mt={4}>
          <Button
            component={NavLink}
            to={`/buyMedicine/${data?.data?._id}`}
            variant="contained"
            fullWidth
            sx={{
              my:2,
              backgroundColor: 'green',
              borderRadius: '4px',
              boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: 'orange',
                boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.3)',
              }
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default MedicineDetails;
