import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Carousel } from "../../../components";

import { fetchSingleTv, fetchSimilarTvs } from "../../../slices";

const singleTitle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const titleID = router.query.titleID;
  const singleTitle = useSelector((state) => state.singleTitle.singleTitle);
  useEffect(() => {
    if (titleID !== singleTitle?.titleID && titleID) {
      dispatch(fetchSingleTv({ titleID: titleID }));

      dispatch(fetchSimilarTvs({ tv_id: titleID }));
    }
  }, [titleID]);
  const singleTitleLoading = useSelector(
    (state) => state.singleTitle.singleTitleLoading
  );
  const similarTvsLoading = useSelector(
    (state) => state.similarTvs.similarTvsLoading
  );
  const similarTvs = useSelector((state) => state.similarTvs.similarTvs);
  const poster = singleTitle?.titlePoster
    ? `https://image.tmdb.org/t/p/w780${singleTitle?.titlePoster}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv2rNkxu82jwemyb3lSLkmbyLCqflQDMJPA&usqp=CAU";

  const directors = singleTitle?.principals?.filter(
    (item) => item.category === "crew" && item.character === "Director"
  );
  const writers = singleTitle?.principals?.filter(
    (item) => item.category === "crew" && item.character.includes("Writer")
  );
  const actors = singleTitle?.principals?.filter(
    (item) => item.category === "actor"
  );
  const producers = singleTitle?.principals?.filter(
    (item) => item.category === "crew" && item.character.includes("Producer")
  );

  // Get the names of directors, writers, actors, and producers
  const directorNames = directors?.map((director) => director.name);
  const writerNames = writers?.map((writer) => writer.name);
  const actorNames = actors?.slice(0, 5).map((actor) => actor.name);
  const producerNames = producers?.slice(0, 5).map((producer) => producer.name);

  // Create the strings with comma-separated names
  const directorsString = directorNames?.join(", ");
  const writersString = writerNames?.join(", ");
  const actorsString = actorNames?.join(", ");
  const producersString = producerNames?.join(", ");

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          {singleTitleLoading ? (
            <Box width={200} sx={{ mx: "auto" }}>
              <Skeleton height={30} />
            </Box>
          ) : (
            singleTitle?.originalTitle
          )}
        </Typography>

        <Box
          width={"80%"} // Set the width to 100% for full-screen width
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
          {singleTitleLoading ? (
            <Box width={500} height={750}>
              {" "}
              <Skeleton height={750} />
            </Box>
          ) : (
            <Box
              width={800} // Set the width of the inner box
              height={750} // Set the height of the inner box
              bgcolor="#979797"
              borderRadius={3}
              position="relative" // Position relative for absolute positioning of image
              overflow="hidden" // Hide overflowing content
            >
              <img
                src={poster}
                alt={singleTitle?.originalTitle}
                style={{
                  width: "100%", // Set width to 100% to cover the container
                  height: "100%", // Set height to 100% to cover the container
                  objectFit: "cover", // Prevent distortion, maintain aspect ratio
                  position: "absolute", // Position absolute for proper positioning
                  top: 0,
                  left: 0,
                }}
              />
            </Box>
          )}

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start" // Aligns children to the top
            marginLeft={10} // Add some space from the previous box
            paddingBottom={5}
            width={"70%"}
            paddingTop={5}
          >
            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 100,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {directorsString && `Directors: ${directorsString}`}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 100,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {writersString && `Writers: ${writersString}`}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 100,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Stars: {actorsString}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 100,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Producers: {producersString}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 100,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {"Genres: "}
              {singleTitle?.genres.map(({ genreTitle }, i) => {
                if (i !== singleTitle.genres.length - 1) {
                  return `${genreTitle}, `;
                } else {
                  return `${genreTitle}`;
                }
              })}
            </Typography>
          </Box>
        </Box>
        <Box height={60} />
      </div>
      {singleTitle?.description !== "" && (
        <>
          <Typography variant="h5" gutterBottom marginLeft={10}>
            Description
          </Typography>
          <Box
            width={"92%"} // Set the width of the inner box
            bgcolor={"#F4DDD6"}
            borderRadius={3}
            marginLeft={5}
            margin={"auto"}
          >
            <Typography variant="h6" gutterBottom padding={2}>
              {singleTitleLoading ? "loading" : singleTitle?.description}
            </Typography>
          </Box>
        </>
      )}
      <Box height={50} />
      <Typography variant="h5" gutterBottom marginLeft={10}>
        Actors and Crew
      </Typography>
      <Box height={50} />
      {singleTitleLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
          }}
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
        singleTitle && <Carousel items={singleTitle?.principals} />
      )}
      <Box height={50} />
      <Box height={50} />
      <Typography variant="h5" gutterBottom marginLeft={10}>
        Similar Tv-Series
      </Typography>
      <Box height={50} />
      {similarTvsLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
          }}
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
      ) : similarTvs.length > 0 ? (
        <Carousel items={similarTvs} />
      ) : (
        <Typography variant="h6" gutterBottom marginLeft={10}>
          No Similar Titles
        </Typography>
      )}
      <Box height={50} />
    </div>
  );
};

export default singleTitle;
