import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  Paper,
} from "@mui/material";

function CarouselItem(props) {
  return (
    <Card
      sx={{ maxWidth: 345, margin: "auto", backgroundColor: props.item.color }}
    >
      <Typography gutterBottom variant="h5" component="div">
        {props.item.name}
      </Typography>
      {/* Add CardMedia or other content here */}
    </Card>
  );
}

const FeaturedMoviesCarousel = ({ items }) => {
  return (
    <Carousel
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default FeaturedMoviesCarousel;
