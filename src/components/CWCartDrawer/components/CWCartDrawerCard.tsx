import { Grid, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ICartItem } from "../../../interfaces/ICartItem";
import {
  CardInfoGrid,
  CardMainGrid,
  CartButtonGroup,
  CartButtonGroupBox,
} from "../CWCartDrawer.styled";
import { ActionButton, QuantityButton } from "../../CWItemDetailContainer/CWItemDetail.styled";
import { useUserContext } from "../../../hooks/useUserContext";

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
              <ActionButton onClick={() => decreaseQuantity(cartItem)}>-</ActionButton>
              <QuantityButton disabled>{cartItem.quantity}</QuantityButton>
              <ActionButton onClick={() => increaseQuantity(cartItem)}>+</ActionButton>
              <ActionButton
                onClick={() => deleteFromCart(cartItem)}
                sx={{ backgroundColor: "white", color: "#AC274F" }}
              >
                <DeleteOutlineIcon />
              </ActionButton>
            </CartButtonGroup>
          </CartButtonGroupBox>
        </Grid>
      </CardInfoGrid>
    </CardMainGrid>
  );
};

export default CWCartDrawerCard;
