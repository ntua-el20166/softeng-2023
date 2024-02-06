import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import { Carousel } from "../../components";
import { fetchSingleName } from "../../slices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const singleName = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const nameID = router.query.nameID;
  const singleName = useSelector((state) => state.singleName.singleName);
  useEffect(() => {
    if (nameID !== singleName?.nameID && nameID) {
      dispatch(fetchSingleName({ nameID: nameID }));
    }
  }, [nameID]);
  const singleNameLoading = useSelector(
    (state) => state.singleName.singleNameLoading
  );

  const poster = singleName?.namePoster
    ? `https://image.tmdb.org/t/p/w780${singleName?.namePoster}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv2rNkxu82jwemyb3lSLkmbyLCqflQDMJPA&usqp=CAU";

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          {singleNameLoading ? "loading" : singleName?.name}
        </Typography>

        <Box
          width={"90%"} // Set the width to 100% for full-screen width
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
              backgroundImage: `url(${poster})`, // Replace with your image URL
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></Box>
        </Box>
        <Box height={60} />
      </div>
      {singleName?.bio && (
        <>
          <Typography variant="h5" gutterBottom marginLeft={10}>
            Biography
          </Typography>
          <Box
            width={"92%"} // Set the width of the inner box
            bgcolor={"#F4DDD6"}
            borderRadius={3}
            marginLeft={5}
            margin={"auto"}
          >
            <Typography variant="h6" gutterBottom padding={2}>
              {singleNameLoading ? <Skeleton height={30} /> : singleName?.bio}
            </Typography>
          </Box>
        </>
      )}
      <Box height={50} />
      <Typography variant="h5" gutterBottom marginLeft={10}>
        Movies they participated in
      </Typography>

      <Box height={50} />
      {singleNameLoading ? (
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
        singleName && <Carousel items={singleName?.nameTitles} />
      )}
      <Box height={50} />
    </div>
  );
};

export default singleName;
