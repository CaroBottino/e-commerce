import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, ButtonGroup, Grid } from "@mui/material";
import {
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

  return loading ? (
    <CWItemDetailSkeleton />
  ) : item ? (
    <Grid container className="item-detail-container">
      <Grid item container spacing={2}>
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
              <Button onClick={decreaseQuantity}>-</Button>
              <QuantityButton disabled>{quantity}</QuantityButton>
              <Button onClick={increaseQuantity}>+</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => addToCart(item, quantity)}>
              Add to cart!
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ItemDescription>{item.desc}</ItemDescription>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div>Item not found</div>
  );
};

export default CWItemDetailContainer;
