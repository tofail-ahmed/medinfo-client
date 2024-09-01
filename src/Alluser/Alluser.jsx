import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAllUserQuery, useDeleteUserMutation } from "../redux/user/usersApi";
import Loader from "../components/loader";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function Alluser() {
  const { data, isLoading } = useAllUserQuery("");
  const [
    deleteUser,
    { data: deleteData, isLoading: deleteLoading, error: deleteError },
  ] = useDeleteUserMutation();
  useEffect(() => {
    if (deleteLoading) {
      alert("User deleting in process, please wait...");
    }
    if (deleteData && deleteData.success) {
      alert("User Deleted successfully");
    }
    if (deleteError && deleteError.status === 409) {
      alert(deleteError.data.message);
    }
  }, [deleteData, deleteLoading, deleteError]);
  const rows = data && data.data;
  const darkMode = useSelector((state) => state.theme.darkMode);

  const textColor = darkMode ? "#fff" : "#000";

  if (isLoading) {
    return <Loader />;
  }
  const handleDelete = (id) => {
    deleteUser(id);
   
  };
  // console.log(deleteData)
  return (
    <div className="lg:w-[1200px] p-4 ">
      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          mx: "auto",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead sx={{ borderBottom: "2px solid #ddd" }}>
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
                Name
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
                Email
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
                Role
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
                Change Role
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="left"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="left"
                >
                  {row.email}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "15px",
                    border: "1px solid #ddd",
                    color: textColor,
                  }}
                  align="right"
                >
                  {row.role}
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
                     onClick={() => handleDelete(row._id)} 
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
                  Make Admin/User
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
