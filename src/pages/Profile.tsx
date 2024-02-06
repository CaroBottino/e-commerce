import { Grid } from "@mui/material";
import CWProfileCard from "../components/CWProfileCard";
import CWProfileMenu from "../components/CWProfileMenu";

const ProfilePage = () => {
  return (
    <Grid container sx={{ marginTop: "4rem" }}>
      <Grid item container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item>
          <CWProfileCard />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <CWProfileMenu />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
