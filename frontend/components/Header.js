import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, MenuItem, Menu, TextField, Grid } from "@mui/material";
import React, { useState } from "react";

import { fetchResults } from "../slices";

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

const ratings = ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+"];

const Header = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    // change name of func
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const itemsPerColumn = Math.ceil(movieGenres.length / 2);
  const genresColumns = [
    movieGenres.slice(0, itemsPerColumn),
    movieGenres.slice(itemsPerColumn),
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#540000",
        color: "#ffffff",
        fontSize: "30px",
        textAlign: "center",
        padding: "30px",
        marginBottom: "70px",
        "& > *:not(:last-child)": {
          marginRight: "200px",
        },
      }}
    >
      <Link href="/">
        <Button
          variant="text"
          sx={{
            flex: 1,
            backgroundColor: "#540000",
            color: "#ffffff",
            fontSize: 28,
            fontWeight: "bold",
            textShadow: "0px 8px 4px rgba(0, 0, 0, 0.5)",
            borderRadius: "15px",
            "&:hover": {
              backgroundColor: "#4a0000",
            },
          }}
        >
          NTUAFLIX
        </Button>
      </Link>
      <Button
        variant="contained"
        onClick={handleClick1}
        sx={{
          flex: 1,
          backgroundColor: "#540000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#6f0000",
          },
        }}
      >
        Ratings
        <ArrowDropDownIcon />
      </Button>
      <Menu
        onClose={handleClose1}
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
      >
        {ratings.map((rating) => (
          <MenuItem
            key={rating}
            onClick={() => {
              handleClose1();
              setRating(rating);
            }}
          >
            {rating}
          </MenuItem>
        ))}
      </Menu>
      <Button
        variant="contained"
        onClick={handleClick2}
        sx={{
          flex: 1,
          backgroundColor: "#540000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#6f0000",
          },
        }}
      >
        Genres
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
      >
        <Grid container>
          {genresColumns.map((column, index) => (
            <Grid item key={index} xs={6}>
              {column.map((genre) => (
                <MenuItem key={genre} onClick={handleClose2}>
                  {genre}
                </MenuItem>
              ))}
            </Grid>
          ))}
        </Grid>
      </Menu>
      <TextField
        label="Search titles, people"
        variant="standard"
        sx={{
          flex: 3,
          //color: "#ffffff",
        }}
      />
    </Box>
  );
};

export default Header;
