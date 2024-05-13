import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import CWCartWidget from "../CWCartWidget";
import CWSearchBar from "../CWSearchBar";
import CWUserMenu from "../CWUserMenu";
import CategorySelector from "./components/CategorySelector";
import CWCartDrawer from "../CWCartDrawer";
import {
  IconsBox,
  NavbarFirstRow,
  NavbarGrid,
  NavbarSecondRow,
  StyledLink,
} from "./CWNavBar.styled";
import { getItemsCategories } from "../../utils/itemHelper";

const CWNavBar = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const [open, setOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCartOnMobile = () => {
    setOpen(!open);
    handleMobileMenuClose();
  };

  const categories = getItemsCategories();

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
      <MenuItem key={"mobile-cart"}>
        <p>Carrito</p>
        <CWCartWidget open={false} setOpen={handleCartOnMobile} />
      </MenuItem>
      <MenuItem key={"mobile-profile"} onClick={handleMobileMenuClose}>
        <p>Profile</p>
        <CWUserMenu handleMobileMenuClose={handleMobileMenuClose} />
      </MenuItem>
      <Divider />
      {categories.map((category) => (
        <MenuItem key={`mobile-${category}`} onClick={handleMobileMenuClose}>
          <Link to={`${base_url}/category/${category}`}>{category}</Link>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <NavbarGrid container>
        <NavbarFirstRow container item xs={12} alignItems={"center"}>
          <Grid container item xs={2} justifyContent={"center"}>
            <StyledLink to={`${base_url}/`}>
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  maxHeight: "65px",
                }}
                src={"images/logo/cafe-logo-name.png"}
                alt={"cafe-logo"}
              />
            </StyledLink>
          </Grid>
          <Grid item xs={8} alignItems={"center"}>
            <CWSearchBar />
          </Grid>
          <Grid item xs={2}>
            <IconsBox sx={{ display: { xs: "none", md: "flex" }, color: "white" }}>
              <CWUserMenu handleMobileMenuClose={handleMobileMenuClose} />
              <CWCartWidget open={open} setOpen={setOpen} />
            </IconsBox>
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
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
          </Grid>
        </NavbarFirstRow>
        <NavbarSecondRow
          container
          item
          xs={12}
          textAlign={"center"}
          alignItems={"center"}
          columnSpacing={3}
        >
          <Grid item xs={2} mr={2}>
            <CategorySelector />
          </Grid>
          <Grid item>
            <StyledLink key={"desktop-offers"} to="#">
              Offers
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink key={"desktop-history"} to="#">
              History
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink key={"desktop-sell"} to="#">
              Sell
            </StyledLink>
          </Grid>
          <Grid item>
            <StyledLink key={"desktop-help"} to="#">
              Help
            </StyledLink>
          </Grid>
        </NavbarSecondRow>
      </NavbarGrid>

      {renderMobileMenu}
      {open && <CWCartDrawer open={open} setOpen={setOpen} />}
    </>
  );
};

export default CWNavBar;
