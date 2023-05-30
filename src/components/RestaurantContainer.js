import {CDN_URL} from "../utils/constants";
import REST_DATA from "../utils/data";

const RestauranCard = (props) => {
    const { restaurantData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
      restaurantData?.data;
    return (
      <div className="restaurant-card">
        <img
          alt="res-logo"
          src={CDN_URL
             +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100} for Two</h4>
      </div>
    );
  };
  const RestaurantContainer = () => {
    return (
      <div className="restaurant-container">
        {REST_DATA.map((item) => (
          <RestauranCard key={item.data.id} restaurantData={item} />
        ))}
      </div>
    );
  };

  export default RestaurantContainer;