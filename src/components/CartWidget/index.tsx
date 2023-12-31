// import { Badge, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge/Badge";
import IconButton from "@mui/material/IconButton/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <>
      <IconButton size="large" edge="end" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default CartWidget;
