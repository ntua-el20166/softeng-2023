import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

import { CarouselItem, CustomRightArrow } from "./components";

const CustomCarousel = ({ items }) => {
  const router = useRouter();
  const handleItemClick = (item) => {
    router.push(`movie/${item.titleID}`);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "93%",
          width: "100%",
          margin: "auto",
          cursor: "pointer",
        }}
      >
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
              onClick={() => handleItemClick(item)}
            >
              <CarouselItem item={item} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CustomCarousel;
