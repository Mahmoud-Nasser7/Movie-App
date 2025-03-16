import { NavLink } from "react-router-dom";
import { mobilenav } from "../db/NavBar";
const MobileNav = () => {
  return (
    <section className="lg:hidden flex justify-between items-center h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full">
      <div className=" flex justify-between items-center w-full h-full px-3">
      {mobilenav.map((item, index) => (
         <NavLink
         key={index}
         to={item.href}
         className={({ isActive }) =>
           `text-neutral-500 text-sm flex h-full flex-col justify-center items-center ${
             isActive && "text-white"
           }`
         }
       >
        <div>
        <item.icon size={22} />
        </div>
        <div>
          {item.label}
        </div>
       </NavLink>
      ))}
      </div>
    </section>
  );
};

export default MobileNav;
