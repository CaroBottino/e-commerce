import { Box, Grid } from "@mui/material";
import CWItemListContainer from "../components/CWItemListContainer";
import CWCarousel from "../components/CWCarousel";

const HomePage = () => {
  return (
    <Grid container>
      <Grid container item xs={12}>
        <Box sx={{ marginX: "-48px" }}>
          <CWCarousel />
        </Box>
        <Box sx={{ position: "relative", zIndex: 3, top: "-20rem" }}>
          <CWItemListContainer />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
