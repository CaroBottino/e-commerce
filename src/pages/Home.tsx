import { Box, Grid } from "@mui/material";
import CWItemListContainer from "../components/CWItemListContainer";
import CWCarousel, { CWCarouselImage } from "../components/CWCarousel";
import { useItemsContext } from "../hooks/useItemsContext";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { category } = useParams();
  const { showSearchResult } = useItemsContext();

  const base_url = import.meta.env.VITE_BASE_URL;

  const images: CWCarouselImage[] = [
    {
      label: "Beauty products",
      imgPath: "images/carousel/carousel_5.jpg",
    },
    {
      label: "Kitchen favourites",
      imgPath: "images/carousel/carousel_2.jpg",
    },
    {
      label: "Shop books",
      imgPath: "images/carousel/carousel_3.jpg",
    },
    {
      label: "New arrivals in toys",
      imgPath: "images/carousel/carousel_4.jpg",
    },
    {
      label: "Gifts for mom",
      imgPath: "images/carousel/carousel_1.jpg",
    },
  ];

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
            <CWCarousel images={images} arrowStepper />
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
              src={`${base_url}/images/categories/${category}.jpg`}
              alt={category}
            />
          </Box>
        )}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            top: showSearchResult ? "0vh" : category ? "-20vh" : "-50vh",
          }}
        >
          <CWItemListContainer />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
