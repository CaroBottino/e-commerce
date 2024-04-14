import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CWItemCard from "../CWItemCard";
import CFItemsListSkeleton from "../CWSkeletons/CWItemsListSkeleton";
import { IItem } from "../../interfaces/IItem";
import "@/assets/css/PageContentContainer.css";
import { SearchTitle } from "./CWItemListContainer.styled";
import { useItemsContext } from "../../hooks/useItemsContext";

const CWItemListContainer = () => {
  const { category } = useParams();
  const {
    loading,
    items,
    getItemsByType,
    getAllItems,
    criteria,
    setCriteria,
    showSearchResult,
    setShowSearchResult,
  } = useItemsContext();

  useEffect(() => {
    if (category) {
      setCriteria("");
      setShowSearchResult(false);
      getItemsByType(category);
    } else if (!criteria) {
      getAllItems();
    }
  }, [category]);

  return loading ? (
    <CFItemsListSkeleton />
  ) : (
    <Grid container>
      {showSearchResult && (
        <Grid container item paddingTop={10} justifyContent={"center"}>
          <Grid item xs={6} minWidth={300}>
            <Alert
              icon={<SearchIcon fontSize="inherit" />}
              severity="success"
              sx={{ alignItems: "center" }}
            >
              <SearchTitle>{criteria}</SearchTitle>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Typography>{items.length} results</Typography>
          </Grid>
        </Grid>
      )}
      <Grid
        className="page-content-container"
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
    </Grid>
  );
};

export default CWItemListContainer;
