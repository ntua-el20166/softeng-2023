import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TitleCard = ({
  rating,
  title,
  startYear,
  endYear,
  actors,
  poster,
  media,
  loading,
}) => {
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
      {loading ? (
        <Box sx={{ width: 151 }}>
          <Skeleton height={151} />
        </Box>
      ) : (
        <CardMedia
          component="img"
          sx={{ width: 151, background: "#C4C4C4" }}
          image={`https://image.tmdb.org/t/p/w500${poster}`}
        />
      )}
      <CardContent
        sx={{ flex: "1", display: "flex", justifyContent: "space-between" }}
      >
        <div>
          {loading ? (
            <Box sx={{ width: 250 }}>
              <Skeleton height={30} />
            </Box>
          ) : (
            <Typography component="div" variant="h6">
              {title}
            </Typography>
          )}
          {loading ? (
            <Box sx={{ width: 70 }}>
              <Skeleton />
            </Box>
          ) : (
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
          )}
          {loading ? (
            <Box sx={{ width: 50 }}>
              <Skeleton height={20} />
            </Box>
          ) : (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {startYear}
              {endYear ? ` - ${endYear}` : ""}
            </Typography>
          )}
          {loading ? (
            <Box sx={{ width: 350 }}>
              <Skeleton />
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {actors.slice(0, 3).map((actor) => `${actor}, `)}
            </Typography>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarBorderIcon sx={{ marginRight: 1 }} />
          {loading ? (
            <Box sx={{ width: 50 }}>
              <Skeleton height={30} />
            </Box>
          ) : (
            <Typography component="div" variant="h6">
              {rating}
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TitleCard;
