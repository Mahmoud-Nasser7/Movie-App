import React from "react";
import BannerHome from "../components/BannerHome";
import TheSlider from "../components/TheSlider";
import { useSelector } from "react-redux";
import UseFetch from "../Hooks/UseFetch";
import Loading from "../components/Loading";

const Home = () => {
  const trendingMovies = useSelector((state) => state.moviesData.bannerData);

  const { data: nowPlayingData, loading: nowPlayingLoading } = UseFetch({
    endpoint: "/movie/now_playing",
  });
  const { data: toprated, loading: topRatedLoading } = UseFetch({
    endpoint: "/movie/top_rated",
  });
  const { data: popular, loading: popularLoading } = UseFetch({
    endpoint: "movie/popular",
  });
  const { data: AiringToday, loading: airingTodayLoading } = UseFetch({
    endpoint: "tv/airing_today",
  });

  return (
    <div>
      <BannerHome />
      <div className="container mx-auto px-7 my-10">
        {trendingMovies ? (
          <TheSlider
            title={"Trending Show"}
            SlideData={trendingMovies}
            trending={true}
          />
        ) : (
          <Loading />
        )}

        {nowPlayingLoading ? (
          <Loading />
        ) : (
          <TheSlider
            title={"Now Playing"}
            SlideData={nowPlayingData}
            trending={false}
          />
        )}

        {/* Top Rated */}
        {topRatedLoading ? (
          <Loading />
        ) : (
          <TheSlider
            title={"Top Rated"}
            SlideData={toprated}
            trending={false}
          />
        )}

        {/* Popular */}
        {popularLoading ? (
          <Loading />
        ) : (
          <TheSlider title={"Popular"} SlideData={popular} trending={false} />
        )}

        {/* Airing Today */}
        {airingTodayLoading ? (
          <Loading />
        ) : (
          <TheSlider
            title={"Airing Today"}
            SlideData={AiringToday}
            trending={false}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
