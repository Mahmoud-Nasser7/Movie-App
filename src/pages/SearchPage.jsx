import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Loading from "../components/Loading";
const SearchPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/search/movie`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [location.search]);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <div className="container">
    
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {data.map((searchData) => (
            <Card
              movie={searchData}
              key={Math.random()}
              media_type={searchData.media_type}
            />
          ))}
        </div>
        {loading && <Loading/>
   


}
      </div>
    </div>
  );
};

export default SearchPage;
