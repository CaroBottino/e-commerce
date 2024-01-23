import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useUserContext } from "../../providers/User.provider";
import AvatarWidget from "../AvatarWidget";
import { StyledLoginLink } from "./UserMenu.styled";

type UserMenuProps = {
  handleMobileMenuClose: () => void;
};

const UserMenu = ({ handleMobileMenuClose }: UserMenuProps) => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

  const base_url = import.meta.env.VITE_BASE_URL;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSignOut = () => {
    logoutUser();
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate(base_url);
  };

  const goToProfile = () => {
    handleMenuClose();
    navigate(`${base_url}/profile`);
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
      <MenuItem onClick={goToProfile}>Profile</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
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
