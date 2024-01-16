import { useState, MouseEvent } from "react";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartWidget from "../CartWidget";
import SearchBar from "../SearchBar";
import UserMenu from "../UserMenu";
import { StyledLink } from "./NavBar.styled";

const NavBar = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "user-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Carrito</p>
        <CartWidget />
      </MenuItem>
      <MenuItem>
        <p>Profile</p>
        <UserMenu handleMobileMenuClose={() => {}} />
      </MenuItem>
    </Menu>
  );

  const categories = ["clothes", "electronics", "toys", "home"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <StyledLink to={`${base_url}/`}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              e-commerce
            </Typography>
          </StyledLink>
          {categories.map((category) => (
            <StyledLink key={category} to={`${base_url}/category/${category}`}>
              {category}
            </StyledLink>
          ))}
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <UserMenu handleMobileMenuClose={handleMobileMenuClose} />
            <CartWidget />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default NavBar;