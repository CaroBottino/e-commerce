export interface IReportsTableProps<T> {
  data: T[];
  columns: IReportsTableColumn<T>[];
}

export interface IReportsTableColumn<T> {
  key: string;
  title: string;
  render?: (column: IReportsTableColumn<T>, item: T) => void;
}
