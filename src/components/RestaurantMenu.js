
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const ResturantMenu = () => {
  const { id } = useParams();
  const restData = useRestaurantMenu(id);

  return restData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <img src={CDN_URL + restData.cloudinaryImageId}></img>
      <h1>RestaurantName: {restData.name}</h1>
    </div>
  );
};

export default ResturantMenu;
