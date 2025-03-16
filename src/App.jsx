import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import MobileNav from "./components/MobileNav"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setBannerData ,setImageUrl } from "./store/movieSlice"
import Footer from "./components/Footer"
const App = () => {
  const dispatch = useDispatch()
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
      dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchTrednings();
    fetchConfig()
  }, []);
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

export default App