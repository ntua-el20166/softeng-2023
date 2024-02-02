import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NameCard = ({ name, birthYr, deathYr, poster, profession, loading }) => {
  console.log(poster);
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
          image={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QEA0ODg0PDQ4ODRAODw8PDQ8PDQ0NFREWFhURFhMYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAQIH/8QAMRABAAECAwYEBQMFAAAAAAAAAAECEQMEIQUxQVFhcRIiMpFygbHB0TNCoVKCkuHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAizGPTRGus8IjfKlO0KuFNP8AMg0aqojfMR3eYxaZ3VR7wycfHqrt4rWjdEaQiBvDDiqY3TMfNJTmcSP3z9QbAyac5iRN/FfpMRZey2apr09NXLhPYFgAAAAAAAAAAAAAAAAAAABRzOdtpR/l+HjPZmZmaKZ0jSesqYEzMzeZvIAAAAADtFVpieUxLgDTnPYfWelnrLZmK76Wtui8XlkuxPEG6IMnjeOnX1RpPXqnAAAAAAAAAAAAAAAeMevw01Vcon34PartKryW5zH5BmAAAAAAAAAAAAtbOrtXMc4+jTZGTnz092uAAAAAAAAAAAAAAAo7UnSjvMryhtT9nzBRAAAAAAAAAAABLlfXR3bDHynro7tgAAAAAAAAAAAAAABT2n6aefi+y4o7T3Ud59wZ7oAAAAAAAAAAAmyX6lPz+jXZez488dIlqAAAAAAAAAAAAAAAK2dro8M0zNpteO/BZY2anz19wROgAAAAAAAAAAC/szD9VXPSPuvM/ZkzerlaPe7QAAAAAAAAAAAAAAAZWfw7VzPCrWGqqbRovTf+mY9p0BmgAAAAAAAAAAA0dm0+WZ51LiDIxbDp63n3lOAAAAAAAAAAAAAAA8Y9Hipqp50z7vYDD8M2vMWi9vm409o03ovymJ+zMAAAAAAAAATZfK1V63tETa/4QNnK0WopjpEz3nUHuim0RHKLPQAAAAAAAAAAAAAAAAA84lEVRNM8YmGJMTF4nfE2nu3WftHA18cf3fkFIAAAAAAACmmZmIjfOjciGds2I8UzyjRpAAAAAAAAAAAAAAAAAAAIsz6K/hlKjzHor+GQYw46AAAAAAC1s31z8LTZWz588dYlqgAAAAAAAAAAAAAAAAAAIc3XairrFvdzFzeHTxvPKNVDNZma7Ra0R1vcFd0AAAAAAASZaq1dM9bfZssFbw89XERExFVvewNMVcPPUTvvTPXd7rMTE7tYB0AAAAAAAAAAHKqojWZtHUHRWqz2HHGZ7RKlmc1VXpup5cZ7gt4+epjSnzT7Uwo4uYrq3zpyjSEToOOgAAAAAAAAAAA94WLVT6Zt9PZ4AaWBnqZ0q8s8/wBsrcMFLg49dPpnTlwBsipg56mdKvLP8f6Won/u+AdAAAABXzWZijTfVy5dwe8xj00RrvndHNl42NVXN53cI4Q8V1TMzMzeZcAAAAAAAAAAAAAAAAAAAAASYOPVRun5TuRgNTL5umq0T5auXCeyywWhkczM+SrWbaT9gXgAJY2a9dfxSAIwAAAAAAAAAAAAAAAAAAAAAAAE2S/Up+f0dAaoAP/Z"
          }
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
              {name}
            </Typography>
          )}
          {loading ? (
            <Box sx={{ width: 70 }}>
              <Skeleton />
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {(() => {
                switch (profession) {
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
              variant="subname1"
              color="text.secondary"
              component="div"
            >
              {birthYr}
              {deathYr ? ` - ${deathYr}` : ""}
            </Typography>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarBorderIcon sx={{ marginRight: 1 }} />
        </div>
      </CardContent>
    </Card>
  );
};

export default NameCard;
