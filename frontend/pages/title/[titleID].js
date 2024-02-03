import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";

import { fetchSingleTitle } from "../../slices";

const singleTitle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const titleID = router.query.titleID;
  useEffect(() => {
    if (titleID !== singleTitle?.titleID && titleID) {
      dispatch(fetchSingleTitle({ titleID: titleID }));
    }
  }, [titleID]);
  const singleTitle = useSelector((state) => state.singleTitle.singleTitle);
  const singleTitleLoading = useSelector(
    (state) => state.singleTitle.singleTitleLoading
  );
  return <Typography>{singleTitle?.originalTitle}</Typography>;
};

export default singleTitle;
