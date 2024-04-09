import { useContext } from "react";
import { ItemsContext } from "../providers/Items.provider";

export const useItemsContext = () => useContext(ItemsContext);
