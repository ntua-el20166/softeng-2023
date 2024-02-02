import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const TitleCard = ({
  rating,
  title,
  startYear,
  endYear,
  actors,
  poster,
  media,
}) => {
  console.log(actors);
  return (
    <Card
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        maxWidth: 1100,
        maxHeight: 161,
        background: "#FFFFFF",
        border: "1px solid #E0E0E0",
        marginTop: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151, background: "#C4C4C4" }}
        image={`https://image.tmdb.org/t/p/w500${poster}`}
      />
      <CardContent
        sx={{ flex: "1", display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Typography component="div" variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {(() => {
              switch (media) {
                case "tv":
                  return "TV-Series";
                case "movie":
                  return "Movie";
                case "short":
                  return "Short";
                default:
                  return "";
              }
            })()}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {startYear}
            {endYear ? ` - ${endYear}` : ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {actors.slice(0, 3).map((actor) => `${actor}, `)}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarBorderIcon sx={{ marginRight: 1 }} />
          <Typography component="div" variant="h6">
            {rating}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitleCard;
