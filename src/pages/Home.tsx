import { Box, Grid } from "@mui/material";
import CWItemListContainer from "../components/CWItemListContainer";
import CWCarousel from "../components/CWCarousel";

const HomePage = () => {
  return (
    <Grid container marginTop={0}>
      <Grid container item xs={12}>
        <Box
          sx={{
            marginX: "-48px",
            marginTop: "40px",
            "@media only screen and (max-width: 900px)": { top: "24px" },
          }}
        >
          <CWCarousel />
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            top: "-50vh",
            "@media only screen and (max-width: 1300px)": { top: "-30vh" },
            "@media only screen and (max-width: 900px)": { top: "-20vh" },
          }}
        >
          <CWItemListContainer />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
