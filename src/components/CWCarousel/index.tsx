import { ReactElement, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MobileStepper } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export type CWCarouselImage = {
  label: string;
  imgPath: string;
};

interface CWCarouselProps {
  steps?: ReactElement[];
  images?: CWCarouselImage[];
  arrowStepper?: boolean;
  dotsStepper?: boolean;
}

function CWCarousel({ steps, images, arrowStepper = false, dotsStepper = false }: CWCarouselProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images ? images.length : steps ? steps.length : 0;

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
    <Box
      sx={{
        flexGrow: 1,
        "@media only screen and (max-width: 900px)": { marginTop: "-2vh" },
      }}
    >
      {images && (
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
      )}
      {steps && (
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {steps.map((step, index) => (
            <div key={`step-${index}`}>{Math.abs(activeStep - index) <= 2 ? step : null}</div>
          ))}
        </AutoPlaySwipeableViews>
      )}

      {arrowStepper && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            top: "-55vh",
            zIndex: 2,
            color: "black",
            "@media only screen and (max-width: 900px)": { top: "-25vh" },
          }}
        >
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        </Box>
      )}
      {dotsStepper && (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ marginTop: "10px", ".MuiMobileStepper-dotActive": { backgroundColor: "#FF1857" } }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            ></Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}></Button>
          }
        />
      )}
    </Box>
  );
}

export default CWCarousel;
