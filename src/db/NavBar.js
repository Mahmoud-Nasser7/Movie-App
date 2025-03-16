import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const Navigation = [
  
  { label: "TV Shows", href: "tv" , icon : PiTelevisionFill },
  { label: "Movies", href: "movie" , icon : BiSolidMoviePlay },
];

export const mobilenav = [
  { label: "Home", href: "/" , icon : MdHome  },
  ...Navigation
  
];
