import { ReactNode, createContext, useState } from "react";
import { IItem } from "../interfaces/IItem";
import itemsService from "../services/items.service";

export type ItemsContextProviderProps = {
  loading: boolean;
  setLoading: (state: boolean) => void;
  items: IItem[];
  item?: IItem;
  setItem: (item: IItem | undefined) => void;
  getAllItems: () => void;
  getItemsByType: (category: string) => void;
  getItemInfo: (id: string) => void;
  criteria?: string;
  setCriteria: (search: string) => void;
  searchItems: () => void;
  showSearchResult: boolean;
  setShowSearchResult: (show: boolean) => void;
  createItem: (item: IItem) => Promise<IItem | undefined>;
};

export const ItemsContext = createContext<ItemsContextProviderProps>({
  loading: true,
  setLoading: () => {},
  items: [],
  item: undefined,
  setItem: () => {},
  getAllItems: () => {},
  getItemsByType: () => {},
  getItemInfo: () => {},
  criteria: undefined,
  setCriteria: () => {},
  searchItems: () => {},
  showSearchResult: false,
  setShowSearchResult: () => {},
  createItem: () =>
    new Promise((resolve) => {
      resolve(undefined);
    }),
});

interface IItemsProviderProps {
  children: ReactNode;
}

const ItemsProvider = ({ children }: IItemsProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<IItem[]>([]);
  const [item, setItem] = useState<IItem>();
  const [criteria, setCriteria] = useState<string>();
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);

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
    setLoading(true);
    itemsService
      .getItemById(id)
      .then((item) => {
        typeof item !== "string" ? setItem(item) : setItem(undefined);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting item info: ", error);
      });
  };

  const searchItems = () => {
    setLoading(true);

    itemsService
      .getItems()
      .then((items) => {
        if (criteria) {
          const filteredItems = items.filter((item: IItem) => {
            return item.name.toUpperCase().search(criteria.toUpperCase()) >= 0 && item;
          });

          filteredItems && setItems(filteredItems);
          setShowSearchResult(true);
        } else {
          setItems(items);
          setShowSearchResult(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting items: ", error);
      });
  };

  const createItem = async (item: IItem) => {
    const newItem = await itemsService.createItem(item);
    return newItem ?? undefined;
  };

  return (
    <ItemsContext.Provider
      value={{
        loading,
        setLoading,
        items,
        item,
        setItem,
        getAllItems,
        getItemsByType,
        getItemInfo,
        criteria,
        setCriteria,
        searchItems,
        showSearchResult,
        setShowSearchResult,
        createItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
