import { SortDirection } from "../../enums/sorting.enum";

export interface ICWReportsTableProps<T> {
  data: T[];
  columns: ICWReportsTableColumn<T>[];
}

export interface ICWReportsTableColumn<T> {
  key: string;
  title: string;
  sortable?: boolean;
  render?: (column: ICWReportsTableColumn<T>, item: T) => void;
}

export interface ICWReportsTableHeadCell {
  title: string;
  sortable?: boolean;
  sort?: SortDirection;
  onSort?: () => void;
}
