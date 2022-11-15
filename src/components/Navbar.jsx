import React from "react";
import logoIcon from "../assets/logo.svg";
import imageAvatar from "../assets/image-avatar.png";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container absolute w-[375px] h-[56px] left-[0px] top-[0px] s:w-[719px] s:h-[72px] s:top-[23px] s:left-[25px] s:rounded-[10px] md:w-[96px] md:h-[960px] md:top-[32px] md:left-[32px] md:rounded-[20px] bg-semiDarkBlue"></div>
      <img
        src={logoIcon}
        alt="logo"
        className="absolute w-[25px] h-[20px] left-[16px] top-[18px] s:w-[32px] s:h-[25.6px] s:left-[49px] s:top-[47px] md:left-[63.86px] md:top-[67.41px]"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="nav-icon absolute w-[16px] h-[16px] left-[121px] top-[20px] s:w-[20px] s:h-[20px] s:left-[298px] s:top-[50px] md:left-[70px] md:top-[168px]"
        viewBox="0 0 20 20"
        tabIndex={0}
      >
        <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="nav-icon absolute w-[16px] h-[16px] left-[161px] top-[20px] s:w-[20px] s:h-[20px] s:left-[350px] s:top-[50px] md:left-[70px] md:top-[228px]"
        tabIndex={0}
      >
        <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="nav-icon absolute w-[16px] h-[16px] left-[201px] top-[20px] s:w-[20px] s:h-[20px] s:left-[402px] s:top-[50px] md:left-[70px] md:top-[288px]"
        tabIndex={0}
      >
        <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
      </svg>
      <svg
        width="17"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="nav-icon absolute w-[13.54px] h-[16px] left-[241px] top-[20px] s:w-[16.92px] s:h-[20px] s:left-[454px] s:top-[50px] md:left-[72px] md:top-[348px]"
        tabIndex={0}
      >
        <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" />
      </svg>
      <img
        src={imageAvatar}
        alt="image-avatar"
        className="absolute w-[24px] h-[24px] left-[335px] top-[16px] s:w-[32px] s:h-[32px] s:left-[696px] s:top-[44px] md:w-[40px] md:h-[40px] md:left-[60px] md:top-[920px] border border-solid border-pureWhite rounded-[50%]"
      />
    </>
  );
};

export default Navbar;
