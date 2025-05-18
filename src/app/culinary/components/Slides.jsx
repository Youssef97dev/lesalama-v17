"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const imagesMobile = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/yvbd9e4tc5sgkb5t5ery",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/fj3o2usyohqiowhaldis",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/ryaqmmhrlgjsjw25ouyu",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/twwsqcdzofh44tguuoyy",
];

const imagesDesktop = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/aed9h6xneawaaqh9aqz4",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/platmobile_muezyg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-V2/dg0ywshnfws41a3p64r2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-4_wgjmar",
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
