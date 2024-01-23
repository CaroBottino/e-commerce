import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { get } from "lodash";
import { IReportsTableColumn, IReportsTableProps } from "./ReportsTable.interfaces";

const ReportsTable = <T,>({ data, columns }: IReportsTableProps<T>) => {
  const getCellValue = (item: T, column: IReportsTableColumn<T>) => get(item, column.key);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center">{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: T, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell align="center">
                  {col.render ? col.render(col, row) : getCellValue(row, col)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReportsTable;
