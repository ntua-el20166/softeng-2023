import { Typography, Box } from "@mui/material";

const CarouselItem = ({ item }) => {
  const poster = item.titlePoster ?? item.namePoster;
  const title = item.originalTitle ?? item.name;
  return (
    <Box
      sx={{
        width: 400,
        height: 550,
        position: "relative",
        backgroundImage: `url(https://image.tmdb.org/t/p/w780${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0)",
          transition: "background-color 0.1s ease-in-out",
        },
        "&:hover": {
          "& .overlay-text": {
            visibility: "visible",
            opacity: 1,
          },
          "&:before": {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
        },
      }}
    >
      <Typography
        variant="h5"
        component="div"
        className="overlay-text"
        sx={{
          position: "absolute",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CarouselItem;
