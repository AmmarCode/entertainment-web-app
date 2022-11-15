import React from "react";
import searchIcon from "../assets/icon-search.svg";

const SearchFiled = () => {
  return (
    <>
      <section className="absolute flex flex-row w-[257px] h-[24px] left-[16px] top-[80px] s:h-[32px] s:w-[381px] s:left-[25px] s:top-[128px] md:left-[164px] md:top-[64px]">
        <img
          src={searchIcon}
          alt="search-icon"
          className="absolute w-[24px] h-[24px] s:w-[32px] s:h-[32px] left-[0px] top-[0px]"
        />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="absolute left-[15.56%] right-[1.17%] top-[calc(50% - 20px/2)] s:left-[14.7%] s:right-[1.05%] s:top-[calc(50% - 30px/2)] 
                     text-[16px] opacity-[49.79%] focus:opacity-[1] text-pureWhite bg-darkBlue font-light s:text-[24px] focus:outline-none caret-red"
        />
      </section>
    </>
  );
};

export default SearchFiled;
