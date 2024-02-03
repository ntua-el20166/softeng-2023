import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchTitleStart } from "../../slices";

const MovieInfo = () => {
  // const popularMovies = useSelector(
  //   (state) => state.popularMovies.popularMovies
  // );
  const router = useRouter();
  const movieId = router.query.movieId;
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(movieId);
    // Pass the parameter (e.g., id) when dispatching the action
    dispatch(fetchTitleStart({ titleID: movieId }));
  }, [dispatch, movieId]);
  const {
    title: data,
    loading,
    error,
  } = useSelector((state) => ({
    title: state.singleTitle.title,
    loading: state.singleTitle.loading,
    error: state.singleTitle.error,
  }));

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          {loading ? "loading" : data.originalTitle}
        </Typography>
        <Box
          width={1500} // Set the width to 100% for full-screen width
          height={800} // Set the height
          border={0} // Set the border
          padding={2} // Set the padding
          display="flex" // Use flex display
          alignItems="center" // Align items vertically (center)
          justifyContent="flex-start"
          margin={"auto"}
          borderRadius={3}
          bgcolor={"#F4DDD6"}
        >
          <Box
            width={700} // Set the width of the inner box
            height={700} // Set the height of the inner box
            marginLeft={5}
            bgcolor={"#979797"}
            borderRadius={3} // Set the background color
          >
            {/* Content of the inner box */}
          </Box>
        </Box>
        <Box height={60} />
      </div>
      <Typography variant="h5" gutterBottom marginLeft={10}>
        Description
      </Typography>
      <Box
        width={1400} // Set the width of the inner box
        height={200} // Set the height of the inner box
        bgcolor="black"
        marginLeft={5}
        margin={"auto"}
      ></Box>
      <Box height={50} />
    </div>
  );
};

export default MovieInfo;
