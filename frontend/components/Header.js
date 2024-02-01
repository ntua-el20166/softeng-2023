import {
  Box,
  Typography,
  Button,
  MenuItem,
  Menu,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const movieGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Western",
  "Documentary",
  "Family",
];

const Ratings = ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+"];

const Header = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#540000", // This sets the background color of the container box, not the buttons.
        color: "#ffffff",
        fontSize: "30px",
        textAlign: "center",
        padding: "40px",
        flex: 1,
      }}
    >
      <Button
        variant="contained"
        sx={{
          flex: 1,
          backgroundColor: "#540000", // Set the background color for the button
          color: "#ffffff", // Ensure text color is white for visibility
          "&:hover": {
            backgroundColor: "#6f0000", // Darken the button on hover for a visual feedback
          },
        }}
      >
        NTUAFLIX
      </Button>
      <Button
        variant="contained"
        onClick={handleClick1}
        sx={{
          flex: 1,
          backgroundColor: "#540000", // Same here
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#6f0000",
          },
        }}
      >
        Dropdown 1
      </Button>
      <Menu
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
      >
        {Ratings.map((rating) => (
          <MenuItem key={rating} onClick={handleClose1}>
            {rating}
          </MenuItem>
        ))}
      </Menu>
      <Button
        variant="contained"
        onClick={handleClick2}
        sx={{
          flex: 1,
          backgroundColor: "#540000", // And here
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#6f0000",
          },
        }}
      >
        Dropdown 2
      </Button>
      <Menu
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
      >
        {movieGenres.map((genre) => (
          <MenuItem key={genre} onClick={handleClose2}>
            {genre}
          </MenuItem>
        ))}
      </Menu>
      <TextField label="Search" variant="outlined" sx={{ flex: 1 }} />
    </Box>
  );
};

export default Header;
