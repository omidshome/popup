import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CallHistory() {
  const rows = [
    { call: 91234567, date: new Date() },
    { call: 91234567, date: new Date() },
    { call: 91234567, date: new Date() },
    { call: 91234567, date: new Date() },
  ];

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fa-IR").format(date);
  };

  return (
    <div>
      <h2>تاریخچه تماس ها</h2>
      <hr />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell
                align="right"
                style={{
                  fontFamily: "IRANSansWeb",
                  fontSize: "16px",
                  background: "black",
                  color: "white",
                }}
              >
                شماره تماس
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontFamily: "IRANSansWeb",
                  fontSize: "16px",
                  background: "black",
                  color: "white",
                }}
              >
                زمان تماس
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.call}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="right">
                  {row.call}
                </TableCell>

                <TableCell align="right">{formatDate(row.date)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
