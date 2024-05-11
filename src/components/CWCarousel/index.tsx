import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Gifts for mom",
    imgPath: "images/carousel/carousel_1.jpg",
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
    label: "Beauty products",
    imgPath: "images/carousel/carousel_5.jpg",
  },
];

function CWCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          top: "-55vh",
          zIndex: 2,
          color: "black",
          "@media only screen and (max-width: 900px)": { top: "-15vh" },
        }}
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </Button>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Box>
    </Box>
  );
}

export default CWCarousel;
