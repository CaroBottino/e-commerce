import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useUserContext } from "../../providers/User.provider";
import { userTypeLabel } from "../../utils/userHelper";

const ProfileCard = () => {
  const { user } = useUserContext();

  return (
    <Card sx={{ display: "flex", marginBottom: 2, maxWidth: "40rem" }}>
      <CardMedia component="img" sx={{ width: 250, height: 250 }} image={user.avatar} />
      <CardContent sx={{ width: 418 }}>
        <Typography variant="h4">
          {user.name} {user.surname}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {user.email}
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Stack direction="row" spacing={2}>
            <Typography>Type:</Typography>
            <Typography>{userTypeLabel(user)}</Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
