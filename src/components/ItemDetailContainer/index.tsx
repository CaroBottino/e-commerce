import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IItem>();

  const getItemInfo = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`).then(async (response) => {
        const item = await response.json();

        item && setItem(item);
      });
    } catch (error) {
      console.log("Error getting item info: ", error);
    }
  };

  useEffect(() => {
    getItemInfo();
  }, [id]);

  return <div>ItemDetailContainer - item: {JSON.stringify(item)}</div>;
};

export default ItemDetailContainer;
