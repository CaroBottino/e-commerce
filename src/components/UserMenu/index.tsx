import { MouseEvent, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useUserContext } from "../../providers/User.provider";
import AvatarWidget from "../AvatarWidget";
import { StyledLoginLink } from "./UserMenu.styled";

type UserMenuProps = {
  handleMobileMenuClose: () => void;
};

const UserMenu = ({ handleMobileMenuClose }: UserMenuProps) => {
  const { user } = useUserContext();

  const base_url = import.meta.env.VITE_BASE_URL;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  console.log("caro - UserMenu - user: ", user);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "user-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
    </Menu>
  );

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return user.id ? (
    <>
      <IconButton
        size="large"
        aria-label="user account"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AvatarWidget />
      </IconButton>
      {renderMenu}
    </>
  ) : (
    <StyledLoginLink to={`${base_url}/login`}>
      <AccountCircle sx={{ height: 40, width: 40 }} />
    </StyledLoginLink>
  );
};

export default UserMenu;
