"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const imagesMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/ge6qqi3nvcd5ndj2klmn",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/spffrogpvepmupfigpcd",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-V2/ypw98v2x57uxrawqaucu",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/k36u7ezamlvdxte50jxo",
];

const imagesDesktop = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-V2/cpgsvredpzheozexmdur",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-V2/urz9wpnkvpkgvjukvhxy",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/u8lngfyi26ehndtx4ubm",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/oe6ohbt2vhngxspxedro",
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesDesktop.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-[50vh] block lg:hidden">
        {imagesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen hidden lg:block">
        {imagesDesktop.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slides;
