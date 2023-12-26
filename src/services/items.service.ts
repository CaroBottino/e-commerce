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
};

export default itemsService;
