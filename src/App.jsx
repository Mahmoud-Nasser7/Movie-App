import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import MobileNav from "./components/MobileNav"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setBannerData, setImageUrl } from "./store/movieSlice"
import Footer from "./components/Footer"
import Loading from "./components/Loading"

const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  const fetchTrednings = async () => {
    try {
      const response = await axios.get('/trending/all/week');    
      dispatch(setBannerData(response.data.results))
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const fetchConfig = async () => {
    try {
      const response = await axios.get('/configuration');
      dispatch(setImageUrl(response.data.images.secure_base_url + "w500")); // Use "w500" instead of "original"
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  useEffect(() => {
    fetchTrednings();
    fetchConfig();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black  flex items-center justify-center text-white text-2xl">
        <Loading/>
      </div>
    );
  }

  return (
    <div className="pb-12 lg:pb-0">
      <Header/>
      <div className="min-h-[100vh]">
        <Outlet  />
      </div>
      <Footer/>
      <MobileNav/>
    </div>
  )
}

export default App;
