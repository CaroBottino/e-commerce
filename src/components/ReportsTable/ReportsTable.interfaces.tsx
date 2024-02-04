import { SortDirection } from "../../enums/sorting.enum";

export interface IReportsTableProps<T> {
  data: T[];
  columns: IReportsTableColumn<T>[];
}

export interface IReportsTableColumn<T> {
  key: string;
  title: string;
  sortable?: boolean;
  render?: (column: IReportsTableColumn<T>, item: T) => void;
}

export interface IReportsTableHeadCell {
  title: string;
  sortable?: boolean;
  sort?: SortDirection;
  onSort?: () => void;
}
