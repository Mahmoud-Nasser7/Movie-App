import axios from "axios";
import { useEffect, useState } from "react";

const VideoPlay = ({ videoId, close }) => {
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/movie/${videoId}/videos`);
      const videos = response.data.results;
      const trailer = videos.find(video => video.type === "Trailer");
      setVideoKey(trailer ? trailer.key : videos[0]?.key); 
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="fixed flex bg-neutral-700 inset-0 z-40 bg-opacity-30">
      <div className="container flex justify-center items-center ">
        <div className="bg-black w-full relative max-w-screen-lg aspect-video overflow-hidden rounded">
          <button className="absolute right-3 top-3 z-50 text-white text-xl" onClick={close}>
            ❌
          </button>
          {loading ? (
            <p className="text-white text-center mt-20">Loading...</p>
          ) : (
            videoKey && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey}`}
                frameBorder="0"
                allowFullScreen
                title="Movie Trailer"
              ></iframe>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPlay;
