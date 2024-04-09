import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import CWItemCard from "../CWItemCard";
import CFItemsListSkeleton from "../CWSkeletons/CWItemsListSkeleton";
import { IItem } from "../../interfaces/IItem";
import "@/assets/css/ItemListContainer.css";
import { useItemsContext } from "../../hooks/useItemsContext";

const CWItemListContainer = () => {
  const { category } = useParams();
  const { loading, items, getItemsByType, getAllItems } = useItemsContext();

  useEffect(() => {
    category ? getItemsByType(category) : getAllItems();
  }, [category]);

  return loading ? (
    <CFItemsListSkeleton />
  ) : (
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
  );
};

export default CWItemListContainer;
