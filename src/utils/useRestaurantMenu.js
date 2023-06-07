import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restData, setRestData] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, [restaurantId]);
  const fetchRestaurant = async () => {
    const urlData = await fetch(RESTAURANT_URL + `${restaurantId}`);
    const data = await urlData.json();
    setRestData(data.data.cards[0].card.card.info);
  };
  return restData;
};

export default useRestaurantMenu;
