import type { Meta, StoryObj } from "@storybook/react";
import CWCarousel, { CWCarouselImage } from ".";
import { ReactElement } from "react";
import { Grid, Typography } from "@mui/material";

const meta: Meta<typeof CWCarousel> = {
  title: "CafeWeb/Carousel",
  component: CWCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWCarousel>;

const steps: ReactElement[] = [
  <Grid item container xs={12} key={0} textAlign={"center"}>
    <Grid item xs={12}>
      <Typography variant="h3">First step</Typography>
      <Typography variant="subtitle1">This is the text you wrote for first step</Typography>
    </Grid>
  </Grid>,
  <Grid item container xs={12} key={1} textAlign={"center"}>
    <Grid item xs={12}>
      <Typography variant="h3">Second step</Typography>
      <Typography variant="subtitle1">
        This is the text you wrote for second step as well
      </Typography>
    </Grid>
  </Grid>,
  <Grid item container xs={12} key={2} textAlign={"center"}>
    <Grid item xs={12}>
      <Typography variant="h3">Third step</Typography>
      <Typography variant="subtitle1">All texts are optional</Typography>
    </Grid>
  </Grid>,
];

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

export const DotsStepper: Story = {
  args: {
    steps: steps,
    dotsStepper: true,
  },
};

export const ArrowStepper: Story = {
  args: {
    images: images,
    arrowStepper: true,
  },
};
