import { Grid } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import ProfileMenu from "../components/ProfileMenu";

const ProfilePage = () => {
  return (
    <Grid container sx={{ marginTop: "4rem" }}>
      <Grid item container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item>
          <ProfileCard />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <ProfileMenu />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
