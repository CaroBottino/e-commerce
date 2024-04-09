import { Button, Grid, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ICartItem } from "../../../interfaces/ICartItem";
import {
  CardInfoGrid,
  CardMainGrid,
  CartButtonGroup,
  CartButtonGroupBox,
} from "../CWCartDrawer.styled";
import { QuantityButton } from "../../CWItemDetailContainer/CWItemDetail.styled";
import { useUserContext } from "../../../providers/User.provider";

interface ICWCartDrawerCardProps {
  cartItem: ICartItem;
}

const CWCartDrawerCard = ({ cartItem }: ICWCartDrawerCardProps) => {
  const { deleteFromCart, increaseQuantity, decreaseQuantity } = useUserContext();
  return (
    <CardMainGrid container>
      <Grid container item xs={4} justifyContent={"center"}>
        <Grid item>
          <img
            src={cartItem.img}
            loading="lazy"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      <CardInfoGrid container item xs={8}>
        <Grid item xs={12} sx={{ ml: 4, mr: 1 }}>
          <Typography noWrap>{cartItem.name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ${Intl.NumberFormat("es-CL").format(cartItem.price)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CartButtonGroupBox>
            <CartButtonGroup variant="outlined">
              <Button onClick={() => decreaseQuantity(cartItem)}>-</Button>
              <QuantityButton disabled>{cartItem.quantity}</QuantityButton>
              <Button onClick={() => increaseQuantity(cartItem)}>+</Button>
              <Button onClick={() => deleteFromCart(cartItem)}>
                <DeleteOutlineIcon />
              </Button>
            </CartButtonGroup>
          </CartButtonGroupBox>
        </Grid>
      </CardInfoGrid>
    </CardMainGrid>
  );
};

export default CWCartDrawerCard;
