import { Box, Drawer, List, ListItem } from "@mui/material";
import { CartBodyBox, CartTytle, CartTytleBox, TotalBox } from "./CWCartDrawer.styled";
import CWCartDrawerCard from "./components/CWCartDrawerCard";
import { useUserContext } from "../../hooks/useUserContext";

interface ICWCartDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CWCartDrawer = ({ open, setOpen }: ICWCartDrawerProps) => {
  const { user, cartTotal } = useUserContext();

  return (
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 400 }} role="presentation">
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
                  <CWCartDrawerCard cartItem={cartItem} />
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
