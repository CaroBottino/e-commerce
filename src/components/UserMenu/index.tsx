import { MouseEvent } from "react";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

type UserMenuProps = {
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  menuId: string;
};

const UserMenu = ({ handleProfileMenuOpen, menuId }: UserMenuProps) => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="user account"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </>
  );
};

export default UserMenu;
