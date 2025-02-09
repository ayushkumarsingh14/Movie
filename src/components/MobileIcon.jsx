import React from 'react';
import { IoMdHome } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

    export const navigation = [
        {
            label: "Tv Shows",
            href: "tv",
            icon: <FaTv/>
        },
        {
             label: "Movies",
             href: "movie",
             icon: <BiMoviePlay/>
        }
    ]

    export const mobileIcon = [
        {
            label: "Home",
            href: "/",
            icon: <IoMdHome/>
        },
        ...navigation,
        {
            label: "Search",
            href: "/search",
            icon: <IoSearchOutline/>
        }
    ]


