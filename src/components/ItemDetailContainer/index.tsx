import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IItem>();

  const getItemInfo = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/items`).then(async (response) => {
        const items = await response.json();

        if (items && id) {
          const found = items.find((item: IItem) => item.id === id);
          found && setItem(found);
        }
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
