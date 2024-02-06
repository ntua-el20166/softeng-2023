import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import { Carousel } from "../../components";
import { fetchSingleName } from "../../slices";

const singleName = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const nameID = router.query.nameID;
  const singleName = useSelector((state) => state.singleName.singleName);
  console.log(singleName);
  useEffect(() => {
    if (nameID !== singleName?.nameID && nameID) {
      dispatch(fetchSingleName({ nameID: nameID }));
    }
  }, [nameID]);
  const singleNameLoading = useSelector(
    (state) => state.singleName.singleNameLoading
  );
  // Helper function to map professions
  const getProfessionDisplayName = (profession) => {
    switch (profession) {
      case "Acting":
        return "Actor";
      case "Directing":
        return "Director";
      case "Writing":
        return "Writer";
      case "Editing":
        return "Editor";
      case "Production":
        return "Producer";
      case "Art":
        return "Artist";
      case "Camera":
        return "Cinematographer";
      default:
        return "";
    }
  };

  // Helper function to format years
  const formatYears = (birthYr, deathYr) => {
    const formattedBirthYear = birthYr || "unknown";
    const formattedDeathYear = deathYr ? ` - ${deathYr}` : "";
    return `${formattedBirthYear}${formattedDeathYear}`;
  };
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          {singleNameLoading ? "loading" : singleName?.name}
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
            width={500} // Set the width of the inner box
            height={750} // Set the height of the inner box
            marginLeft={5}
            bgcolor={"#979797"}
            borderRadius={3}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w780${singleName?.namePoster})`, // Replace with your image URL
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* Content of the inner box */}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start" // Aligns children to the top
            marginLeft={10} // Add some space from the previous box
            paddingBottom={5}
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
              Profession:{" "}
              {singleNameLoading
                ? "loading"
                : getProfessionDisplayName(singleName?.profession)}
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
              {singleNameLoading
                ? "loading"
                : formatYears(singleName?.birthYr, singleName?.deathYr)}
            </Typography>
          </Box>
        </Box>
        <Box height={60} />
      </div>
      <Typography
        variant="h5"
        gutterBottom
        marginLeft={10}
        style={{ fontWeight: "bold" }}
      >
        Biography
      </Typography>
      <Box
        width={1500} // Set the width of the inner box
        bgcolor={"#F4DDD6"}
        borderRadius={3}
        marginLeft={5}
        margin={"auto"}
      >
        <Typography variant="h6" gutterBottom padding={2}>
          {singleNameLoading ? "loading" : singleName?.bio}
        </Typography>
      </Box>
      <Box height={50} />
      <Typography
        variant="h5"
        gutterBottom
        marginLeft={10}
        style={{ fontWeight: "bold" }}
      >
        Movies he participated in
      </Typography>
      {singleNameLoading
        ? "loading movies/tv shows that participated in"
        : singleName && <Carousel items={singleName?.nameTitles} />}
      <Box height={50} />
    </div>
  );
};

export default singleName;
