import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { ItemDescription, ItemImg, ItemSubtitle } from "./CWItemDetail.styled";
import CWItemDetailSkeleton from "../CWSkeletons/CWItemDetailSkeleton";
import ItemNotFound from "./components/ItemNotFound.component";
import CWCardContainer from "../CWCardContainer";
import { useItemsContext } from "../../hooks/useItemsContext";
import ItemResume from "./components/ItemResume.component";

const CWItemDetailContainer = () => {
  const { loading, getItemInfo, item, setItem } = useItemsContext();
  const { id } = useParams();

  useEffect(() => {
    id && getItemInfo(id);

    return () => {
      setItem(undefined);
    };
  }, [id]);

  return (
    <Grid container marginTop={"80px"} justifyContent={"center"}>
      {loading ? (
        <CWItemDetailSkeleton />
      ) : !loading && item === undefined ? (
        <ItemNotFound />
      ) : (
        !loading &&
        item && (
          <CWCardContainer>
            <Grid container textAlign={"center"}>
              <Grid item xs={12} md={8}>
                <ItemImg component={item.img ? "img" : "div"} src={item.img} alt={item.desc} />
              </Grid>
              <Grid item xs={12} md={4}>
                <ItemResume />
              </Grid>
              <Grid item xs={12} mt={2}>
                <Grid item xs={12} textAlign={"left"}>
                  <ItemSubtitle>Description</ItemSubtitle>
                  <ItemDescription>{item.desc}</ItemDescription>
                </Grid>
              </Grid>
            </Grid>
          </CWCardContainer>
        )
      )}
    </Grid>
  );
};

export default CWItemDetailContainer;
