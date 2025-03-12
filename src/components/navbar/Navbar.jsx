"use client";

import styles from "./Navbar.module.scss";
import * as React from "react";
import { useRouter } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const router = useRouter();
  const [city, setCity] = React.useState("");

  const handleCitySearch = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      router.push(`/details/${city.trim()}`);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={styles.navbar}>
          <img
            className={styles.icon}
            src="/weatherlyIcon.png"
            alt="icon"
            width="40"
            height="40"
            onClick={() => router.push("/home")}
          />

          <Typography
            className={styles.title}
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <div className={styles.btns}>
            <Button color="inherit" onClick={() => router.push("/home")}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => router.push("/saved-locations")}
            >
              Saved
            </Button>
            <Button color="inherit" onClick={() => router.push("/history")}>
              History
            </Button>
          </div>
          <Search className={styles.searchbar}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search City"
              inputProps={{ "aria-label": "search" }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleCitySearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
