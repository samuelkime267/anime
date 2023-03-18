import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ data }) => {
  return (
    <>
      <Link href={`/`} className="group">
        <div className="w-full h-[230px] xs:h-[280px] xl:h-[320px] 2xl:h-[350px] overflow-hidden mb-4 ">
          <Image
            src={data.images.jpg.large_image_url}
            alt={data.title}
            width={427}
            height={600}
            className="w-full h-full object-cover hover:scale-110"
          />
        </div>
        <div>
          <h1 className="text-white group-hover:text-lemon capitalize">
            {data.title.length > 20
              ? `${data.title.substring(0, 12)}...`
              : data.title}
          </h1>
          <div className="text-white mt-[5px] flex items-center justify-start">
            {data.score}{" "}
            <FontAwesomeIcon icon={faStar} className="ml-[5px] w-4" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
