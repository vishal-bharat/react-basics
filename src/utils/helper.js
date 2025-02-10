
export function filterRestaurants(searchText, restaurantList) {
  console.log(searchText);
  return restaurantList.filter((r) => r.info.name.toLowerCase().includes(searchText.toLowerCase()));
}