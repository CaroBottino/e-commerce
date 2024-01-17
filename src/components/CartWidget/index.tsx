// import { Badge, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUserContext } from "../../providers/User.provider";
import { CartButton } from "./CartWidget.styled";

interface ICartWidgetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartWidget = ({ open, setOpen }: ICartWidgetProps) => {
  const { user } = useUserContext();
  return (
    <CartButton color="inherit" onClick={() => setOpen(!open)}>
      <Badge badgeContent={user.cart.length} color="error">
        <ShoppingCartIcon />
      </Badge>
    </CartButton>
  );
};

export default CartWidget;
