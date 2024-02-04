import { IconButton, TableCell } from "@mui/material";
import { IReportsTableHeadCell } from "./ReportsTable.interfaces";
import { ColumnSortIcon } from "../../assets/icons/ColumnSortIcon";

const ReportsTableHeadCell = ({ title, sortable, sort, onSort }: IReportsTableHeadCell) => {
  return (
    <TableCell align="center">
      {title}
      {sortable && (
        <IconButton size="small" sx={{ marginLeft: 1 }} onClick={onSort}>
          <ColumnSortIcon sortDirection={sort} />
        </IconButton>
      )}
    </TableCell>
  );
};

export default ReportsTableHeadCell;
