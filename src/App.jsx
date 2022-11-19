import React, { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import list from "./data.json";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";

const App = () => {
  const [shows, setShows] = useLocalStorage("shows", list);
  const [activeNav, setActiveNav] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useLocalStorage(
    "search results",
    []
  );

  const handleNavIconClick = (navIcon) => {
    setActiveNav(navIcon);
    setSearchResults([]);
    setSearchQuery("");
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    activeNav === "home" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return show.title.toLowerCase().includes(searchQuery.toLowerCase());
          })
        )
      : activeNav === "movies" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return (
              show.category === "Movie" &&
              show.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        )
      : activeNav === "tv series" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return (
              show.category === "TV Series" &&
              show.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        )
      : activeNav === "bookmarks" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return (
              show.isBookmarked &&
              show.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        )
      : setSearchResults([]);
  };

  const handleToggleBookmark = (listShow) => {
    // console.log("initial bookmark state", listShow.isBookmarked);
    setShows((previousState) => {
      // console.log(previousState);
      return previousState.map((show) => {
        if (show.title === listShow.title) {
          return { ...show, isBookmarked: !show.isBookmarked };
        } else {
          return show;
        }
      });
    });
    // console.log("After the toggle", listShow.isBookmarked);
  };

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    activeNav === "home" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return show.title.toLowerCase().includes(searchQuery.toLowerCase());
          })
        )
      : activeNav === "movies" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return (
              show.category === "Movie" &&
              show.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        )
      : activeNav === "tv series" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return (
              show.category === "TV Series" &&
              show.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        )
      : activeNav === "bookmarks" && searchQuery
      ? setSearchResults(
          shows.filter((show) => {
            return (
              show.isBookmarked &&
              show.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
        )
      : setSearchResults([]);
  }, [shows]);

  return (
    <div className="w-full">
      <Navbar activeNav={activeNav} handleNavIconClick={handleNavIconClick} />
      <SearchField
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              shows={shows}
              searchResults={searchResults}
              searchQuery={searchQuery}
              handleToggleBookmark={handleToggleBookmark}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              shows={shows}
              searchResults={searchResults}
              searchQuery={searchQuery}
              handleToggleBookmark={handleToggleBookmark}
            />
          }
        />
        <Route
          path="/tv-series"
          element={
            <TvSeries
              shows={shows}
              searchResults={searchResults}
              searchQuery={searchQuery}
              handleToggleBookmark={handleToggleBookmark}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              shows={shows}
              searchResults={searchResults}
              searchQuery={searchQuery}
              handleToggleBookmark={handleToggleBookmark}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
