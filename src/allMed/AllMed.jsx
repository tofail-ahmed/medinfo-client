import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow,TableBody } from '@mui/material';
 
import { FaUser, FaUserShield } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useAllMedicinesQuery } from '../redux/medicine/medicinesApi';
import Loader from '../components/loader';
import { useNavigate } from "react-router";
import { NavLink } from 'react-router-dom';

const AllMed = () => {
  const navigate = useNavigate();
  const handleDetails=(id)=>{
      navigate(`/medicine/${id}`)
  }
  const darkMode = useSelector((state) => state.theme.darkMode);

  const textColor = darkMode ? "#fff" : "#000";
  const { data: medData, isLoading: medLoading } = useAllMedicinesQuery("");
  console.log(medData?.data);
  const rows = medData?.data;
  if (medLoading) {
    return <Loader />;
  }
  const handleUpdate=(id)=>{
    navigate(`/dashboard/updateMed/${id}`)
  }
  return (
    <div className="lg:w-[1200px] w-full p-4 ">
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          mx: "auto",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead sx={{ borderBottom: "2px solid #ddd", width: "100%" }}>
            <TableRow>
              <TableCell
                align="left"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Medicine Name
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Company
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Generic
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Available Qty
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Sold Qty
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Action
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Update
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "1px solid #ddd",
                  color: textColor,
                }}
              >
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row._id}>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="left"
                >
                  {idx + 1}. {row.medicine_name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="left"
                >
                  {row.company_name ? row.company_name : row.brand_name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="left"
                >
                  {row.generic_name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor, // Adjust the text color based on the mode (if necessary)
                    // background: row.role === "admin" ? "#11d875" : "#11a5d8", // Conditionally set background color
                    fontWeight: row.role === "admin" ? "bold" : "300", // "bold" for admin, "semibold" (600) for user
                    textTransform: "uppercase", // Always uppercase
                  }}
                  align="right"
                >
                  <div className="flex justify-end items-center gap-[5px]">
                    <div> {row.available}</div>
                    {/* <div >
          {row.role === "admin" ? (
            <span className="text-2xl"><FaUserShield />
        
        </span> // Checkmark for admin
          ) : (
            <span className="text-xl"><FaUser />
        </span> // Cross mark for user
          )}
          </div> */}
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="right"
                >
                  {row.sold}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="right"
                >
                  <Button
                    //      onClick={() => handleDelete(row._id)}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "red",
                      borderColor: "red",
                      "&:hover": {
                        backgroundColor: "rgba(255, 0, 0, 0.1)",
                        borderColor: "darkred",
                      },
                    }}
                  >
                    Delete 🚱
                  </Button>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="right"
                >
                  <Button
                       onClick={() => handleUpdate(row._id)}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "green",
                      borderColor: "green",
                      "&:hover": {
                        backgroundColor: "lightgreen",
                        borderColor: "#387F39",
                      },
                    }}
                  >
             <NavLink>       Update</NavLink>
                  </Button>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="right"
                >
                  <Button
                    onClick={()=>handleDetails(row._id)}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#11a5d8",
                      borderColor: "lightblue",
                      "&:hover": {
                        backgroundColor: "lightblue",
                        borderColor: "#11a5d8",
                      },
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllMed