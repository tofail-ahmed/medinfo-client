import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useMedCategoryQuery } from "../redux/medicine/medicinesApi";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

const CategoryMed = () => {
      const navigate=useNavigate()


  const [text, setText] = useState({ field: "", value: "" }); // Initialize state to hold both field and value
// console.log(text)



  // Function to handle category selection
  const handleCategory = (field, value) => {
    setText({ field, value }); // Set both field and value in state
  };



   // Fetch data based on the selected field and value using Redux query
  const { data, error, isLoading } = useMedCategoryQuery({
      field: text.field,  // For example, 'type'
  value: text.value,  // For example, 'syrup'
//   [text.field]: text.value,  // Dynamically construct the object { type: 'syrup' }
 });


  if(data){
      // console.log(data)
  }
  if(isLoading){
      return <Loader></Loader>
  }
  if(error){
//   console.log(error)
  }



  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 p-4 mx-auto">
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("type", "Syrup")}
        >
          Syrup
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("type", "Tablet")}
        >
          Tablet
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("type", "Injection")}
        >
          Injection
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("type", "Shampoo")}
        >
          Shampoo
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("category", "Allergy")}
        >
          Allergy
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("category", "Fever")}
        >
          Fever
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("category", "Gastric")}
        >
          Gastric
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#6366F1",
            borderColor: "#6366F1",
            "&:hover": {
              backgroundColor: "#14919B",
              borderColor: "#6366F1",
              color: "#fff",
            },
          }}
          onClick={() => handleCategory("category", "Diarrhea")}
        >
          Diarrhea
        </Button>
      </div>

     <div>
       {/* Display the selected field and value */}
       <p className="text-center text-xl font-semibold flex justify-center items-center">
        {/* Selected Field:{" "}
        <span className="font-bold uppercase text-[#6366F1] mx-2">
          {text.field}
        </span> */}
        Selected Category:{" "}
        <span className="font-bold uppercase text-[#6366F1] mx-2">
          {text.value}
        </span>
      </p>
     </div>
     <div>
     <div className="mx-4">
      {/* {text && data?.length === 0 && (
          <Typography variant="h6" color="error" align="center">
            No medicine found. Provide valid medicine Name
          </Typography>
        )} */}

        {/* {
          data?.data.length!=0 && data&&(
            <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex justify-center items-center gap-2">
            Search Results
          </h1>
          )
        } */}
        <ul>
          {data ? (
           
            data.map((medicine, index) => (
              <div className="bg-slate-400/30 rounded-md my-2 p-4 " key={index}>
               <div className="flex lg:items-center items-start lg:justify-between justify-start lg:flex-row flex-col gap-2">
               <div className="">
               <span className="flex items-center text-2xl">
               {index+1}. <li
                  className=""
                  
                >{medicine.medicine_name}</li>
               </span>
              <span className="flex items-center gap-2">
                <h1>Generic: </h1>
              <li
                  className="text-sm"
                 
                >{medicine.generic_name}</li>
              </span>
                <span className="flex items-center gap-2">
                  <h1>Compnay: </h1>
                <p
                  className="text-sm"
                 
                >{medicine.company_name}</p>
                </span>
                <span className="flex items-center gap-2">
                  <h1>Type: </h1>
                <p
                  className="text-sm"
                 
                >{medicine.type}</p>
                </span>
                <span className="flex items-center gap-2">
                  <h1>Category: </h1>
                <p
                  className="text-sm"
                 
                >{medicine.category}</p>
                </span>
               </div>

                <div className="flex flex-col  gap-2 w-full lg:w-2/12 ">
             

      <Grid item xs={12} sm={6}>
       {/* Details button */}
        <Button
                     onClick={() => navigate(`/medicine/${medicine._id}`)} 
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      color: "#6366F1",
                      borderColor: "#6366F1",
                      "&:hover": {
                        backgroundColor: "#14919B",
                        borderColor: "#6366F1",
                        color:"#FFF"
                      },
                    }}
                  >
                    Deatils
                  </Button>
      </Grid>

      {/* Buy Now Button */}
      <Grid item xs={12} sm={6}>
      <Button
                     onClick={() => navigate(`/buyMedicine/${medicine._id}`)} 
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      color: "#22C55E",
                      borderColor: "#22C55E",
                      "&:hover": {
                        backgroundColor: "#059669",
                        borderColor: "#22C55E",
                        color:"#fff"
                      },
                    }}
                  >
                    Purchase Now
                  </Button>
      </Grid>
    {/* </Grid> */}
  
                </div>
               </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center">
              {/* <h1 className="text-2xl text-red-500 font-semibold text-center my-6 flex items-center gap-2">
                Search your Medicine by name, company, or group
              </h1> */}
            </div>
          )}
               <span className="flex justify-center">
      {
        data?.length!=0&& data&&(<h1 className="text-2xl text-red-500 font-semibold  my-6 flex items-center gap-2 ">
          X------------End of rtesult------------X
         </h1>)
      }
      </span>
        </ul>
      </div>
     </div>
    </div>
  );
};

export default CategoryMed;
