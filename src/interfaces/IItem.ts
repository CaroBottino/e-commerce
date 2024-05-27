export interface IItem {
  id?: string;
  name: string;
  img: string;
  desc: string;
  price: number;
  discount?: number;
  stock: number;
  rating?: number;
  tags: string[];
  categories: string[];
  seller_id: string;
}
