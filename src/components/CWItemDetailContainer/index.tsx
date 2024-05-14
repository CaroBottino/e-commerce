import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, ButtonGroup, Grid, Typography } from "@mui/material";
import {
  ActionButton,
  ItemDescription,
  ItemImg,
  ItemPrice,
  ItemTitle,
  QuantityButton,
} from "./CWItemDetail.styled";
import CWItemDetailSkeleton from "../CWSkeletons/CWItemDetailSkeleton";
import { useUserContext } from "../../hooks/useUserContext";
import { useItemsContext } from "../../hooks/useItemsContext";

const CWItemDetailContainer = () => {
  const { loading, getItemInfo, item, setItem } = useItemsContext();
  const { addToCart } = useUserContext();

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

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
        <Grid container item textAlign={"center"}>
          <Grid item xs={12}>
            <Box
              component="img"
              sx={{
                maxHeight: "30vh",
              }}
              src={"/images/not-found/item-not-found.png"}
              alt={"item note found"}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Ups! Couldn't find your item</Typography>
          </Grid>
        </Grid>
      ) : (
        !loading &&
        item && (
          <Grid container spacing={2} textAlign={"center"}>
            <Grid item xs={12} md={6}>
              <ItemImg component={item.img ? "img" : "div"} src={item.img} alt={item.desc} />
            </Grid>
            <Grid item container xs={12} md={6} spacing={2}>
              <Grid item xs={12}>
                <ItemTitle>{item.name}</ItemTitle>
              </Grid>
              <Grid item xs={12}>
                <ItemPrice>$ {item.price}</ItemPrice>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <ActionButton onClick={decreaseQuantity}>-</ActionButton>
                  <QuantityButton disabled>{quantity}</QuantityButton>
                  <ActionButton onClick={increaseQuantity}>+</ActionButton>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <ActionButton onClick={() => addToCart(item, quantity)}>Add to cart!</ActionButton>
              </Grid>
              <Grid item xs={12}>
                <ItemDescription>{item.desc}</ItemDescription>
              </Grid>
            </Grid>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default CWItemDetailContainer;
