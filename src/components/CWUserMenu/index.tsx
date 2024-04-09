import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import CWAvatarWidget from "../CWAvatarWidget";
import { StyledLoginLink } from "./CWUserMenu.styled";
import { useUserContext } from "../../hooks/useUserContext";

type CWUserMenuProps = {
  iconColor?: string;
  handleMobileMenuClose: () => void;
};

const CWUserMenu = ({ iconColor = "black", handleMobileMenuClose }: CWUserMenuProps) => {
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
        <CWAvatarWidget />
      </IconButton>
      {renderMenu}
    </>
  ) : (
    <StyledLoginLink to={`${base_url}/login`}>
      <AccountCircle sx={{ height: 40, width: 40, color: iconColor }} />
    </StyledLoginLink>
  );
};

export default CWUserMenu;
