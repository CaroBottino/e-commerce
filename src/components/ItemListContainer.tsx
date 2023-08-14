import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import { IItem } from "../interfaces/IItem";
import "@/assets/css/ItemListContainer.css";

type ItemListContainerProps = {
  items: IItem[];
};

const ItemListContainer = ({ items }: ItemListContainerProps) => {
  return (
    <>
      <Grid
        className="list-items-grid"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 16 }}
      >
        {items.map((itemToShow: IItem, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ItemCard item={itemToShow} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ItemListContainer;
