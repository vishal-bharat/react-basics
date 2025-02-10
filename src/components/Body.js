
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./shimmer";
import { useState, useEffect, useContext } from "react";
import { filterRestaurants } from "../utils/helper";
import { Category } from "./Category";
import { useAsyncError } from "react-router";
import HeaderContext from "../context/HeaderContext";
import { REST_LINKS } from "../config";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const BodyComponent = () => {
  const [searchText, setSearchText] = useState("KFC");
  const [restaurant, setRestaurant] = useState([]);
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterRestaurantsrestaurant, setfilterRestaurantsrestaurant] = useState([]);
  const { city } = useContext(HeaderContext);
  const [status, setSatus] = useState(0);

  useEffect(() => {
    getRestaurants();
  }, [city]);

  async function getRestaurants() {
    const restoLink = REST_LINKS[city.toUpperCase()];
    console.error(restoLink);
    const data = await fetch(restoLink);
    const json = await data.json();
    console.error(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setTopRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setfilterRestaurantsrestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setCategory(json.data.cards[0].card.card.imageGridCards.info)
  }

  const moveLeft = () => {
    if (status > 0)
      setSatus(status - 300);
  }
  const moveRight = () => {
    if (status < 1200)
      setSatus(status + 300);
  }

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Category category={category} />
      <div className="searchBar">
        <input type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.info(searchText);
          }} />
        <button onClick={() => {
          const data = filterRestaurants(searchText, restaurant);
          const finalData = data.length === 0 ? restaurant : data;
          setfilterRestaurantsrestaurant(finalData);
        }}>Search</button>
      </div>


      <div className="max-w-[1200px] mx-auto ">
        <div className="flex my-5 items-center justify-between">
          <div className="text-[25px] font-bold">Top restaurant chains in {city}
          </div>
          <div className="flex">
            <span onClick={moveLeft} className="flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7]"><FaArrowLeft /></span>
            <span onClick={moveRight} className="flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7]"><FaArrowRight /></span>
          </div>
        </div>


        <div className="flex gap-4 overflow-hidden">
          {
            topRestaurant.map(restaurant => {
              return <div style={{ transform: `translateX(-${status}%)` }}> <RestaurantCard {...restaurant.info} key={restaurant.id} /></div>
            })

          }
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto ">
        <div className="flex my-5 items-center justify-between">
          <div className="text-[25px] font-bold">Restaurants with online food delivery in  {city}
          </div>
        </div>


        <div className="grid grid-cols-4 gap-3">
          {
            filterRestaurantsrestaurant.map(restaurant => {
              return <RestaurantCard {...restaurant.info} key={restaurant.id} />
            })

          }
        </div>
      </div>
    </>
  )
};