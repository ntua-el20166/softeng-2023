import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";

import { fetchSingleMovie } from "../../../slices";

const singleTitle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const titleID = router.query.titleID;
  const singleTitle = useSelector((state) => state.singleTitle.singleTitle);
  useEffect(() => {
    if (titleID !== singleTitle?.titleID && titleID) {
      dispatch(fetchSingleMovie({ titleID: titleID }));
    }
  }, [titleID]);
  const singleTitleLoading = useSelector(
    (state) => state.singleTitle.singleTitleLoading
  );
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h5" gutterBottom>
          {singleTitleLoading ? "loading" : singleTitle?.originalTitle}
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

export default singleTitle;
