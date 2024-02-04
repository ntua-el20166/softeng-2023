import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";

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
  return <Typography>{singleTitle?.originalTitle}</Typography>;
};

export default singleTitle;
