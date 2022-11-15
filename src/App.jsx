import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchFiled from "./components/SearchFiled";
import list from "./data.json";
import Home from "./pages/Home";

const App = () => {
  const [shows, setShows] = useState(list);
  return (
    <div className="mx-auto">
      <Navbar />
      <SearchFiled />
      <Home shows={shows} />
    </div>
  );
};

export default App;
