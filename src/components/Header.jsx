import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Navigation } from "../db/NavBar";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join("")
  const [searchQuery , setSearchQuery] = useState(removeSpace)
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    if(searchQuery) {
      navigate(`/search?q=${searchQuery}`)
    }
    
    },
    [searchQuery]
  )
  return (
    <header className="fixed z-20 top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-3 h-full flex items-center">
        <Link to={"/"}>
          <img className="h-8 w-auto" src={logo} alt="Movie App" />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 ml-4">
          {Navigation.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="ml-auto mr-3 ">
          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className=" border-none rounded-lg w-full py-2 px-3 text-sm text-neutral-200 bg-neutral-600 focus:outline-none focus:ring-0"
            placeholder="Search..."
          />
          <IoSearchSharp className="h-6 w-6 cursor-pointer text-neutral-300 hover:text-neutral-100 transition-all" />
          </form>
        </div>
     
      </div>
    </header>
  );
};

export default Header;
