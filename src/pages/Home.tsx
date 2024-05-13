import { Box, Grid } from "@mui/material";
import CWItemListContainer from "../components/CWItemListContainer";
import CWCarousel from "../components/CWCarousel";
import { useItemsContext } from "../hooks/useItemsContext";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { category } = useParams();
  const { showSearchResult } = useItemsContext();

  return (
    <Grid container marginTop={0}>
      <Grid container item xs={12} justifyContent={"center"}>
        {!showSearchResult && !category && (
          <Box
            sx={{
              marginX: "-48px",
              marginTop: "40px",
              "@media only screen and (max-width: 900px)": { top: "24px" },
            }}
          >
            <CWCarousel />
          </Box>
        )}
        {category && (
          <Box
            sx={{
              marginX: "-48px",
              marginTop: "40px",
              "@media only screen and (max-width: 900px)": { top: "24px" },
            }}
          >
            <Box
              component="img"
              sx={{
                display: "block",
                overflow: "hidden",
                width: "100%",
                maskImage: "linear-gradient(black 80%, transparent)",
              }}
              src={`/images/categories/${category}.jpg`}
              alt={category}
            />
          </Box>
        )}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            top: showSearchResult ? "0vh" : category ? "-20vh" : "-50vh",
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
