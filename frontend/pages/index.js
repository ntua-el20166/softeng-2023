import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import { Carousel } from "../components";
import { fetchPopularMovies } from "../slices";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dispatch) return;
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const popularMovies = useSelector(
    (state) => state.popularMovies.popularMovies
  );

  const popularMoviesLoading = useSelector(
    (state) => state.popularMovies.popularMoviesLoading
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="inherit"
            sx={{
              fontWeight: "600",
              fontSize: "130px",
              letterSpacing: "25px",
              color: "#730000",
              WebkitTextStroke: "1px #000000",
              textAlign: "center",
              width: "fit-content",
              textShadow: "0px 5px 2px rgba(0,0,0,0.15)",
              margin: "auto",
            }}
          >
            NTUAFLIX
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontSize: "25px",
              textAlign: "center",
              width: "fit-content",
              paddingTop: "10px",
              marginTop: "10px",
              margin: "auto",
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
              letterSpacing: "0.5px",
            }}
          >
            Because life's too short for bad movies.
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: 10, paddingLeft: 10, fontWeight: "bold" }}
      >
        Featured Movies
      </Typography>
      {popularMoviesLoading ? (
        <Box
          sx={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
        >
          <Box sx={{ width: 400, height: 500, padding: 2 }}>
            <Skeleton height={500} />
          </Box>
          <Box sx={{ width: 400, height: 500, padding: 2 }}>
            <Skeleton height={500} />
          </Box>
          <Box sx={{ width: 400, height: 500, padding: 2 }}>
            <Skeleton height={500} />
          </Box>
        </Box>
      ) : (
        <Carousel items={popularMovies} />
      )}
      <Box sx={{ height: "200px" }} />
    </Box>
  );
};

export default Home;
