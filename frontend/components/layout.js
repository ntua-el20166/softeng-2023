import { useEffect, useState } from "react";
import { default as Header } from "./Header";
import { default as Footer } from "./Footer";
import ErrorModal from "./ErrorModal";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Layout = ({ children, statusCode }) => {
  const [hasError, setHasError] = useState(false);
  const popularMoviesError = useSelector((state) => state.popularMovies.error);
  const resultsError = useSelector((state) => state.results.error);

  useEffect(() => {
    if (popularMoviesError || resultsError) {
      // add || resultsError
      setHasError(true);
    }
  }, [popularMoviesError, resultsError]); // add , resultsError

  return (
    <div style={{ width: "100%" }}>
      <Header />
      {hasError && (
        <ErrorModal
          statusCode={statusCode}
          onClose={() => setHasError(false)}
        />
      )}
      {!hasError && children}
      {hasError && (
        <Box
          sx={{
            minHeight: "100vh",
          }}
        />
      )}
      <Footer />
    </div>
  );
};

export default Layout;
