import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import {
  ActionButton,
  ItemDescription,
  ItemDiscount,
  ItemImg,
  ItemPrice,
  ItemSmallInfo,
  ItemSubtitle,
  ItemTitle,
  ItemXSmallInfo,
  QuantityButton,
  ResumeGrid,
  StyledChip,
} from "./CWItemDetail.styled";
import CWItemDetailSkeleton from "../CWSkeletons/CWItemDetailSkeleton";
import ItemNotFound from "./components/ItemNotFound.component";
import CWCardContainer from "../CWCardContainer";
import { priceAsCurrency } from "../../utils/itemHelper";
import { useUserContext } from "../../hooks/useUserContext";
import { useItemsContext } from "../../hooks/useItemsContext";

const CWItemDetailContainer = () => {
  const { loading, getItemInfo, item, setItem } = useItemsContext();
  const { addToCart } = useUserContext();

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleChange = (q: number) => {
    setQuantity(q);
  };

  const finalPrice = (price: number, discount: number) => {
    return price - price * (discount / 100);
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
                    <ItemPrice>
                      {priceAsCurrency(finalPrice(item.price, item.discount || 0))}
                    </ItemPrice>
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
                        <FormControl size="small" fullWidth>
                          <Select
                            id="item-q-select"
                            value={quantity}
                            onChange={(event) => handleChange(Number(event?.target.value))}
                            renderValue={(selected) => (
                              <Typography>Quantity: {selected}</Typography>
                            )}
                            MenuProps={{
                              PaperProps: { sx: { maxHeight: "200px" } },
                            }}
                          >
                            {[...Array(item.stock)].map((q, i) => (
                              <MenuItem key={i} value={i + 1}>
                                {i + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                      <Stack direction="row" width={"100%"}>
                        <ActionButton
                          onClick={() => addToCart(item, quantity)}
                          sx={{ width: "100%", marginTop: "8px" }}
                        >
                          Add to cart!
                        </ActionButton>
                      </Stack>
                    </>
                  )}
                </ResumeGrid>
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
