import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const base_url = import.meta.env.VITE_BASE_URL;

const images = [
  {
    label: "Gifts for mom",
    imgPath: `${base_url}/src/assets/images/carousel/carousel_1.jpg`,
  },
  {
    label: "Kitchen favourites",
    imgPath: `${base_url}/src/assets/images/carousel/carousel_2.jpg`,
  },
  {
    label: "Shop books",
    imgPath: `${base_url}/src/assets/images/carousel/carousel_3.jpg`,
  },
  {
    label: "New arrivals in toys",
    imgPath: `${base_url}/src/assets/images/carousel/carousel_4.jpg`,
  },
  {
    label: "Beauty products",
    imgPath: `${base_url}/src/assets/images/carousel/carousel_5.jpg`,
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          top: 120,
          zIndex: 2,
          color: "black",
        }}
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </Button>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Box>
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
    </Box>
  );
}

export default CWCarousel;
