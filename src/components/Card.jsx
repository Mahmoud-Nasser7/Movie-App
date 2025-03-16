import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ movie, index ,trending }) => {
  const imageUrl = useSelector((state) => state.moviesData.imageUrl); 
   
  return (
    <Link to={"/"+'movie'+"/"+movie.id} className="min-w-[300px] group relative max-w-[350px] h-80  overflow-hidden">
     {
       movie.poster_path? (<img src={imageUrl + movie.poster_path} alt={movie.title || movie.name} />) : (<p className="flex justify-center items-center h-full text-2xl">No Image Found</p>)
       
     }
      {trending && <div className="absolute group-hover:opacity-0 transition-opacity duration-300 overflow-hidden rounded-r-full py-1 top-2 w-[100%] pl-3 bg-black opacity-75">
        #{index} Trending
      </div>}
      <div className="absolute py-1 backdrop-blur-sm bottom-0 w-full h-16 pl-3 text-white bg-black/75">
        <h2 className="text-ellipsis line-clamp-1 font-semibold">
          {movie.title || movie.name}
        </h2>
        <div className="flex justify-between">
          <p className="text-sm mt-2">{moment(movie.release_date).format("MMM Do YY")}</p>
          <p className="text-sm mt-2 mr-2">{Number(movie.vote_average).toFixed(1)}⭐</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
