import { ReactNode, createContext, useState } from "react";
import { IItem } from "../interfaces/IItem";
import itemsService from "../services/items.service";

type ItemsContextProviderProps = {
  loading: boolean;
  setLoading: (state: boolean) => void;
  items: IItem[];
  item?: IItem;
  getAllItems: () => void;
  getItemsByType: (category: string) => void;
  getItemInfo: (id: string) => void;
};

export const ItemsContext = createContext<ItemsContextProviderProps>({
  loading: true,
  setLoading: () => {},
  items: [],
  item: undefined,
  getAllItems: () => {},
  getItemsByType: () => {},
  getItemInfo: () => {},
});

interface IItemsProviderProps {
  children: ReactNode;
}

const ItemsProvider = ({ children }: IItemsProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<IItem[]>([]);
  const [item, setItem] = useState<IItem>();

  const getAllItems = () => {
    itemsService.getItems().then((response) => {
      setItems(response);
      setLoading(false);
    });
  };

  const getItemsByType = (category: string) => {
    itemsService
      .getItems()
      .then((items) => {
        if (category) {
          const filteredItems = items.filter((item: IItem) => {
            return item.categories.includes(category) && item;
          });

          filteredItems && setItems(filteredItems);
        } else {
          setItems(items);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting items: ", error);
      });
  };

  const getItemInfo = (id: string) => {
    console.log("caro - id 2: ", id);
    itemsService
      .getItemById(id)
      .then((item) => {
        setItem(item);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting item info: ", error);
      });
  };

  return (
    <ItemsContext.Provider
      value={{ loading, setLoading, items, item, getAllItems, getItemsByType, getItemInfo }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
