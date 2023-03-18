import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroCard = ({ data }) => {
  return (
    <>
      <Link
        href={`/`}
        className="group flex items-center justify-center flex-col"
      >
        <div className=" overflow-hidden mb-4 flex items-center justify-center">
          <Image
            src={data.entry.images.jpg.large_image_url}
            alt={data.entry.title}
            width={427}
            height={600}
            className="h-[25rem] w-auto hover:scale-110"
          />
        </div>
        <div>
          <h1 className="text-white group-hover:text-lemon capitalize text-center">
            {data.entry.title}
          </h1>
        </div>
      </Link>
    </>
  );
};

export default HeroCard;
