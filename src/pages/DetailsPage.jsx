import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
const DetailsPage = () => {
  const params = useParams()
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/movie/${params?.id}`);
        setData(response.data);
        
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []); 
  
  
  
  return (
    <div className="pt-16 bg-neutral-900-900 text-white min-h-screen">
    <div className="container pt-10 pb-5 mx-auto px-5">
      {data && (
        <>
          <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
            <img
              className="w-[300px] rounded-lg shadow-lg"
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt={data?.title}
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">{data?.title || 'No Title Available'}</h1>
              <p className="text-gray-300 leading-relaxed">{data?.overview || 'No Overview Available'}</p>
            </div>
          </div>
  
          <div className="flex justify-center gap-10 mb-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold">⭐ Rating</h2>
              <p className="text-lg">{data?.vote_average ? data.vote_average.toFixed(1) : 'N/A'}</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">🗳️ Votes</h2>
              <p className="text-lg">{data?.vote_count?.toLocaleString() || 'N/A'}</p>
            </div>
          </div>
  
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {data?.genres?.map((genre, index) => (
              <span key={Math.random()} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>
  
          <div className="text-center text-gray-400 mb-5">
            <p>📅 Release Date: {data?.release_date || 'Unknown'}</p>
          </div>
        </>
      )}
  
      {!data && (
          <Loading/>
      )}
    </div>
  </div>
  
  
  )
}

export default DetailsPage