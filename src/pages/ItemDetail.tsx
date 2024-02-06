import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/CWItemDetailContainer";
import "@/assets/css/ItemDetailPage.css";
import { useEffect, useState } from "react";
import { IItem } from "../interfaces/IItem";
import itemsService from "../services/items.service";

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IItem>();

  const getItemInfo = async () => {
    try {
      if (id) {
        const item = await itemsService.getItemById(id);
        item && setItem(item);
      }
    } catch (error) {
      console.log("Error getting item info: ", error);
    }
  };

  useEffect(() => {
    getItemInfo();
  }, [id]);

  return item ? <ItemDetailContainer item={item} /> : <div>Item not found</div>;
};

export default ItemDetailPage;
