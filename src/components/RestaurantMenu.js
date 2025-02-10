import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MenuCard } from "./MenuCard";
import { Shimmer } from "./shimmer";

export const RestaurantMenu = () => {

  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const { id } = useParams();
  //const { id } = restaurantId;

  useEffect(() => {
    getRestaurantMenu(id);
  }, []);

  async function getRestaurantMenu(restaurantId) {
    console.error(restaurantId);
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0218215&lng=73.0907&restaurantId=" + restaurantId);
    const json = await data.json();
    setRestaurantMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

  }
  return restaurantMenu.length === 0 ? <Shimmer /> : (<>
    <div className="menu-list">
      {
        restaurantMenu.map(menuCard => {
          return <MenuCard {...menuCard.card.info} key={menuCard.card.info.id} />
        })
      }
    </div>
  </>);
}