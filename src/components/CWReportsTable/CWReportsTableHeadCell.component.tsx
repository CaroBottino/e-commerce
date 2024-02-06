import { IconButton, TableCell } from "@mui/material";
import { ICWReportsTableHeadCell } from "./CWReportsTable.interfaces";
import { ColumnSortIcon } from "../../assets/icons/ColumnSortIcon";

const CWReportsTableHeadCell = ({ title, sortable, sort, onSort }: ICWReportsTableHeadCell) => {
  return (
    <TableCell align="center" sx={{ minWidth: "85px" }}>
      {title}
      {sortable && (
        <IconButton size="small" sx={{ marginLeft: 1 }} onClick={onSort}>
          <ColumnSortIcon sortDirection={sort} />
        </IconButton>
      )}
    </TableCell>
  );
};

export default CWReportsTableHeadCell;
