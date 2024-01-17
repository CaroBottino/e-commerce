import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useUserContext } from "../../providers/User.provider";
import { CartButtonGroup, CartTytle, TotalBox } from "./CartDrawer.styled";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { QuantityButton } from "../ItemDetailContainer/ItemDetail.styled";

interface ICartDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartDrawer = ({ open, setOpen }: ICartDrawerProps) => {
  const { user, deleteFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useUserContext();

  return (
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 300 }} role="presentation">
        <CartTytle>Cart</CartTytle>
        <List>
          {user.cart.map((cartItem) => (
            <ListItem key={cartItem.id} disablePadding>
              <Card sx={{ display: "flex", marginBottom: 2 }}>
                <CardMedia component="img" sx={{ width: 150, height: 150 }} image={cartItem.img} />
                <CardContent sx={{ width: 118 }}>
                  <Typography noWrap>{cartItem.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    ${Intl.NumberFormat("es-CL").format(cartItem.price)}
                  </Typography>
                  <Box sx={{ marginTop: 3 }}>
                    <CartButtonGroup variant="outlined">
                      <Button onClick={() => decreaseQuantity(cartItem)}>-</Button>
                      <QuantityButton disabled>{cartItem.quantity}</QuantityButton>
                      <Button onClick={() => increaseQuantity(cartItem)}>+</Button>
                      <Button onClick={() => deleteFromCart(cartItem)}>
                        <DeleteOutlineIcon />
                      </Button>
                    </CartButtonGroup>
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
        <TotalBox>
          <CartTytle noWrap>Total: $ {Intl.NumberFormat("es-CL").format(cartTotal)}</CartTytle>
        </TotalBox>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
