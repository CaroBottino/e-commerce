import { useState } from "react";
import { Grid, Rating, Stack } from "@mui/material";
import {
  ItemDiscount,
  ItemPrice,
  ItemSmallInfo,
  ItemTitle,
  ItemXSmallInfo,
  ResumeGrid,
  StyledChip,
} from "../CWItemDetail.styled";
import { priceAsCurrency } from "../../../utils/itemHelper";
import { useItemsContext } from "../../../hooks/useItemsContext";
import { useUserContext } from "../../../hooks/useUserContext";
import ItemQuantitySelect from "./ItemQuantitySelect.component";
import CWButton from "../../CWButton";

const ItemResume = () => {
  const { item } = useItemsContext();
  const { addToCart } = useUserContext();
  const [quantity, setQuantity] = useState(1);

  const handleChange = (q: number) => {
    setQuantity(q);
  };

  const finalPrice = (price: number, discount: number) => {
    return price - price * (discount / 100);
  };

  return (
    item && (
      <ResumeGrid>
        <Stack direction="row">
          <ItemTitle>{item.name}</ItemTitle>
        </Stack>
        <Stack direction="row" spacing={2} width={"100%"} alignItems={"center"}>
          <ItemXSmallInfo>{item.rating || 0}</ItemXSmallInfo>
          <Rating value={item.rating || 0} readOnly size="small" />
          {item.rating === 5 && <StyledChip label="most selled" size="small" />}
        </Stack>
        <Stack direction="row" width={"100%"} alignItems={"end"} marginTop="16px">
          {item.discount && item.discount > 0 ? (
            <ItemXSmallInfo sx={{ textDecoration: "line-through" }}>
              {priceAsCurrency(item.price)}
            </ItemXSmallInfo>
          ) : null}
        </Stack>
        <Stack direction="row" width={"100%"} alignItems={"center"}>
          <ItemPrice>{priceAsCurrency(finalPrice(item.price, item.discount || 0))}</ItemPrice>
          {item.discount ? (
            <Grid item xs={12} ml={1}>
              <ItemDiscount>{item.discount}% OFF</ItemDiscount>
            </Grid>
          ) : null}
        </Stack>
        <Stack direction="row" width={"100%"} alignItems={"center"} marginTop="16px">
          {item.stock > 0 ? (
            <ItemSmallInfo>Product in stock</ItemSmallInfo>
          ) : (
            <ItemSmallInfo>Product out of stock</ItemSmallInfo>
          )}
        </Stack>
        {item.stock > 0 && (
          <>
            <Stack direction="row" width={"100%"} marginTop="8px">
              <ItemQuantitySelect quantity={quantity} handleChange={handleChange} />
            </Stack>
            <Stack direction="row" width={"100%"}>
              <CWButton
                label="Add to cart!"
                variant="contained"
                onClick={() => addToCart(item, quantity)}
                sx={{ width: "100%", marginTop: "8px", textTransform: "none" }}
              />
            </Stack>
          </>
        )}
      </ResumeGrid>
    )
  );
};

export default ItemResume;
