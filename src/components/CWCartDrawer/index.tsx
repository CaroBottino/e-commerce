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
import {
  CartBodyBox,
  CartButtonGroup,
  CartTytle,
  CartTytleBox,
  TotalBox,
} from "./CWCartDrawer.styled";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { QuantityButton } from "../CWItemDetailContainer/CWItemDetail.styled";

interface ICWCartDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CWCartDrawer = ({ open, setOpen }: ICWCartDrawerProps) => {
  const { user, deleteFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useUserContext();

  return (
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 300 }} role="presentation">
        <CartTytleBox>
          <CartTytle>Cart</CartTytle>
        </CartTytleBox>
        <CartBodyBox component={"main"}>
          {user.cart.length === 0 ? (
            <CartTytle>🛍️ No items in cart yet 🎮</CartTytle>
          ) : (
            <List>
              {user.cart.map((cartItem) => (
                <ListItem key={cartItem.id} disablePadding>
                  <Card sx={{ display: "flex", marginBottom: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 150, height: 150 }}
                      image={cartItem.img}
                    />
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
          )}
        </CartBodyBox>
        <TotalBox>
          <CartTytle noWrap>Total: $ {Intl.NumberFormat("es-CL").format(cartTotal)}</CartTytle>
        </TotalBox>
      </Box>
    </Drawer>
  );
};

export default CWCartDrawer;
