import { Carousel } from "../components";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

const Home = () => {
  const items = [
    {
      name: "First Movie",
      color: "#EEE",
    },
    {
      name: "Second Movie",
      color: "#FFF",
    },
  ];
  // const [data, setData] = useState("");
  // const [searchparams, setSearchparams] = useState();

  // useEffect(() => {

  //   setData (express.send('http:locaslhost.. url back/searchTitle', title))
  // }, [searchparams])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h3"
            color="inherit"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "600",
              fontSize: "150px",
              letterSpacing: "normal",
              color: "#730000",
              WebkitTextStroke: "1px #000000",
              textAlign: "center",
              margin: "auto",
              width: "fit-content",
            }}
          >
            N T U A F L I X
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        Featured Movies
      </Typography>
      <Carousel items={items} />
    </Box>
  );
};

export default Home;
