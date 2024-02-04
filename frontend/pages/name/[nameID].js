import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";

import { fetchSingleName } from "../../slices";

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
  return <Typography>{singleName?.name}</Typography>;
};

export default singleName;
