import React from "react";
import { v4 as uuid } from "uuid";
import movieCategory from "../assets/icon-category-movie.svg";
import tvCategory from "../assets/icon-category-tv.svg";

const SearchResultsList = ({
  searchQuery,
  searchResults,
  handleToggleBookmark,
}) => {
  return (
    <div className="ml-[16px] mt-[128px] s:mt-[193px] md:ml-[164px] md:mt-[130px]">
      <h1 className="w-full h-[25px] text-[20px] my-[24px]  s:h-[40px] s:text-[32px] s:mt-[39px] text-pureWhite font-light leading-6 s:leading-10 md:mb-[32px]">
        {`Found ${searchResults.length} results for '${searchQuery}'`}
      </h1>
      <section className="grid grid-cols-2 w-[343px] gap-x-[15px] gap-y-[16px] s:grid-cols-3 s:w-[719px] s:gap-[24px] md:grid-cols-4 md:w-[1240px] md:gap-y-[32px] md:gap-x-[40px]">
        {searchResults.map((show) => {
          const imgUrl = show.thumbnail.regular.large;
          return (
            <div
              key={uuid()}
              className="relative s:w-[220px] s:h-[192px] md:w-[280px] md:h-[226px]"
              tabIndex={0}
            >
              <div className="thumbnailContainer hover:cursor-pointer">
                <div className="playIconContainer hidden">
                  <div className="absolute left-[27%] top-[29%] w-[117px] h-[48px] rounded-[28px] bg-pureWhite opacity-[0.25] mix-blend-normal"></div>
                  <div className="absolute left-[27%] top-[29%] w-[117px] h-[48px] rounded-[28px]">
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-[7.69%] top-[18.75%] right-[66.67%] bottom-[18.75%]"
                    >
                      <path
                        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                        fill="#FFF"
                      />
                    </svg>
                    <p className="absolute left-[49.57%] top-[18.75%] right-[20.51%] w-[35px] h-[23px] text-[18px]">
                      Play
                    </p>
                  </div>
                </div>
                <img
                  src={`/src/${imgUrl}`}
                  alt="show-thumbnail"
                  className="w-[164px] h-[110px] s:w-[220px] s:h-[140px] md:w-[280px] md:h-[174px] rounded-[8px]"
                />
              </div>

              <div className="absolute w-[32px] h-[32px] top-[8px] right-[8px] rounded-[50%] bg-darkBlue mix-blend-normal opacity-50 "></div>
              <div
                className="bookmarkContainer absolute w-[32px] h-[32px] top-[8px] right-[8px] rounded-[50%] md:hover:bg-pureWhite hover:cursor-pointer"
                onClick={() => handleToggleBookmark(show)}
              >
                {show.isBookmarked ? (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fullBookmark absolute w-[11.67px] h-[14px] top-[9px] left-[10px] fill-pureWhite"
                  >
                    <path
                      d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                      strokeWidth="1.5"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="emptyBookmark absolute w-[11.67px] h-[14px] top-[9px] left-[10px] stroke-pureWhite"
                  >
                    <path
                      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
              <div className="flex justify-start">
                <p className="opacity-[0.75] mix-blend-normal text-[11px] mt-[5px] md:text-[13px]">
                  {show.year}
                </p>
                <span className="w-[2px] h-[2px] mt-[13px] ml-[9px] rounded-[50%] bg-pureWhite opacity-[0.5] mix-blend-normal"></span>
                {show.category === "Movie" ? (
                  <img
                    src={movieCategory}
                    alt="movie-icon"
                    className="w-[10px] h-[10px] mt-[9px] ml-[7px] mr-[5px] md:w-[12px] md:h-[12px]"
                  />
                ) : (
                  <img
                    src={tvCategory}
                    alt="tv-icon"
                    className="w-[10px] h-[10px] mt-[8px] mx-[5px] md:w-[12px] md:h-[12px]"
                  />
                )}
                <p className="opacity-[0.75] mix-blend-normal text-[11px] mt-[5px] md:text-[13px]">
                  {show.category}
                </p>
                <span className="w-[2px] h-[2px] mt-[13px] ml-[9px] rounded-[50%] bg-pureWhite opacity-[0.5] mix-blend-normal"></span>
                <p className="opacity-[0.75] mix-blend-normal text-[11px] ml-[5px] mt-[5px] md:text-[13px]">
                  {show.rating}
                </p>
              </div>
              <p className="text-[14px] md:text-[18px]">{show.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SearchResultsList;
