import { useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Divider, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
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
import { useUserContext } from "../../hooks/useUserContext";

const CWNavBar = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

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

  const handleMobileSignOut = () => {
    logoutUser();
    handleMobileMenuClose();
    navigate(base_url);
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
      sx={{
        ".MuiPaper-root": {
          backgroundColor: "#333",
          color: "white",
        },
      }}
    >
      <MenuItem key={"mobile-cart"}>
        <p>Carrito</p>
        <CWCartWidget open={false} setOpen={handleCartOnMobile} />
      </MenuItem>
      <MenuItem key={"mobile-profile"} onClick={handleMobileMenuClose}>
        <p>Profile</p>
        <CWUserMenu />
      </MenuItem>
      {user.id && (
        <MenuItem key={"mobile-sign-out"} onClick={handleMobileSignOut}>
          <p>Sign out</p>
          <IconButton size="large">
            <ExitToAppOutlinedIcon sx={{ color: "lightgray" }} />
          </IconButton>
        </MenuItem>
      )}
      <Divider sx={{ borderColor: "#EB638B" }} />
      <MenuItem>Categories ✨</MenuItem>
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
                  display: { xs: "none", md: "block" },
                  overflow: "hidden",
                  maxHeight: "65px",
                }}
                src={"images/logo/cafe-logo-name.png"}
                alt={"cafe-logo"}
              />
              <Box
                component="img"
                sx={{
                  display: { xs: "block", md: "none" },
                  overflow: "hidden",
                  maxHeight: "65px",
                }}
                src={"images/logo/cafe-logo.png"}
                alt={"cafe-logo"}
              />
            </StyledLink>
          </Grid>
          <Grid item xs={8} alignItems={"center"}>
            <CWSearchBar />
          </Grid>
          <Grid item xs={2}>
            <IconsBox sx={{ display: { xs: "none", md: "flex" }, color: "white" }}>
              <CWUserMenu />
              <CWCartWidget open={open} setOpen={setOpen} />
            </IconsBox>
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MoreIcon sx={{ color: "lightgray" }} />
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
          <Grid item xs={2} mr={2} sx={{ display: { xs: "none", md: "block" } }}>
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
