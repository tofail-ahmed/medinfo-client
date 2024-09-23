import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useMedCategoryQuery } from "../redux/medicine/medicinesApi";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

const CategoryMed = () => {
  const navigate = useNavigate();

  // State to hold both category and type
  const [filters, setFilters] = useState({ category: "", type: "" });

  // Function to handle both category and type selection
  const handleCategory = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  // Fetch data based on the selected category and/or type using Redux query
  const { data, isLoading } = useMedCategoryQuery({
    category: filters.category,
    type: filters.type,
  });

  if (isLoading) {
    return <Loader />;
  }

  // Button styles: adjust styles for selected type and category
  const getButtonStyle = (field, value) => {
    const isSelected = filters[field] === value;
    
    let backgroundColor, hoverColor;

    // Set different background colors and hover colors based on type or category
    if (field === "type") {
      backgroundColor = isSelected ? "#1A2E05" : "#84CC16"; // Orange for selected, light orange for unselected types
      hoverColor =isSelected?" #1A2E05":  "#3F6212" ;      // Darker orange for hover on selected
    } else if (field === "category") {
      backgroundColor = isSelected ? "#052E16" : "#4ADE80"; // Darker orange for selected, lighter for unselected categories
      hoverColor = isSelected?" #052E16": "#166534";      // Darker hover color for selected categories
    }

    return {
      color: isSelected ? "#fff" : "#6366F1",
      borderColor: "#6366F1",
      backgroundColor: backgroundColor,
      "&:hover": {
        backgroundColor: hoverColor,
        borderColor: "#6366F1",
        color: "#fff",
      },
    };
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 py- lg:p-0 p-2 mx-auto">
        {/* Type buttons */}
        <Button
          variant="outlined"
          sx={getButtonStyle("type", "Syrup")}
          onClick={() => handleCategory("type", "Syrup")}
          size="small"
        >
          Syrup
        </Button>
        <Button
          variant="outlined"
          sx={getButtonStyle("type", "Tablet")}
          onClick={() => handleCategory("type", "Tablet")}
        >
          Tablet
        </Button>
        <Button
          variant="outlined"
          sx={getButtonStyle("type", "Injection")}
          onClick={() => handleCategory("type", "Injection")}
        >
          Injection
        </Button>
        <Button
          variant="outlined"
          sx={getButtonStyle("type", "Shampoo")}
          onClick={() => handleCategory("type", "Shampoo")}
        >
          Shampoo
        </Button>

        {/* Category buttons */}
        <Button
          variant="outlined"
          sx={getButtonStyle("category", "Allergy")}
          onClick={() => handleCategory("category", "Allergy")}
        >
          Allergy
        </Button>
        <Button
          variant="outlined"
          sx={getButtonStyle("category", "Fever")}
          onClick={() => handleCategory("category", "Fever")}
        >
          Fever
        </Button>
        <Button
          variant="outlined"
          sx={getButtonStyle("category", "Gastric")}
          onClick={() => handleCategory("category", "Gastric")}
        >
          Gastric
        </Button>
        <Button
          variant="outlined"
          sx={getButtonStyle("category", "Diarrhea")}
          onClick={() => handleCategory("category", "Diarrhea")}
        >
          Diarrhea
        </Button>
      </div>

      {/* Display the search results */}
      <div className="lg:mx-0 mx-2">
        <ul>
          {data && data.length > 0 ? (
            data.map((medicine, index) => (
              <div className="bg-slate-400/30 rounded-md my-2 p-4" key={index}>
                <div className="flex lg:items-center items-start lg:justify-between justify-start lg:flex-row flex-col gap-2">
                  <div>
                    <span className="flex items-center text-2xl">
                      {index + 1}.{" "}
                      <li>{medicine.medicine_name}</li>
                    </span>
                    <span className="flex items-center gap-2">
                      <h1>Generic: </h1>
                      <li className="text-sm">{medicine.generic_name}</li>
                    </span>
                    <span className="flex items-center gap-2">
                      <h1>Company: </h1>
                      <p className="text-sm">{medicine.company_name}</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <h1>Type: </h1>
                      <p className="text-sm">{medicine.type}</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <h1>Category: </h1>
                      <p className="text-sm">{medicine.category}</p>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 w-full lg:w-2/12">
                    <Grid item xs={12} sm={6}>
                      <Button
                        onClick={() => navigate(`/medicine/${medicine._id}`)}
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={getButtonStyle("view", medicine._id)}
                      >
                        Details
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        onClick={() => navigate(`/buyMedicine/${medicine._id}`)}
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={getButtonStyle("purchase", medicine._id)}
                      >
                        Purchase Now
                      </Button>
                    </Grid>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No medicines found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMed;
