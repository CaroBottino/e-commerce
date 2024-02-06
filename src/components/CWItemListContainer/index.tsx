import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import CWItemCard from "../CWItemCard";
import { IItem } from "../../interfaces/IItem";
import "@/assets/css/ItemListContainer.css";
import itemsService from "../../services/items.service";

const CWItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState<IItem[]>([]);

  const getItemsByType = async () => {
    try {
      const items = await itemsService.getItems();
      if (items) {
        if (category) {
          const filteredItems = items.filter((item: IItem) => {
            return item.categories.includes(category) && item;
          });

          filteredItems && setItems(filteredItems);
        } else {
          setItems(items);
        }
      }
    } catch (error) {
      console.log("Error getting items: ", error);
    }
  };

  useEffect(() => {
    getItemsByType();
  }, [category]);

  return (
    <>
      <Grid
        className="list-items-grid"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 16 }}
        paddingTop={10}
      >
        {items.map((itemToShow: IItem, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CWItemCard item={itemToShow} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CWItemListContainer;
