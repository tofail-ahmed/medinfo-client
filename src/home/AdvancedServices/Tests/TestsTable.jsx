import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./TestTable.css"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { styled } from "@mui/material/styles";

// const HoverEffectButton = styled(Button)(({ theme }) => ({
//   position: "relative",
//   overflow: "hidden",
//   color: theme.palette.primary.main, // Default text color
//   backgroundColor: "transparent",
//   border: `2px solid ${theme.palette.primary.main}`,
//   transition: "color 0.4s ease",

//   "&::before": {
//     content: '""',
//     position: "absolute",
//     width: "100%",
//     height: "0%",
//     bottom: "0",
//     left: "0",
//     backgroundColor: theme.palette.primary.main, // Background color on hover
//     transition: "height 0.4s ease",
//     zIndex: 0,
//   },

//   "&:hover": {
//     color: theme.palette.common.white, // Change text color on hover
//   },

//   "&:hover::before": {
//     height: "100%", // Background fills from bottom to top
//   },

//   "& .MuiButton-label": {
//     position: "relative",
//     zIndex: 1, // Ensures text stays above the background
//   },
// }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#34D399",
    color: theme.palette.common.white,
    fontWeight: "bold",
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    verticalAlign: "top",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    testType: "COVID-19 & FLU COMBINATION",

    description: (
      <>
        <Typography variant="subtitle2" fontWeight="bold" sx={{
          paddingTop:"10px",
          paddingBottom:"10px",
          color:"#292524",
          fontSize:"14px",
          fontWeight:900,
         
        }} >
          Rapid Test
        </Typography>
        <Typography variant="body2" color="black">
          Antigen on-site testing that quickly detects COVID-19 and/or influenza
          A/B with a single swab sample.
        </Typography>
        <Typography
  variant="body2"
  sx={{
    textDecoration: "underline",
       marginTop:"20px"
  }}
  className="btn"
>
  <Link to={"/tests-schedule"} className="button-text">Schedule now</Link>
</Typography>
      </>
    ),
    cost: (
      <>
        <Typography variant="body2" fontWeight="bold">
          Uninsured patients and Veterans:
        </Typography>
        <Typography variant="body2">
          If you meet federal eligibility criteria, you may qualify for no-cost
          testing*
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Insured patients:
        </Typography>
        <Typography variant="body2">
          Insurance coverage varies by provider. Out-of-pocket costs may apply.
          Up to <b>$24.99</b>.
        </Typography>
      </>
    ),
    resultTime: (
      <>
        <Typography variant="body2" fontWeight="bold">
          30 minutes
        </Typography>
        <Typography variant="body2">Processed on-site</Typography>
      </>
    ),
    age: (
      <>
        <Typography variant="body2" fontWeight="bold">
          3+
        </Typography>
      </>
    ),
  },
  {
    testType: "COVID-19 & FLU COMBINATION",
    description: (
      <>
        <Typography variant="subtitle2" fontWeight="bold" fontSize={"20px"} sx={{
          paddingBottom:"20px",
          paddingTop:"20px",
          fontWeight:"600",
          color:"#44403C"
        }}>
       At-home Rapid Antigen Test
        </Typography>
        <Typography variant="body2">
          Antigen on-site testing that quickly detects COVID-19 and/or influenza
          A/B with a single swab sample.
        </Typography>
        <Typography
  variant="body2"
  sx={{
    textDecoration: "underline",
       marginTop:"20px"
  }}
  className="btn"
>
  <Link to="/tests-schedule" className="button-text">Schedule now</Link>
</Typography>

      </>
    ),
    cost: (
      <>
        <Typography variant="body2" fontWeight="bold">
          Uninsured patients and Veterans:
        </Typography>
        <Typography variant="body2">
          If you meet federal eligibility criteria, you may qualify for no-cost
          testing*
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Insured patients:
        </Typography>
        <Typography variant="body2">
          Insurance coverage varies by provider. Out-of-pocket costs may apply.
          Up to <b>$24.99</b>.
        </Typography>
      </>
    ),
    resultTime: (
      <>
        <Typography variant="body2" fontWeight="bold">
          30 minutes
        </Typography>
        <Typography variant="body2">Processed on-site</Typography>
      </>
    ),
    age: (
      <>
        <Typography variant="body2" fontWeight="bold">
          3+
        </Typography>
      </>
    ),
  },
  {
    testType: "COVID-19",
    description: (
      <>
        <Typography variant="subtitle2" fontWeight="bold" sx={{
          paddingTop:"10px",
          paddingBottom:"10px",
          color:"#292524",
          fontSize:"14px",
          fontWeight:900,
         
        }}>
          Rapid Test
        </Typography>
        <Typography variant="body2">
          Antigen on-site testing that quickly detects COVID-19 and/or influenza
          A/B with a single swab sample.
        </Typography>
        <Typography
  variant="body2"
  sx={{
    textDecoration: "underline",
       marginTop:"20px"
  }}
  className="btn"
>
  <Link to="/tests-schedule" className="button-text">Schedule now</Link>
</Typography>
      </>
    ),
    cost: (
      <>
        <Typography variant="body2" fontWeight="bold">
          Uninsured patients and Veterans:
        </Typography>
        <Typography variant="body2">
          If you meet federal eligibility criteria, you may qualify for no-cost
          testing*
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Insured patients:
        </Typography>
        <Typography variant="body2">
          Insurance coverage varies by provider. Out-of-pocket costs may apply.
          Up to <b>$24.99</b>.
        </Typography>
      </>
    ),
    resultTime: (
      <>
        <Typography variant="body2" fontWeight="bold">
          30 minutes
        </Typography>
        <Typography variant="body2">Processed on-site</Typography>
      </>
    ),
    age: (
      <>
        <Typography variant="body2" fontWeight="bold">
          3+
        </Typography>
      </>
    ),
  },
  {
    testType: "COVID-25",
    description: (
      <>
        <Typography variant="subtitle2"  fontSize={"20px"} sx={{
          paddingBottom:"20px",
          paddingTop:"20px",
          fontWeight:"600",
          color:"#44403C"
        }}>
        Rapid Molecular Test (ID NOW™)

        </Typography>
        <Typography variant="body2">
          Antigen on-site testing that quickly detects COVID-19 and/or influenza
          A/B with a single swab sample.
        </Typography>
        <Typography
  variant="body2"
  
  sx={{
    textDecoration: "underline",
       marginTop:"20px"
 
  }}
  className="btn "
>
  <Link to="/tests-schedule" className="button-text">Schedule now</Link>
</Typography>
      </>
    ),
    cost: (
      <>
        <Typography variant="body2" fontWeight="bold"  sx={{
          paddingTop:"10px",
          paddingBottom:"10px",
          color:"#292524",
          fontSize:"14px",
          fontWeight:900,
         
        }}>
          Uninsured patients and Veterans:
        </Typography>
        <Typography variant="body2">
          If you meet federal eligibility criteria, you may qualify for no-cost
          testing*
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Insured patients:
        </Typography>
        <Typography variant="body2">
          Insurance coverage varies by provider. Out-of-pocket costs may apply.
          Up to <b>$24.99</b>.
        </Typography>
      </>
    ),
    resultTime: (
      <>
        <Typography variant="body2" fontWeight="bold">
          30 minutes
        </Typography>
        <Typography variant="body2">Processed on-site</Typography>
      </>
    ),
    age: (
      <>
        <Typography variant="body2" fontWeight="bold">
          3+
        </Typography>
      </>
    ),
  },
];

export default function TestsTable() {
  return (
    <div className="w-[90%] mx-auto border-[1px] border-slate-500 rounded-md ">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Test Type</StyledTableCell>
              <StyledTableCell>Cost</StyledTableCell>
              <StyledTableCell>Result Time</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {/* {row.testType}
                   */}
                  <Typography
                    
                    sx={{
                      color: "#991B1B",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      // backgroundColor: "#f0f0f0",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      borderRadius: "4px",
                      fontSize:"17px",
                      fontWeight:600
                    }}
                  >
                    {row.testType}
                  </Typography>

                  <div className="bold text-black ">{row.description}</div>
                </StyledTableCell>
                <StyledTableCell>{row.cost}</StyledTableCell>
                <StyledTableCell>{row.resultTime}</StyledTableCell>
                <StyledTableCell>{row.age}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
