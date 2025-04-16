import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import CWAvatarWidget from "../CWAvatarWidget";
import { StyledLoginLink } from "./CWUserMenu.styled";
import { useUserContext } from "../../hooks/useUserContext";

const CWUserMenu = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const base_url = import.meta.env.VITE_BASE_URL;

  const goToProfile = () => {
    navigate(`${base_url}/profile`);
  };

  return user.id ? (
    <IconButton size="large" color="inherit" onClick={goToProfile}>
      <CWAvatarWidget />
    </IconButton>
  ) : (
    <StyledLoginLink to={`${base_url}/login`}>
      <AccountCircle sx={{ height: 40, width: 40 }} />
    </StyledLoginLink>
  );
};

export default CWUserMenu;
