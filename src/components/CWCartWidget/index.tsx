import Badge from "@mui/material/Badge/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartButton } from "./CWCartWidget.styled";
import { useUserContext } from "../../hooks/useUserContext";

interface ICWCartWidgetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CWCartWidget = ({ open, setOpen }: ICWCartWidgetProps) => {
  const { user } = useUserContext();
  return (
    <CartButton color="inherit" onClick={() => setOpen(!open)}>
      <Badge badgeContent={user.cart.length} color="error">
        <ShoppingCartIcon />
      </Badge>
    </CartButton>
  );
};

export default CWCartWidget;
