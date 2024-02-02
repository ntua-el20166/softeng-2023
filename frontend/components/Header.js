import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, MenuItem, Menu, TextField, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { fetchResults } from "../slices";

const genres = [
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
  const router = useRouter();
  const dispatch = useDispatch();

  const [anchorEl1, setAnchorElRatings] = useState(null);
  const [anchorEl2, setAnchorElGenres] = useState(null);
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleClickRatings = (event) => {
    setAnchorElRatings(event.currentTarget);
  };

  const handleCloseRatings = () => {
    setAnchorElRatings(null);
  };

  const handleClickGenres = (event) => {
    setAnchorElGenres(event.currentTarget);
  };

  const handleCloseGenres = () => {
    setAnchorElGenres(null);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const trimmedInput = searchInput.trim();
    if (trimmedInput) {
      dispatch(fetchResults({ titlePart: trimmedInput }));
      router.replace(`/search-results/${trimmedInput}`);
      setSearchInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const itemsPerColumn = Math.ceil(genres.length / 2);
  const genresColumns = [
    genres.slice(0, itemsPerColumn),
    genres.slice(itemsPerColumn),
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
        onClick={handleClickRatings}
        sx={{
          flex: 1,
          backgroundColor: "#540000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#6f0000",
          },
        }}
      >
        {rating ? rating : "RATINGS"}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        onClose={handleCloseRatings}
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
      >
        {ratings.map((rating) => (
          <MenuItem
            key={rating}
            onClick={() => {
              handleCloseRatings();
              setRating(rating);
            }}
          >
            {rating}
          </MenuItem>
        ))}
      </Menu>
      <Button
        variant="contained"
        onClick={handleClickGenres}
        sx={{
          flex: 1,
          backgroundColor: "#540000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#6f0000",
          },
        }}
      >
        {genre ? genre : "GENRES"}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={handleCloseGenres}
      >
        <Grid container>
          {genresColumns.map((column, index) => (
            <Grid item key={index} xs={6}>
              {column.map((genre) => (
                <MenuItem
                  key={genre}
                  onClick={() => {
                    handleCloseGenres();
                    setGenre(genre);
                  }}
                >
                  {genre}
                </MenuItem>
              ))}
            </Grid>
          ))}
        </Grid>
      </Menu>
      {
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            name="search_input" // bc of console message
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search titles, people"
            inputProps={{ "aria-label": "search google maps" }}
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      }
    </Box>
  );
};

export default Header;
