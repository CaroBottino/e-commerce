import { useNavigate } from "react-router-dom";
import { Box, Button, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { userTypeLabel } from "../../utils/userHelper";
import { useUserContext } from "../../hooks/useUserContext";
import { ProfileCard } from "./CWProfileCard.styled";

const CWProfileCard = () => {
  const { user, hasSellingPermissions } = useUserContext();
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;

  const onNewItemClick = () => {
    navigate(`${base_url}/new-item`);
  };

  return (
    <ProfileCard>
      <CardMedia component="img" sx={{ width: 250, height: 250 }} image={user.avatar} />
      <CardContent sx={{ width: 418 }}>
        <Typography variant="h4">
          {user.name} {user.surname}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {user.email}
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Stack direction="row" spacing={2} padding={2}>
            <Typography>Type:</Typography>
            <Typography>{userTypeLabel(user)}</Typography>
          </Stack>
          {hasSellingPermissions() && (
            <Stack padding={2}>
              <Button variant="outlined" onClick={onNewItemClick}>
                New item
              </Button>
            </Stack>
          )}
        </Box>
      </CardContent>
    </ProfileCard>
  );
};

export default CWProfileCard;
