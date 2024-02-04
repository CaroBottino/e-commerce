import { IItem } from "../interfaces/IItem";

const base_url = import.meta.env.VITE_API_URL;

const itemsService = {
  getItems(): Promise<IItem[]> {
    return fetch(`${base_url}/items`).then(async (response) => {
      return await response.json();
    });
  },
  getItemById(id: string): Promise<IItem> {
    return fetch(`${base_url}/items/${id}`).then(async (response) => {
      return await response.json();
    });
  },
  getItemsByUser(id: string): Promise<IItem[]> {
    return fetch(`${base_url}/items`).then(async (response) => {
      // all this because can't get items by user id from free mockapi plan
      const items = await response.json();

      if (items) {
        return items.filter((item: IItem) => item.seller_id === id) || [];
      }
    });
  },
};

export default itemsService;
