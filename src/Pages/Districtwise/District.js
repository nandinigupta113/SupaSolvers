import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../../Components/Navbar/Navbar";
import "./District.css";
import axios from "axios";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
function createData(serialno, name, phone, aadhar, bedId) {
  return { serialno, name, phone, aadhar, bedId };
}
const District = () => {
  const [dash_list, setDash_list] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}all/data-district`)
      .then((res) => {
        // console.log(res.data[0]._id);
        setDash_list(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="General">
      <Navbar />
      <div className="district_head">
        <span>District Wise Bed Availability Status</span>
      </div>
      <div className="dist_h">
        <div className="outtablecmp ">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              className="dasshtab"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>S.no.</TableCell>
                  <TableCell align="right" >District</TableCell>
                  <TableCell align="right">Beds Available</TableCell>
                  <TableCell align="right">No. of Hospitals</TableCell>
                  {/* <TableCell align="right">Bed ID</TableCell> */}
                </TableRow>
              </TableHead>
              {!dash_list && <TableRow>
                <TableCell align="right" >
                  </TableCell>
                  <TableCell align="right" >
              Loading..
                  </TableCell>
                  <TableCell align="right" >
              Loading..
                  </TableCell>
                  <TableCell align="right" >
              Loading..
                  </TableCell>
                  </TableRow>
                  }
              {dash_list && dash_list.map((val, i) => (
                <TableBody key={i}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i+1}
                  </TableCell>
                  <TableCell align="right">{val._id}</TableCell>
                  <TableCell align="right">{val.bedCount}</TableCell>
                  <TableCell align="right">{val.hospitalsCount}</TableCell>
                </TableRow>
              </TableBody>

              ))}
              

            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default District;
