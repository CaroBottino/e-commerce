import { useState } from "react";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { IItem } from "../../interfaces/IItem";
import {
  ItemDescription,
  ItemImg,
  ItemPrice,
  ItemTitle,
  QuantityButton,
} from "./CWItemDetail.styled";
import { useUserContext } from "../../hooks/useUserContext";

type CWItemDetailProps = {
  item: IItem;
};

const CWItemDetailContainer = ({ item }: CWItemDetailProps) => {
  const { addToCart } = useUserContext();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  return (
    <>
      <Grid container className="item-detail-container">
        {item && (
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
        )}
      </Grid>
    </>
  );
};

export default CWItemDetailContainer;
