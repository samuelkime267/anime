import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from ".";

const HeroCard = ({ data }) => {
  return (
    <>
      <div className="group flex items-center justify-center flex-col md:flex-row w-full">
        <div className=" overflow-hidden mb-4 flex items-center justify-center md:mr-8">
          <Image
            src={data.entry.images.jpg.large_image_url}
            alt={data.entry.title}
            width={427}
            height={600}
            className="w-auto h-[18rem] md:h-[23em] lg:h-[30rem] hover:scale-110"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center md:items-start justify-center flex-col ">
          <h1 className="text-white capitalize text-center md:text-left font-bold text-2xl mb-3 md:text-4xl lg:text-5xl w-full md:mb-6 lg:mb-8">
            {data.entry.title.length > 35
              ? `${data.entry.title.substring(0, 35)}...`
              : data.entry.title}
          </h1>
          <h1 className="text-white capitalize text-center md:text-left text-[1.1rem] md:text-[1.3rem] md:mb-6 mb-3 lg:mb-8 font-medium">
            {data.episodes[0].title} out now
          </h1>
          <Link href={`/`}>
            <Button text="watch now" className="mb-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
