import { Box, Grid, ImageList, ImageListItem } from "@mui/material";

const AboutMePage = () => {
  const itemData = [
    {
      img: "https://iili.io/J1acdSn.jpg",
      title: "Olivia",
    },
    {
      img: "https://iili.io/J1aaDtR.jpg",
      title: "Ema",
    },
    {
      img: "https://iili.io/J1aatwv.jpg",
      title: "Ema",
    },
    {
      img: "https://iili.io/J1aaicF.jpg",
      title: "Yo",
    },
    {
      img: "https://iili.io/J1aaQ9a.jpg",
      title: "Yo",
    },
    {
      img: "https://iili.io/J1aapMN.jpg",
      title: "Yo",
    },
    {
      img: "https://iili.io/J1aayPI.jpg",
      title: "Disney",
    },
    {
      img: "https://iili.io/J1acHFt.jpg",
      title: "Friends",
    },
    {
      img: "https://iili.io/J1aamnp.jpg",
      title: "Fede",
    },
    {
      img: "https://iili.io/J1acdSn.jpg",
      title: "Sweethearts",
    },
  ];

  return (
    <Grid container mt={"4rem"}>
      <Grid container item>
        <Box>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMePage;
