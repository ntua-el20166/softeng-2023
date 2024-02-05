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

const ratings = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const lastSearchInput = useSelector((state) => state.results.lastSearchInput);

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
    if (genre === "" && searchInput === "") {
      return;
    }
    const searchParams = {
      titlePart: searchInput,
      rating: Number(rating),
      genre,
    };
    if (searchParams !== lastSearchInput.titlePart) {
      dispatch(fetchResults({ ...searchParams, searchParams }));
    }
    if (searchInput !== "" || rating || genre) {
      const searchURL = `/search-results?searchInput=${encodeURIComponent(searchInput)}&rating=${encodeURIComponent(rating)}&genre=${encodeURIComponent(genre)}`;
      router.replace(searchURL);
    }
    setSearchInput("");
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
    <Box sx={{ flexGrow: 1, marginBottom: "70px" }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ backgroundColor: "#540000", color: "#ffffff", padding: "10px" }}
      >
        <Grid item xs={2}>
          <Button
            onClick={() => router.replace("/")}
            variant="text"
            sx={{
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
        </Grid>

        <Grid item xs>
          <Button
            variant="contained"
            onClick={handleClickRatings}
            sx={{
              minWidth: 200,
              flex: 1,
              backgroundColor: "#FFFFFF",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#F4DDD6",
              },
            }}
          >
            {rating ? `${rating}+` : "RATINGS"}
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
                {`${rating}+`}
              </MenuItem>
            ))}
          </Menu>
        </Grid>

        <Grid item xs>
          <Button
            variant="contained"
            onClick={handleClickGenres}
            sx={{
              minWidth: 200,
              flex: 1,
              backgroundColor: "#FFFFFF",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#F4DDD6",
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
        </Grid>

        <Grid item>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300, // Set a fixed width for the search bar or adjust as needed
              "&:hover": {
                backgroundColor: "#F4DDD6",
              },
            }}
          >
            <IconButton
              type="button"
              aria-label="search"
              onClick={() => {
                setRating("");
                setGenre("");
                setSearchInput("");
              }}
            >
              x
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search titles, people"
              inputProps={{ "aria-label": "search" }}
              value={searchInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <IconButton
              type="submit"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => handleSearch()}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
