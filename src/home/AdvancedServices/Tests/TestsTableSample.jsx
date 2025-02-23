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
    description: "Rapid Test: Antigen on-site testing that quickly detects COVID-19 and/or influenza A/B with a single swab sample.",
    cost: "Uninsured patients and Veterans: If you meet federal eligibility criteria, you may qualify for no-cost testing*. Insured patients: Insurance coverage varies by provider. Out-of-pocket costs may apply. Up to $24.99.",
    resultTime: "30 minutes - Processed on-site",
    age: "3+",
  },
  {
    testType: "COVID-19 & FLU COMBINATION",
    description: "Rapid Test: Antigen on-site testing that quickly detects COVID-19 and/or influenza A/B with a single swab sample.",
    cost: "Uninsured patients and Veterans: If you meet federal eligibility criteria, you may qualify for no-cost testing*. Insured patients: Insurance coverage varies by provider. Out-of-pocket costs may apply. Up to $24.99.",
    resultTime: "30 minutes - Processed on-site",
    age: "3+",
  },
  {
    testType: "COVID-19",
    description: "Rapid Test: Antigen on-site testing that quickly detects COVID-19 and/or influenza A/B with a single swab sample.",
    cost: "Uninsured patients and Veterans: If you meet federal eligibility criteria, you may qualify for no-cost testing*. Insured patients: Insurance coverage varies by provider. Out-of-pocket costs may apply. Up to $24.99.",
    resultTime: "30 minutes - Processed on-site",
    age: "3+",
  },
  {
    testType: "COVID-25",
    description: "Rapid Molecular Test (ID NOW™): Antigen on-site testing that quickly detects COVID-19 and/or influenza A/B with a single swab sample.",
    cost: "Uninsured patients and Veterans: If you meet federal eligibility criteria, you may qualify for no-cost testing*. Insured patients: Insurance coverage varies by provider. Out-of-pocket costs may apply. Up to $24.99.",
    resultTime: "30 minutes - Processed on-site",
    age: "3+",
  },
];

// export default rows;


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
      <StyledTableCell>{row.testType}</StyledTableCell>
      <StyledTableCell>
        <Typography variant="subtitle2" fontWeight="bold">
          {row.description.split(":")[0]}
        </Typography>
        <Typography variant="body2">{row.description.split(":")[1]}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        {row.cost.split(". ").map((line, i) => (
          <Typography key={i} variant="body2">
            {line}.
          </Typography>
        ))}
      </StyledTableCell>
      <StyledTableCell>
        <Typography variant="body2" fontWeight="bold">
          {row.resultTime}
        </Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography variant="body2" fontWeight="bold">
          {row.age}
        </Typography>
      </StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}
