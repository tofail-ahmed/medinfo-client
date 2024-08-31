import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAllUserQuery } from '../redux/user/usersApi';
import Loader from '../components/loader';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

export default function Alluser() {
  const { data, isLoading } = useAllUserQuery("");
  const rows = data && data.data;
  const darkMode=useSelector(state=>state.theme.darkMode)

  const textColor =darkMode ? '#fff' : '#000';

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="lg:w-[1200px] p-4 ">
      <TableContainer component={Paper} sx={{ width: '80%', mx: 'auto', backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Table>
          <TableHead sx={{  borderBottom: '2px solid #ddd' }}>
            <TableRow>
              <TableCell align="left" sx={{ fontSize: '16px', fontWeight: 'bold', border: '1px solid #ddd', color: textColor }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ fontSize: '16px', fontWeight: 'bold', border: '1px solid #ddd', color: textColor }}>
                Email
              </TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: 'bold', border: '1px solid #ddd', color: textColor }}>
                Role
              </TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: 'bold', border: '1px solid #ddd', color: textColor }}>
                Action
              </TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: 'bold', border: '1px solid #ddd', color: textColor }}>
                Change Role
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ fontSize: '15px', border: '1px solid #ddd', color: textColor }} align="left">{row.name}</TableCell>
                <TableCell sx={{ fontSize: '15px', border: '1px solid #ddd', color: textColor }} align="left">{row.email}</TableCell>
                <TableCell sx={{ fontSize: '15px', border: '1px solid #ddd', color: textColor }} align="right">{row.role}</TableCell>
                <TableCell sx={{ fontSize: '15px', border: '1px solid #ddd', color: textColor }} align="right">Delete User</TableCell>
                <TableCell sx={{ fontSize: '15px', border: '1px solid #ddd', color: textColor }} align="right">Make Admin/User</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
