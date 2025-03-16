import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight , FaAngleLeft } from "react-icons/fa";
const BannerHome = () => {
  const bannerData = useSelector((state) => state.moviesData.bannerData);
  const imageUrl = useSelector((state) => state.moviesData.imageUrl);
  const [currentImage , setCurrenttImage] = useState(5);  
const handleNext = ()=>{
    setCurrenttImage((prev) => prev + 1 >= bannerData.length? 0 : prev + 1)

}

const handlePrevious = ()=>{
    setCurrenttImage((prev) => prev - 1 < 0? bannerData.length - 1 : prev - 1)

}
useEffect(()=>{
    const interval = setInterval(() => handleNext(), 3000);
    return () => clearInterval(interval);

},[imageUrl ,bannerData])
    

  return (
    <section className="w-full h-screen">
      <div className="flex min-h-full overflow-hidden">
        {bannerData.length > 0 &&
          bannerData.map((item) => (
            <div key={Math.random()} className="min-w-full relative h-screen" style={{transform :`translateX(-${currentImage * 100}%)` }}>
              <div className="w-full h-full">
                <img
                  key={Math.random()}
                  src={imageUrl + item.backdrop_path}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* button to next image */}
              <div className="hidden lg:flex text-2xl text-white z-20 px-4 justify-between absolute top-0 w-full h-full">
                <button onClick={handleNext} className="hover:scale-125 transition" >
                  <FaAngleLeft/>
                </button>
                <button onClick={handlePrevious} className="hover:scale-125 transition-all">
                  <FaAngleRight/>
                </button>
              </div>
              <div className="absolute top-0 w-full h-full  bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mb-3 mx-auto w-full absolute px-3 bottom-0 max-w-md">
                <h2 className="text-white text-2xl lg:text-4xl drop-shadow-2xl ">
                  {item.title ? item.title : item.name}
                </h2>
                <p className="text-ellipsis line-clamp-3 my-2">
                  {item.overview}
                </p>
                <div className="flex items-center gap-4">
                  <p>Rating : {Number(item.vote_average).toFixed(1)}+</p>
                  <span>|</span>
                  <p>View : {Number(item.popularity).toFixed(0) * 1000}</p>
                </div>
                <button className="bg-white px-4 py-2 text-black font-bold rounded mt-3">
                  Play Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default BannerHome;
