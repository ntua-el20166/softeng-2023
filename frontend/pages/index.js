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
        <Toolbar>
          <Typography
            variant="h3"
            color="inherit"
            sx={{
              fontWeight: "600",
              fontSize: "150px",
              letterSpacing: "25px",
              color: "#730000",
              WebkitTextStroke: "1px #000000",
              textAlign: "center",
              margin: "auto",
              width: "fit-content",
            }}
          >
            NTUAFLIX
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: 10, paddingLeft: 10 }}
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
