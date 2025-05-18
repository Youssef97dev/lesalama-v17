import React from "react";
import Slides from "./Slides";
import About from "./About";

const Container = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-center items-center gap-6 pt-14 pb-20 lg:pb-0">
      <div className="w-full">
        <Slides />
      </div>
      <div className="w-full h-full">
        <About />
      </div>
    </div>
  );
};

export default Container;
