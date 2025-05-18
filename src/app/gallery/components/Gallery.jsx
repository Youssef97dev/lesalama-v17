"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/c7pxpoyrhtgt80hcbtex",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/u8lngfyi26ehndtx4ubm",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/vog6ifkonvohjjtnflyc",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/hvwswfdicob69b06d0z4",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/zzoxtsux12ojdslcao4h",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/kvfphmwbtxsf6wbo2yjh",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/cfskudtrnl6uuin7qrng",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/ka2we9huh44shvykolmx",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/yqpkwsnjmluzl82bsabu",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/jjkwqqyswyermkjkriue",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/uy7yazm3jwakf8bb34nj",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/axzgnqb1qqi3l7u0ystj",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/dljc34xjbmfvh4eup5yr",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/oe6ohbt2vhngxspxedro",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/twwsqcdzofh44tguuoyy",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  return (
    <div id="gallery" className="mx-auto pb-5 pt-20 px-4 ">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems?.map((image, index) => (
          <Link href={image.src} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage src={image.src} alt={`Le salama ${index}`} />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
