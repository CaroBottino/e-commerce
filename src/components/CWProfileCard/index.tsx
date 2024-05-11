import { useNavigate } from "react-router-dom";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { userTypeLabel } from "../../utils/userHelper";
import { useUserContext } from "../../hooks/useUserContext";
import { ProfileCard } from "./CWProfileCard.styled";
import { useState } from "react";
import CWSignUpForm from "../CWForms/CWSignUpForm";

const CWProfileCard = () => {
  const { user, hasSellingPermissions } = useUserContext();
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const [edit, setEdit] = useState<boolean>(false);

  const onNewItemClick = () => {
    navigate(`${base_url}/new-item`);
  };

  return (
    <ProfileCard>
      {edit ? (
        <Grid container>
          <Grid item xs={12} padding={2}>
            <CWSignUpForm editMode={true} user={user} onSubmitHandler={() => setEdit(false)} />
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid container item xs={12} md={4}>
            <Grid item>
              <img
                src={user.avatar}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} md={8} textAlign={"center"} padding={2}>
            <Grid item xs={12}>
              <Typography variant="h4">
                {user.name} {user.surname}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="text.secondary">
                {user.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} padding={2}>
                <Typography>Type:</Typography>
                <Typography>{userTypeLabel(user)}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack paddingTop={1}>
                <Button variant="outlined" color="secondary" onClick={() => setEdit(!edit)}>
                  Update info
                </Button>
              </Stack>
            </Grid>
            {hasSellingPermissions() && (
              <Grid item xs={12}>
                <Stack paddingTop={1}>
                  <Button variant="outlined" onClick={onNewItemClick}>
                    New item
                  </Button>
                </Stack>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </ProfileCard>
  );
};

export default CWProfileCard;
