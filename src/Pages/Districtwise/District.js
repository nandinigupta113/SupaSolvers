import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../../Components/Navbar/Navbar';
import './District.css';
import axios from 'axios';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
function createData(serialno, name, phone, aadhar, bedId) {
    return { serialno, name, phone, aadhar, bedId};
  }
const District = () => {
  const[dash_list, setDash_list] = useState("");



 useEffect(() => {

  axios.get("https://sih-23.herokuapp.com/all/datadistrict")
  .then((res) => {
    console.log(res.data);
    setDash_list(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
})


  return (
    <div className='General'>
        <Navbar/>
        <div className='district_head'>
            <span>District Wise Bed Availability Status</span>
        </div>
        <div className='dist_h'>
        <div className='outtable '>
        <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} className='dasshtab' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no.</TableCell>
            <TableCell align="right">District</TableCell>
            <TableCell align="right">Beds Available</TableCell>
            <TableCell align="right">No. of Hospitals</TableCell>
            {/* <TableCell align="right">Bed ID</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>

 <TableRow
 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
 <TableCell component="th" scope="row">1
 </TableCell>
 <TableCell align="right">Jaipur</TableCell>
 <TableCell align="right">{dash_list.bedsj}</TableCell>
 <TableCell align="right">{dash_list.numhj}</TableCell>
</TableRow>


        </TableBody>

        <TableBody>

<TableRow
sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
<TableCell component="th" scope="row">2
</TableCell>
<TableCell align="right">Kota</TableCell>
<TableCell align="right">{dash_list.bedsk}</TableCell>
<TableCell align="right">{dash_list.numhk}</TableCell>
</TableRow>


       </TableBody>


       <TableBody>

<TableRow
sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
<TableCell component="th" scope="row">3
</TableCell>
<TableCell align="right">Ajmer</TableCell>
<TableCell align="right">{dash_list.bedsa}</TableCell>
<TableCell align="right">{dash_list.numha}</TableCell>
</TableRow>


       </TableBody>



      </Table>
    </TableContainer>
    </div>
    </div>
</div>
  )
}

export default District