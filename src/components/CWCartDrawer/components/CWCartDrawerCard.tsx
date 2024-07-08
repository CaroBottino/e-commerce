import { Grid, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ICartItem } from "../../../interfaces/ICartItem";
import {
  ActionBtnStyles,
  CardInfoGrid,
  CardMainGrid,
  CartButtonGroup,
  CartButtonGroupBox,
  DeleteBtnStyles,
  QuantityBtnStyles,
} from "../CWCartDrawer.styled";
import { useUserContext } from "../../../hooks/useUserContext";
import CWButton from "../../CWButton";

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
              <CWButton
                label="-"
                variant="contained"
                onClick={() => decreaseQuantity(cartItem)}
                sx={ActionBtnStyles}
              />
              <CWButton
                label={cartItem.quantity.toString()}
                variant="outlined"
                disabled
                sx={QuantityBtnStyles}
              />
              <CWButton
                label="+"
                variant="contained"
                onClick={() => increaseQuantity(cartItem)}
                sx={ActionBtnStyles}
              />
              <CWButton
                label={<DeleteOutlineIcon />}
                variant="outlined"
                onClick={() => deleteFromCart(cartItem)}
                sx={DeleteBtnStyles}
              />
            </CartButtonGroup>
          </CartButtonGroupBox>
        </Grid>
      </CardInfoGrid>
    </CardMainGrid>
  );
};

export default CWCartDrawerCard;
