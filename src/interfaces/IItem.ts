export interface IItem {
  id?: string;
  name: string;
  img: string;
  desc: string;
  price: number;
  stock: number;
  tags: string[];
  categories: string[];
  seller_id: string;
}
