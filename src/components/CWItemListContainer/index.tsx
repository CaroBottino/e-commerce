import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import CWItemCard from "../CWItemCard";
import CFItemsListSkeleton from "../CWSkeletons/CWItemsListSkeleton";
import { IItem } from "../../interfaces/IItem";
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
      {showSearchResult ? (
        <Grid container>
          <Grid container item xs={items.length === 0 ? 12 : 3} paddingTop={10}>
            <Grid item xs={12}>
              <SearchTitle marginBottom={2} marginRight={2}>
                <strong>Your search results for:</strong> {criteria}
              </SearchTitle>
              <SearchTitle>{items.length} results</SearchTitle>
            </Grid>
          </Grid>
          <Grid container item xs={9} paddingTop={10}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 16 }}>
              {items.map((itemToShow: IItem, index: number) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <CWItemCard item={itemToShow} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 16 }}
          paddingTop={10}
          maxWidth={"80vw"}
        >
          {items.map((itemToShow: IItem, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CWItemCard item={itemToShow} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default CWItemListContainer;
