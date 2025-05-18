import React from "react";
import Slides from "./Slides";
import Culinary from "./Culinary";

const Container = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-center items-center gap-6 pt-14 pb-20 lg:pb-0">
      <div className="w-full lg:w-[65%]">
        <Slides />
      </div>
      <div className="w-full lg:w-[35%] h-full">
        <Culinary />
      </div>
    </div>
  );
};

export default Container;
