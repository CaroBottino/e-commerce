import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";

const AboutMePage = () => {
  const itemData = [
    {
      desc: "Hi! I'm Carolina 🦋 A passionate full stack developer. I'm a life and nature lover.",
    },
    {
      img: "https://iili.io/J1aas8g.jpg",
      title: "Olivia",
    },
    {
      desc: "One of the things I enjoy more in life is sharing it with my pet, my family.",
    },
    {
      img: "https://iili.io/J1aaDtR.jpg",
      title: "Ema",
    },
    {
      desc: "I'm a software engineer, graduated from Universidad Catolica de Cordoba (Argentina) on 2016.",
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
      img: "https://iili.io/J1etIs9.jpg",
      title: "Watercolors",
    },
    {
      desc: "Learning new things is my passion. Technology got me amazed since I was a child.",
    },
    {
      img: "https://iili.io/J1aaQ9a.jpg",
      title: "Yo",
    },
    {
      desc: "In addition to programming, I really enjoy training. I am a born artist. A few years ago I was part of rock bands and a soul choir. I am a musical theater artist and tap dancer. I also enjoy painting with watercolors.",
    },
    {
      img: "https://iili.io/J1eDyGt.jpg",
      title: "Fede",
    },
    {
      desc: "Fede is my husband and life partner. He supports me in all my projects, we share ideas and always pushes me to go for more.",
    },
    {
      img: "https://iili.io/J1aapMN.jpg",
      title: "Yo",
    },
    {
      desc: "I currently live in an urban area far from the city. Observing nature is something I love about this place. See the trees grow, each fruit in its season, the variety of birds that inhabit the place.",
    },
    {
      img: "https://iili.io/J1aayPI.jpg",
      title: "Disney",
    },
    {
      desc: "This project is a personal excuse I have to test concepts. I like to put into practice the new things I learn.",
    },
    {
      img: "https://iili.io/J1acHFt.jpg",
      title: "Friends",
    },
    {
      desc: "I chose e-commerce because, since my first experience working at MercadoLibre, I got fascinated with the concept.",
    },
    {
      img: "https://iili.io/J1aamnp.jpg",
      title: "Fede",
    },
    {
      img: "https://iili.io/J1ebkKX.jpg",
      title: "Friends",
    },
    {
      img: "https://iili.io/J1acdSn.jpg",
      title: "Sweethearts",
    },
    {
      desc: "Hope you enjoy interacting with this platform as much as I enjoy developing it.",
    },
    {
      img: "https://iili.io/J1etA0u.md.jpg",
      title: "Tap Dance",
    },
    {
      desc: "Have a nice day 🌷",
    },
    {
      img: "https://iili.io/J1et7Jj.jpg",
      title: "Pepo",
    },
  ];

  return (
    <Grid container mt={"4rem"}>
      <Grid container item>
        <Box>
          <ImageList variant="masonry" cols={4} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                {item.img ? (
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                ) : (
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "16px",
                      padding: 5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                )}
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMePage;
