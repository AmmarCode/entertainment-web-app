import React from "react";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import SearchResultsList from "../components/SearchResultsList";

const Home = ({ shows, searchQuery, searchResults, handleToggleBookmark }) => {
  if (searchResults.length === 0) {
    return (
      <div className="ml-[16px] mt-[128px] s:mt-[193px] md:ml-[164px] md:mt-[130px]">
        <Trending
          shows={shows}
          searchResults={searchResults}
          handleToggleBookmark={handleToggleBookmark}
        />
        <Recommended
          shows={shows}
          searchResults={searchResults}
          handleToggleBookmark={handleToggleBookmark}
        />
      </div>
    );
  } else {
    return (
      <SearchResultsList
        searchQuery={searchQuery}
        searchResults={searchResults}
        handleToggleBookmark={handleToggleBookmark}
      />
    );
  }
};

export default Home;
