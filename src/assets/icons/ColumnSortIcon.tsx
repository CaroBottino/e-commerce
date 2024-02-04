import { SortDirection } from "../../enums/sorting.enum";

const ENABLED_COLOR = "#7996C4";
const DISABLED_COLOR = "#7996C420";

export interface IColumnSortIcon {
  height?: number;
  width?: number;
  sortDirection?: SortDirection;
}

export const ColumnSortIcon = ({
  width = 8,
  height = 13,
  sortDirection = SortDirection.NO_SORT,
}: IColumnSortIcon) => (
  <svg
    fill="none"
    height={height}
    width={width}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12.3638L0.535899 8.54559L7.4641 8.54559L4 12.3638Z"
      fill={sortDirection === SortDirection.ASC_SORT ? DISABLED_COLOR : ENABLED_COLOR}
    />
    <path
      d="M4 0L7.4641 3.81818L0.535898 3.81818L4 0Z"
      fill={sortDirection === SortDirection.DESC_SORT ? DISABLED_COLOR : ENABLED_COLOR}
    />
  </svg>
);
