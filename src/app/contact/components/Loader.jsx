"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Buttons from "@/components/Buttons";
import Container from "./Container";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Container />
          <div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
          <BounceLoader color="#152604" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
