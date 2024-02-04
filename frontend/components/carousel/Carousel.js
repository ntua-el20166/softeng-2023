import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { CarouselItem, CustomRightArrow, CustomLeftArrow } from "./components";
import { setSingleName, setSingleTitle } from "../../slices";

const CustomCarousel = ({ items }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    if (item.type === "movie") {
      dispatch(setSingleTitle(item));
      router.push(`title/movie/${item.titleID}`);
    } else if (item.type === "tv") {
      dispatch(setSingleTitle(item));
      router.push(`/title/tv/${item.titleID}`);
    } else {
      dispatch(setSingleName(item));
      router.push(`name/${item.nameID}`);
    }
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
          customLeftArrow={<CustomLeftArrow />}
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
