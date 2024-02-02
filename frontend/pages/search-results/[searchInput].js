import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import { TitleCard } from "./_components";

const SearchResults = () => {
  const [loadedTitles, setLoadedTitles] = useState(3);
  const [loadedNames, setLoadedNames] = useState(3);

  const router = useRouter();
  const searchInput = router.query.searchInput;

  const handleItemClick = ({ titleID }) => {
    router.push(`movie/${titleID}`);
  };
  const titleResults = useSelector((state) => state.results.titleResults);
  const resultsLoading = useSelector((state) => state.results.resultsLoading);

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: 10, paddingLeft: 10, marginBottom: 10 }}
      >
        Results for "{searchInput}"
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: 10, paddingLeft: 10, marginBottom: 4 }}
      >
        Titles
      </Typography>
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "1191px",
          margin: "auto",
          alignItems: "center",
          backgroundColor: "#F4DDD6",
          padding: 2,
        }}
      >
        {resultsLoading
          ? null
          : titleResults
              .filter((title) => (title.titlePoster ? true : false))
              .slice(0, loadedTitles)
              .map((title, i) => (
                <Box key={i} onClick={() => handleItemClick(title)}>
                  <TitleCard
                    media={title.type}
                    poster={title.titlePoster}
                    rating={title.rating.avRating}
                    startYear={title.startYear}
                    endYear={title.endYear}
                    title={title.originalTitle}
                    actors={title.principals
                      .filter((principal) => principal.category === "Acting")
                      .map(({ name }) => name)}
                  />
                </Box>
              ))}
        {loadedTitles < titleResults.length && (
          <Button
            variant="contained"
            onClick={() => {
              setLoadedTitles(loadedTitles * 3);
            }}
            sx={{
              alignSelf: "center",
              margin: "auto",
              display: "flex",
              marginTop: 2,
              borderRadius: "20px",
              backgroundColor: "#D32F2F",
            }}
          >
            Load More
          </Button>
        )}
      </Box>
      <Box height={100} />
    </Box>
  );
};

export default SearchResults;
