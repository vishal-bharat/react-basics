import { useState, createContext, useContext } from "react";
import { Link } from "react-router";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import HeaderContext from "../context/HeaderContext"



const AppName = () => (
  <a href="/ " className='w-[100px]'>
    <img className="w-full" alt="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" />
  </a>

);

const isAuthenticated = () => {
  //API call
  return true;
}



//ES6 lamda functions 
export const HeaderComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isToggled, setIsToggled] = useState(0);


  const { city, setCity } = useContext(HeaderContext);
  //const [cityContext, setCityContext] = useContext();

  const showSideMenu = () => {
    setIsToggled(true);
  }
  const hideSideMenu = () => {
    setIsToggled(false);
  }
  return (
    <>
      <div className="black-overlay h-full w-full fixed duration-500 " onClick={hideSideMenu} style={{
        opacity: isToggled ? 1 : 0,
        visibility: isToggled ? "visible" : "hidden"
      }}>
        <div className="w-[500px] bg-white h-full absolute duration-[600ms]" onClick={(e) => e.stopPropagation()} style={{
          left: isToggled ? '0%' : '-100%'
        }}></div>
      </div>
      <div className='p-3 shadow-xl'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
          <AppName />
          <div className="p-4 text-[#ff5200] font-bold text-[18px]">
            <select
              className=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Banglore">Banglore</option>
            </select>
          </div>
          <nav className="flex gap-12 list-none ml-auto item-center text-[18px]">
            <li className="flex items-center hover:text-[#ff5200] gap-2"><IoSearchSharp /><Link to="/"> Search</Link></li>
            <li className="flex items-center hover:text-[#ff5200] gap-2"><CiDiscount1 /><Link to="/about">  Discount</Link></li>
            <li className="flex items-center hover:text-[#ff5200] gap-2"><IoIosHelpBuoy /><Link to="/cart">Help</Link></li>
            <li className="flex items-center hover:text-[#ff5200] gap-2">
              <CiLogin />
              <button onClick={() => {
                setIsAuthenticated(!isAuthenticated)
              }}>{isAuthenticated ? "Logout" : "Login"}</button>
            </li>
            <li className="flex items-center hover:text-[#ff5200] gap-2"><RiShoppingBag3Line /><Link to="/cart">Cart</Link></li>
          </nav>

        </div>
      </div>
    </>
  )
};