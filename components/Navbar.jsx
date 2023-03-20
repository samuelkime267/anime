import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [currentNavLinks, setCurrentNavLinks] = useState("");
  const [isNav, setIsNav] = useState(false);
  const openCloseNav = function (status) {
    setIsNav(status);
    setCurrentNavLinks("");
  };
  const openCloseNavLinks = function (navLink) {
    if (navLink === currentNavLinks) {
      setCurrentNavLinks("");
      return;
    }
    setCurrentNavLinks(navLink);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue z-[10000] flex items-center justify-center min-h-[4rem]">
        <div className="mx-auto px-4 lg:px-8 w-full max-w-screen-2xl flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faClapperboard}
                className="text-lemon w-8"
              />
            </Link>
          </div>
          <div
            className={`fixed top-0 left-0 w-full  h-full flex-col md:flex-row bg-blue md:static flex items-start md:items-center justify-center ${
              isNav ? "" : "translate-x-full md:translate-x-0"
            }`}
          >
            <button
              onClick={() => openCloseNav(false)}
              className="md:hidden ml-auto mb-auto mr-4 mt-4"
            >
              <FontAwesomeIcon icon={faXmark} className="w-6 text-lemon" />
            </button>
            <div className="group text-white relative w-full md:w-fit md:mt-0 mt-2">
              <h1
                onClick={() => openCloseNavLinks("anime")}
                className={`px-4 mb-2 md:mb-0 mt-6 md:mt-0  md:px-7 md:py-5 hover:bg-blue capitalize text-2xl md:text-[1.1rem] font-medium ${
                  currentNavLinks === "anime" ? "bg-blue " : ""
                }`}
              >
                anime
              </h1>
              <ul
                className={`md:absolute top-full left-0 w-full md:w-[18rem] p-4  bg-darkBlue md:bg-blue   ${
                  currentNavLinks === "anime" ? "" : " hidden "
                }`}
              >
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    anime search
                  </Link>
                </li>
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    top anime
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group text-white relative w-full md:w-fit">
              <h1
                onClick={() => openCloseNavLinks("manga")}
                className={`px-4 mb-2 md:mb-0 mt-6 md:mt-0  md:px-7 md:py-5 hover:bg-blue capitalize text-2xl md:text-[1.1rem] font-medium ${
                  currentNavLinks === "manga" ? "bg-blue " : ""
                }`}
              >
                manga
              </h1>
              <ul
                className={`md:absolute top-full left-0 w-full md:w-[18rem] p-4  bg-darkBlue md:bg-blue   ${
                  currentNavLinks === "manga" ? "" : " hidden "
                }`}
              >
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    manga search
                  </Link>
                </li>
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    top manga
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group text-white relative w-full md:w-fit">
              <h1
                onClick={() => openCloseNavLinks("community")}
                className={`px-4 mb-2 md:mb-0 mt-6 md:mt-0  md:px-7 md:py-5 hover:bg-blue capitalize text-2xl md:text-[1.1rem] font-medium ${
                  currentNavLinks === "community" ? "bg-blue " : ""
                }`}
              >
                community
              </h1>
              <ul
                className={`md:absolute top-full left-0 w-full md:w-[18rem] p-4  bg-darkBlue md:bg-blue   ${
                  currentNavLinks === "community" ? "" : " hidden "
                }`}
              >
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    community search
                  </Link>
                </li>
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    top community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group text-white relative w-full md:w-fit mb-auto md:mb-0">
              <h1
                onClick={() => openCloseNavLinks("news")}
                className={`px-4 mb-2 md:mb-0 mt-6 md:mt-0  md:px-7 md:py-5 hover:bg-blue capitalize text-2xl md:text-[1.1rem] font-medium ${
                  currentNavLinks === "news" ? "bg-blue " : ""
                }`}
              >
                news
              </h1>
              <ul
                className={`md:absolute top-full left-0 w-full md:w-[18rem] p-4  bg-darkBlue md:bg-blue   ${
                  currentNavLinks === "news" ? "" : " hidden "
                }`}
              >
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    news search
                  </Link>
                </li>
                <li className="py-2">
                  <Link href={"/"} className="capitalize py-4">
                    top news
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="w-6 text-lemon"
              />
            </Link>
            <button
              className="ml-6 md:hidden"
              onClick={() => openCloseNav(true)}
            >
              <FontAwesomeIcon icon={faBars} className="w-6 text-lemon" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
