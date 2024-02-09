import { Box, Grid, ImageList, ImageListItem } from "@mui/material";

const AboutMePage = () => {
  const itemData = [
    {
      img: "https://freeimage.host/i/6.J1aas8g",
      title: "Olivia",
    },
    {
      img: "https://freeimage.host/i/J1aaDtR",
      title: "Ema",
    },
    {
      img: "https://freeimage.host/i/J1aatwv",
      title: "Ema",
    },
    {
      img: "https://freeimage.host/i/J1aaicF",
      title: "Yo",
    },
    {
      img: "https://freeimage.host/i/J1aaQ9a",
      title: "Yo",
    },
    {
      img: "https://freeimage.host/i/J1aapMN",
      title: "Yo",
    },
    {
      img: "https://freeimage.host/i/J1aayPI",
      title: "Disney",
    },
    {
      img: "https://freeimage.host/i/J1acHFt",
      title: "Friends",
    },
    {
      img: "https://freeimage.host/i/J1aamnp",
      title: "Fede",
    },
    {
      img: "https://freeimage.host/i/J1acdSn",
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
