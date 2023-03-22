import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border border-transparent border-t-white/20 flex items-center justify-center flex-col p-4 lg:p-8 mt-24">
        <div className="mb-4">
          <h1 className="capitalize text-lemon text-4xl font-bold">
            anime website
          </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <Link
            href={"/"}
            className="capitalize text-white hover:text-lemon text-2xl m-2"
          >
            home
          </Link>
          <Link
            href={"/"}
            className="capitalize text-white hover:text-lemon text-2xl m-2"
          >
            anime
          </Link>
          <Link
            href={"/"}
            className="capitalize text-white hover:text-lemon text-2xl m-2"
          >
            manga
          </Link>
        </div>
        <div className="text-white mt-4 mb-2 flex items-center justify-center flex-col">
          <p className="capitalize font-medium mb-4">
            website created by{" "}
            <span className="text-lemon uppercase text-[1.1rem]">
              samuel kime
            </span>
          </p>
          <p className="uppercase">&copy;2023 all rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
