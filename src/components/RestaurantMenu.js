import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
const ResturantMenu = () => {
  const params = useParams();
  const [restData,setRestData] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, [params.id]);
  const fetchRestaurant = async () => {
    const urlData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4358411&lng=78.3467857&restaurantId=${params.id}`
    );
    const data = await urlData.json();
    setRestData(data.data.cards[0].card.card.info);
  };


  return restData.length === 0 ? <Shimmer/>:(
    <div className="restaurant-menu">
      <img src={CDN_URL+restData.cloudinaryImageId}></img>
      <h1>RestaurantName: {restData.name}</h1>
    </div>
  );
};

export default ResturantMenu;
