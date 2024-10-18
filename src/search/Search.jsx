import { useState } from 'react';
import { IconButton, TextField, InputAdornment, Button, Grid, Typography, Paper, Box } from '@mui/material';
import { FaPlusSquare, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useSearchMedicineQuery } from '../redux/medicine/medicinesApi';
import Loader from '../components/Loader';
import { NavLink, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.theme.darkMode);
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);

  const { data, error, isLoading } = useSearchMedicineQuery(searchTerm, {
    skip: !searchTerm,
  });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(query);
  };

  const highlightMatch = (text, query) => {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="color: #ef4444; font-weight: bold;">$1</span>');
  };

  return (
    <Box py={4} px={2}>
      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Search by Name / Generic / Company"
          value={query}
          onChange={handleInputChange}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Box>

      {isLoading && <Loader />}
      {error && <Typography color="error">Error fetching data</Typography>}

      <Box>
        {searchTerm && data?.data.length === 0 && (
          <Box textAlign="center" my={4}>
            <Typography variant="h6" color="error">
              No medicine found. Provide a valid medicine name.
            </Typography>
            <Button
              onClick={() => navigate(`/suggestMed`)}
              variant="outlined"
              startIcon={<FaPlusSquare />}
              sx={{
                color: "#22C55E",
                borderColor: "#22C55E",
                mt: 2,
                "&:hover": {
                  backgroundColor: "#059669",
                  color: "#fff",
                },
              }}
            >
              Suggest Medicine
            </Button>
          </Box>
        )}

        {data?.data.length !== 0 && data && (
          <Typography variant="h5" align="center" color="primary" my={4}>
            Search Results
          </Typography>
        )}

        <Grid container spacing={2}>
          {data?.data.map((medicine, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={4} sx={{ p: 3, borderRadius: '8px', backgroundColor: darkMode ? '#1f2937' : '#fff' }}>
                <Typography variant="h6" dangerouslySetInnerHTML={{ __html: highlightMatch(`${index + 1}. ${medicine?.medicine_name}`, query) }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Generic: <span dangerouslySetInnerHTML={{ __html: highlightMatch(medicine?.generic_name, query) }} />
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Company: <span dangerouslySetInnerHTML={{ __html: highlightMatch(medicine?.company_name, query) }} />
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/medicine/${medicine._id}`)}
                    sx={{
                      color: "#6366F1",
                      borderColor: "#6366F1",
                      "&:hover": {
                        backgroundColor: "#6366F1",
                        color: "#fff",
                      },
                    }}
                    fullWidth
                    size="small"
                  >
                    Details
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/buyMedicine/${medicine._id}`)}
                    sx={{
                      color: "#22C55E",
                      borderColor: "#22C55E",
                      "&:hover": {
                        backgroundColor: "#22C55E",
                        color: "#fff",
                      },
                    }}
                    fullWidth
                    size="small"
                    ml={2}
                  >
                    Purchase Now
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {data?.data.length !== 0 && data && (
          <Typography variant="h6" align="center" color="textSecondary" mt={6}>
            X------------ End of Search Results ------------X
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Search;
