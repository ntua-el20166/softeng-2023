import React from "react";
import { Button, SvgIcon, useTheme } from "@mui/material";

import CarouselLeftArrow from "../../../public/carouselLeftArrow";

const ArrowButton = ({ onClick, ...rest }) => {
  const theme = useTheme();
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <Button
      variant="contained"
      onClick={() => onClick()}
      sx={{
        position: "absolute",
        alignSelf: "center",
        left: "30px",
        minWidth: "40px",
        width: "40px",
        borderRadius: "12px",
        height: "65px",
        backgroundColor: "#730000",
        boxShadow: theme.shadows[6],

        "&:hover": {
          backgroundColor: "#5a0000",
          boxShadow: theme.shadows[12],
        },
      }}
    >
      <SvgIcon sx={{ marginRight: "5" }}>
        <CarouselLeftArrow />
      </SvgIcon>
    </Button>
  );
};

export default ArrowButton;
