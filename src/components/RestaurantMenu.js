import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const ResturantMenu = () => {
  const { id } = useParams();
  const restData = useRestaurantMenu(id);
  const { cuisines } = restData;
  const dispatch = useDispatch();
  console.log(restData);
  return restData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <img src={CDN_URL + restData.cloudinaryImageId}></img>
      <h1>RestaurantName: {restData.name}</h1>
      <ul>
        {cuisines.map((element) => (
          <li key={element}>
            {element}{" "}
            <button key={element} className="cursor-pointer" onClick={() => {
            dispatch(addItem(element))
            }}>
              add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
