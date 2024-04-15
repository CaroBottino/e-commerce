import { Grid } from "@mui/material";
import CWProfileCard from "../components/CWProfileCard";
import CWProfileMenu from "../components/CWProfileMenu";

const ProfilePage = () => {
  return (
    <Grid container className="page-content-container">
      <Grid item container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item>
          <CWProfileCard />
        </Grid>
      </Grid>

      <Grid item container xs={12} sx={{ justifyContent: "center", alignItems: "center" }}>
        <CWProfileMenu />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
