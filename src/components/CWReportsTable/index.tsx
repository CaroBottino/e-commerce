import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { cloneDeep, get } from "lodash";
import { ICWReportsTableColumn, ICWReportsTableProps } from "./CWReportsTable.interfaces";
import CWReportsTableHeadCell from "./CWReportsTableHeadCell.component";
import { SortDirection } from "../../enums/sorting.enum";
import { sortByProperty } from "../../utils/sortObjects";

const CWReportsTable = <T,>({ data, columns }: ICWReportsTableProps<T>) => {
  const [order, setOrder] = useState<SortDirection>(SortDirection.NO_SORT);
  const [orderBy, setOrderBy] = useState<string | undefined>();
  const [orderedData, setOrderedData] = useState<T[]>(cloneDeep(data));

  const getCellValue = (item: T, column: ICWReportsTableColumn<T>) => get(item, column.key);

  const onSortChange = (key: string) => {
    if (orderBy === key) {
      if (order === SortDirection.ASC_SORT) {
        setOrder(SortDirection.DESC_SORT);
        setOrderedData(sortByProperty(cloneDeep(data), key as keyof T, false));
      } else if (order === SortDirection.DESC_SORT) {
        setOrder(SortDirection.NO_SORT);
        setOrderedData(cloneDeep(data));
      } else {
        setOrder(SortDirection.ASC_SORT);
        setOrderedData(sortByProperty(orderedData, key as keyof T));
      }
    } else {
      setOrderBy(key);
      setOrder(SortDirection.ASC_SORT);
      setOrderedData(sortByProperty(orderedData, key as keyof T));
    }
  };

  useEffect(() => {
    setOrderedData(cloneDeep(data));
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <CWReportsTableHeadCell
                key={column.key}
                title={column.title}
                sortable={column.sortable}
                sort={orderBy === column.key ? order : SortDirection.NO_SORT}
                onSort={() => onSortChange(column.key)}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedData.length > 0 ? (
            orderedData.map((row: T, index) => (
              <TableRow key={index}>
                {columns.map((col, i) => (
                  <TableCell key={`${col}-${i}`} align="center">
                    {col.render ? col.render(col, row) : getCellValue(row, col)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={columns.length}>
                No data to show yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CWReportsTable;
