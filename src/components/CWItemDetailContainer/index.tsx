import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonGroup, Grid, Typography } from "@mui/material";
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
  const { loading, getItemInfo, item } = useItemsContext();
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
  }, [id]);

  return (
    <Grid container marginTop={"80px"} justifyContent={"center"}>
      {loading ? (
        <CWItemDetailSkeleton />
      ) : item ? (
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
      ) : (
        <Grid container item>
          <Typography>Item not found</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CWItemDetailContainer;
