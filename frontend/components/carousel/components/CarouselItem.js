import { Typography, Box } from "@mui/material";

const CarouselItem = ({ item }) => {
  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        position: "relative",
        backgroundImage: `url(${item.titlePoster})`,
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
          transition: "background-color 0.3s ease-in-out",
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
        {item.originalTitle}
      </Typography>
    </Box>
  );
};

export default CarouselItem;
